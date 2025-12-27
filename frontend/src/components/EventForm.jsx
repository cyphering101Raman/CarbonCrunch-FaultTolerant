import { useState } from "react";

export default function EventForm({ onSubmit }) {
    const [json, setJson] = useState(`{
  "source": "client_A",
  "payload": {
    "metric": "value",
    "amount": "1200",
    "timestamp": "2024/01/01"
  }
}`);

    const submit = () => {
        onSubmit(JSON.parse(json));
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <textarea
                className="w-full h-60 border p-2"
                value={json}
                onChange={(e) => setJson(e.target.value)}
            />
            <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white"
                onClick={submit}
            >
                Submit
            </button>
        </div>
    );
}
