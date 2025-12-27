import { useState } from "react";
import EventForm from "./components/EventForm";
import AggregateView from "./components/AggregateView";
import { ingestEvent, fetchAggregate } from "./api";

function App() {
  const [response, setResponse] = useState(null);
  const [aggregate, setAggregate] = useState(null);

  const handleSubmit = async (payload) => {
    const res = await ingestEvent(payload);
    setResponse(res.data);

    const agg = await fetchAggregate();
    setAggregate(agg.data.data);
  };
  

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-3 text-lg text-center font-semibold text-gray-700">
        Change the data as per need
      </h2>
      <EventForm onSubmit={handleSubmit} />
      {response && <pre className="mt-4">{JSON.stringify(response, null, 2)}</pre>}
      {aggregate && <AggregateView data={aggregate} />}
    </div>
  );
}

export default App;
