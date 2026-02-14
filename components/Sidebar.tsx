export default function Sidebar({ highlights }: any) {
  if (!highlights.length) {
    return <div className="p-6">All markers look normal.</div>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white h-full">
      {highlights.map((h: any, index: number) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-bold capitalize">{h.organ}</h2>
          <p className="text-sm mt-2">{h.explanation}</p>
          <p className="text-sm mt-2 text-yellow-300">
            👶 ELI5: {h.eli5}
          </p>
        </div>
      ))}
    </div>
  );
}