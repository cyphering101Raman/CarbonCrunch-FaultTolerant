export default function AggregateView({ data }) {
    return (
        <div className="mt-4 bg-white p-4 rounded shadow">
            <p>Count: {data.count}</p>
            <p>Total Amount: {data.totalAmount}</p>
        </div>
    );
}
