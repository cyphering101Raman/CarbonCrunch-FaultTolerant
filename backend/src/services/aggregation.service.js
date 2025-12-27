import NormalizedData from "../models/NormalizedData.model.js";

export const getAggregates = async ({ client_id, from, to }) => {
    const match = {};

    if (client_id) match.client_id = client_id;
    if (from || to) {
        match.timestamp = {};
        if (from) match.timestamp.$gte = new Date(from);
        if (to) match.timestamp.$lte = new Date(to);
    }

    const result = await NormalizedData.aggregate([
        { $match: match },
        {
            $group: {
                _id: null,
                count: { $sum: 1 },
                totalAmount: { $sum: "$amount" },
            },
        },
        {
            $project: {
                _id: 0,
                count: 1,
                totalAmount: 1,
            },
        },
    ]);

    return result[0] || { count: 0, totalAmount: 0 };
};
