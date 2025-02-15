"use client";

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";

import "@livekit/components-styles";

import { useEffect, useState } from "react";
import { Track } from "livekit-client";

export default function RoomPage() {
  const room = "testroom"; // 你可以动态改成其他房间
  const username = "aiann"; // 可以用随机生成或者用户输入

  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`/api/token?room=${room}&username=${username}`);
        const data = await resp.json();
        if (data.token) {
          setToken(data.token);
        } else {
          console.error("Token 获取失败:", data);
        }
      } catch (e) {
        console.error("Token 请求错误:", e);
      }
    })();
  }, []);

  if (token === "") {
    return <div className="h-screen w-screen flex items-center justify-center">获取 Token 中...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL} // 注意：环境变量要带NEXT_PUBLIC才能暴露给前端
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout tracks={tracks} style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}>
      <ParticipantTile />
    </GridLayout>
  );
}
