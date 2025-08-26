const items = [
  { avatar: "/avatars/a1.png", bg: "bg-fuchsia-100", text: "Changed the style.", time: "Just now" },
  { avatar: "/avatars/a2.png", bg: "bg-emerald-100", text: "Released a new version.", time: "59 minutes ago" },
  { avatar: "/avatars/a3.png", bg: "bg-sky-100", text: "Submitted a bug.", time: "12 hours ago" },
  { avatar: "/avatars/a4.png", bg: "bg-amber-100", text: "Modified A data in Page X.", time: "Today, 11:59 AM" },
  { avatar: "/avatars/a5.png", bg: "bg-cyan-100", text: "Deleted a page in Project X.", time: "Feb 2, 2025" },
];

const Avatar = ({ src, className }) => (
  <span className={`inline-flex h-8 w-8 rounded-full overflow-hidden ${className}`}>
    <img src={src} alt="" className="h-full w-full object-cover" />
  </span>
);

export default function Activities() {
  return (
    <section>
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Activities</h3>

      <ol className="relative ml-4">
        <span className="absolute left-0 top-0 h-full w-px bg-gray-200" aria-hidden />
        {items.map((a, i) => (
          <li key={i} className="relative pl-6 pb-4 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-white bg-gray-300" />
            <div className="flex items-start gap-3">
              <Avatar src={a.avatar} className={a.bg} />
              <div className="text-sm leading-5">
                <p className="text-gray-800">{a.text}</p>
                <p className="text-xs text-gray-400">{a.time}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
