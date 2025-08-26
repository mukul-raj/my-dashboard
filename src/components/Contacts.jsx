const people = [
  { name: "Natali Craig", avatar: "/avatars/u1.jpg" },
  { name: "Drew Cano", avatar: "/avatars/u2.jpg" },
  { name: "Andi Lane", avatar: "/avatars/u3.jpg" },
  { name: "Koray Okumus", avatar: "/avatars/u4.jpg" },
  { name: "Kate Morrison", avatar: "/avatars/u5.jpg" },
  { name: "Melody Macy", avatar: "/avatars/u6.jpg" },
];

const Avatar = ({ src, name }) => {
  const initials = name.split(" ").map(w => w[0]).slice(0,2).join("");
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 text-white overflow-hidden">
      {src ? <img src={src} alt="" className="h-full w-full object-cover" /> : <span className="text-xs font-medium">{initials}</span>}
    </span>
  );
};

export default function Contacts() {
  return (
    <section>
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Contacts</h3>
      <ul className="space-y-3">
        {people.map((p, i) => (
          <li key={i} className="flex items-center gap-3">
            <Avatar src={p.avatar} name={p.name} />
            <span className="text-sm text-gray-800">{p.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
