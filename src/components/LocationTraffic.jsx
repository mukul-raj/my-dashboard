import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "United States", value: 38.6, color: "#000000" },
  { name: "Canada", value: 22.5, color: "#86efac" },
  { name: "Mexico", value: 30.8, color: "#93c5fd" },
  { name: "Other", value: 8.1, color: "#7dd3fc" },
];

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const r = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      fontSize={12}
      textAnchor="middle"
      dominantBaseline="central"
      style={{ pointerEvents: "none" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function LocationTraffic() {
  const filtered = data.filter(d => d.value > 0);

  return (
    <div className="col-span-6 bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold mb-3">Traffic by Location</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="w-full">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={filtered}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                labelLine={false}
                label={renderLabel}
                stroke="transparent"
              >
                {filtered.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="space-y-2">
          {data.map((d) => (
            <li key={d.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                  aria-hidden
                />
                <span className="text-sm text-gray-700">{d.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {d.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
