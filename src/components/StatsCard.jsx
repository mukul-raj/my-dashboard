export default function StatsCard({ title, value, change, positive }) {
  return (
    <div className="col-span-3 bg-white p-4 rounded-2xl shadow">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
      <span className={`${positive ? "text-green-500" : "text-red-500"} text-sm`}>
        {change}
      </span>
    </div>
  );
}
