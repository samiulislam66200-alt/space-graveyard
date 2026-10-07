export default function ExplorerSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-[#0b101d] border border-space-border/60 rounded-xl overflow-hidden h-[420px] flex flex-col justify-between p-4 space-y-4">
          <div className="w-full h-44 bg-slate-800/60 rounded-lg" />
          <div className="space-y-3">
            <div className="h-6 bg-slate-800/80 rounded w-3/4" />
            <div className="h-4 bg-slate-800/60 rounded w-1/2" />
            <div className="h-16 bg-slate-900 rounded" />
          </div>
          <div className="h-8 bg-slate-800/60 rounded w-full" />
        </div>
      ))}
    </div>
  );
}
