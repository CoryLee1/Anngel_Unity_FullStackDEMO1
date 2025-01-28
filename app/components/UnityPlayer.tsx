"use client";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityPlayer = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/WebGLBuild.loader.js",
    dataUrl: "/unity/Build/WebGLBuild.data",
    frameworkUrl: "/unity/Build/WebGLBuild.framework.js",
    codeUrl: "/unity/Build/WebGLBuild.wasm",
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity unityProvider={unityProvider} className="w-full h-[600px]" />
    </div>
  );
};

export default UnityPlayer;
