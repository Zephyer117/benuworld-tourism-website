export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="h-1 w-40 overflow-hidden rounded-full bg-primary-teal/15">
        <div className="h-full w-1/2 rounded-full bg-primary-teal animate-pulse" />
      </div>
    </div>
  );
}
