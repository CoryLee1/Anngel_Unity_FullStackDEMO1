import UnityPlayer from "./components/UnityPlayer";
import LiveKitManager from "./components/LiveKitManager";

export default function Home() {
  const livekitUrl = "wss://angel-fpr9jvgo.livekit.cloud"; // 替换成你的 LiveKit 服务器地址
  const livekitToken = "APISdnbJKj2u3tA"; // 你的 LiveKit Token

  return (
    <div>
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg z-10">
        Unity WebGL in Next.js
      </h1>
      <UnityPlayer />
      <LiveKitManager url={livekitUrl} token={livekitToken} />
    </div>
  );
}
