import mongoose from "mongoose";

const RawEventSchema = new mongoose.Schema(
    {
        source: String,
        payload: mongoose.Schema.Types.Mixed,
    },
    {timestamps: true}
);

const RawEvent = mongoose.model("RawEvent", RawEventSchema);
export default RawEvent;
