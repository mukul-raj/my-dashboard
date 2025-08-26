import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", thisYear: 12, lastYear: 18 },
  { name: "Feb", thisYear: 18, lastYear: 15 },
  { name: "Mar", thisYear: 14, lastYear: 22 },
  { name: "Apr", thisYear: 20, lastYear: 14 },
  { name: "May", thisYear: 25, lastYear: 17 },
  { name: "Jun", thisYear: 23, lastYear: 20 },
  { name: "Jul", thisYear: 28, lastYear: 24 },
];

export default function LineChartCard() {
  return (
    <div className="col-span-8 bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold mb-2">Total Users</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="thisYear" stroke="#000" />
          <Line type="monotone" dataKey="lastYear" stroke="#93c5fd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
