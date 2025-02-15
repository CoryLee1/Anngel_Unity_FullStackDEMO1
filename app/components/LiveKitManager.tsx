"use client";
import { useEffect, useState } from "react";
import { Room, Track } from "livekit-client";

const sendMessageToUnity = (message: any) => {
  if (typeof window !== "undefined" && (window as any).unityInstance) {
    (window as any).unityInstance.SendMessage("GameManager", "ReceiveMessage", JSON.stringify(message));
  }
};

const LiveKitManager = ({ url, token }: { url: string; token: string }) => {
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const connectToRoom = async () => {
      try {
        const newRoom = new Room();
        await newRoom.connect(url, token);
        newRoom.localParticipant.setCameraEnabled(true);
        newRoom.localParticipant.setMicrophoneEnabled(true);
        setRoom(newRoom);
        console.log("✅ LiveKit 连接成功");

        // 监听远程音频流
        newRoom.on("trackSubscribed", (track, publication, participant) => {
          if (track.kind === Track.Kind.Audio) {
            console.log("✅ LiveKit 音频流:", participant.identity);
            sendMessageToUnity({ event: "audioReceived", participant: participant.identity });
          }
        });

      } catch (error) {
        console.error("❌ LiveKit 连接失败:", error);
      }
    };

    connectToRoom(); // ✅ 调用连接函数

    return () => {
      if (room) {
        room.disconnect();
        console.log("✅ LiveKit 断开连接");
      }
    };
  }, [url, token]);

  return <div className="w-full h-16 text-white bg-black">LiveKit 连接中...</div>;
};

export default LiveKitManager;
