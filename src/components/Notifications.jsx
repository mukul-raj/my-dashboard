import { CircleCheck, BellRing, UserPlus } from "lucide-react";

const items = [
  { icon: <CircleCheck className="h-4 w-4 text-emerald-500" />, text: "You fixed a bug.", time: "Just now" },
  { icon: <UserPlus className="h-4 w-4 text-indigo-500" />, text: "New user registered.", time: "59 minutes ago" },
  { icon: <CircleCheck className="h-4 w-4 text-emerald-500" />, text: "You fixed a bug.", time: "12 hours ago" },
  { icon: <BellRing className="h-4 w-4 text-sky-500" />, text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

export default function Notifications() {
  return (
    <section>
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Notifications</h3>
      <ul className="space-y-3 mb-6">
        {items.map((n, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200">
              {n.icon}
            </span>
            <div className="text-sm leading-5">
              <p className="text-gray-800">{n.text}</p>
              <p className="text-xs text-gray-400">{n.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
