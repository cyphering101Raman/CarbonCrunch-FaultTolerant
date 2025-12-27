import RawEvent from "../models/RawEvent.model.js";
import NormalizedData from "../models/NormalizedData.model.js";
import { normalizeEvent } from "../services/normalization.service.js";
import { generateFingerprint } from "../services/fingerprint.service.js";

const ingestData = async (req, res) => {
    try {
        const inputRawData = req.body;
        if (!inputRawData) {
            return res.status(400).json({ error: "No data provided" });
        }

        const rawData = await RawEvent.create(inputRawData);

        const normalized = normalizeEvent(rawData);
        const fingerprint = generateFingerprint(normalized);

        try {
            const normalizedData = await NormalizedData.create({
                ...normalized,
                fingerprint,
                raw_data_id: rawData._id,
            });

            return res.status(200).json({
                success: true,
                status: "processed",
                data: normalizedData,
            });
        } catch (err) {
            if (err.code === 11000) {
                return res.status(200).json({
                    success: true,
                    status: "duplicate",
                });
            }
            throw err;
        }
    } catch (error) {
        console.error("Error ingesting failed:", error.message);
        return res.status(500).json({
            success: false,
            error: "Failed to ingest data",
        });
    }
};

export { ingestData };
