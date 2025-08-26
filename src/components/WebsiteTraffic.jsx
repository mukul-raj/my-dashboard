const sites = ["Google", "YouTube", "Instagram", "Pinterest", "Facebook", "Twitter", "Tumblr"];

export default function WebsiteTraffic() {
  return (
    <div className="col-span-4 bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold mb-2">Traffic by Website</h4>
      <ul className="space-y-2">
        {sites.map((site, i) => (
          <li key={i} className="flex justify-between items-center">
            <span>{site}</span>
            <span className="w-32 h-2 bg-gray-200 rounded-lg">
              <span
                className={`block h-2 bg-black rounded-lg ${
                  site === "Instagram" ? "w-2/3" : "w-1/3"
                }`}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
