
export const normalizeEvent = (rawData) => {
    const payload = rawData?.payload || {};

    const client_id =
        rawData?.source ||
        payload?.client ||
        payload?.client_id ||
        null;

    const metric =
        typeof payload?.metric === "string"
            ? payload.metric.trim()
            : null;

    let amount = null;
    if (payload?.amount !== undefined) {
        const parsed = Number(
            String(payload.amount).replace(/,/g, "")
        );
        amount = Number.isFinite(parsed) ? parsed : null;
    }

    let timestamp = null;
    if (payload?.timestamp) {
        const date = new Date(payload.timestamp);
        timestamp = isNaN(date.getTime())
            ? null
            : date.toISOString();
    }

    return {
        client_id,
        metric,
        amount,
        timestamp,
        raw_data: rawData,
    };
};
