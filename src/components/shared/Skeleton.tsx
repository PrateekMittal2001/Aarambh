export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-4 animate-pulse">
      <div className="aspect-square rounded-xl bg-gray-100" />
      <div className="mt-4 space-y-3">
        <div className="h-4 w-3/4 rounded-full bg-gray-100" />
        <div className="h-3 w-full rounded-full bg-gray-100" />
        <div className="h-3 w-1/2 rounded-full bg-gray-100" />
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 rounded bg-gray-100" />
          ))}
        </div>
        <div className="h-5 w-1/3 rounded-full bg-gray-100 mt-4" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
