import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "Linux", value: 18 },
  { name: "Mac", value: 24 },
  { name: "iOS", value: 20 },
  { name: "Windows", value: 26 },
  { name: "Android", value: 9 },
  { name: "Other", value: 22 },
];

const COLORS = ["#93c5fd", "#86efac", "#111827", "#7dd3fc", "#c084fc", "#facc15"]; // tweak as needed

const formatMillions = (v) => `${v}M`;

const CustomTooltip = ({ active, payload, label }) =>
  active && payload && payload.length ? (
    <div className="rounded-lg bg-white px-3 py-2 shadow border border-gray-100">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-semibold">{payload[0].value}M</div>
    </div>
  ) : null;

export default function DeviceTrafficColorful() {
  return (
    <div className="col-span-6 bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold mb-2">Traffic by Device</h4>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barCategoryGap={40}  margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }} />
          <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} tickLine={false} axisLine={false} domain={[0, 30]} ticks={[0, 10, 20, 30]} tickFormatter={formatMillions} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
