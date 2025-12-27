import crypto from "crypto";

export const generateFingerprint = (normalizedData) => {
    const {
        client_id = "",
        metric = "",
        amount = "",
    } = normalizedData;

    const baseString = `${client_id}|${metric}|${amount}`;
    console.log("fingerprint file--basestring: ", baseString);

    return crypto
        .createHash("sha256")
        .update(baseString)
        .digest("hex");
};
