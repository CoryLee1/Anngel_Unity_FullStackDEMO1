import Image from "next/image";
import UnityPlayer from "./components/UnityPlayer";



export default function Home() {
  return (
    <div>
    <h1 className="text-center text-2xl font-bold">Unity WebGL in Next.js</h1>
    <UnityPlayer />
  </div>
  );
}
