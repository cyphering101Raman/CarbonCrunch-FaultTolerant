import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_PORT,
});

export const ingestEvent = (data) => api.post("/ingest", data);
export const fetchAggregate = () => api.get("/aggregate");
