import mongoose from "mongoose";

const NormalizedDataSchema = new mongoose.Schema(
    {
        client_id: {
            type: String,
            index: true,
            default: null,
        },
        metric: {
            type: String,
            index: true,
            default: null,
        },
        amount: {
            type: Number,
            default: null,
        },
        timestamp: {
            type: Date,
            index: true,
            default: null,
        },
        raw_data_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RawEvent",
            required: true,
        },
        fingerprint: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
    },
    { timestamps: true }
);

const NormalizedData = mongoose.model("NormalizedData", NormalizedDataSchema);

export default NormalizedData;
