export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black border-opacity-80 border-solid border-white"></div>
    </div>
  );
}
