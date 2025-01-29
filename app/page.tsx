import UnityPlayer from "./components/UnityPlayer";

export default function Home() {
  return (
    <div>
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg z-10">
        Unity WebGL in Next.js
      </h1>
    <UnityPlayer />
  </div>
  );
}
