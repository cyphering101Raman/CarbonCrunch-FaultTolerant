import { getAggregates } from "../services/aggregation.service.js";

export const fetchAggregates = async (req, res) => {
    try {
        const data = await getAggregates(req.query);
        return res.status(200).json({ success: true, data });
    } catch (err) {
        return res.status(500).json({ success: false, error: "Query failed" });
    }
};
