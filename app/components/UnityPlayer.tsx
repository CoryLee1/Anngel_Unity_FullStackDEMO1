"use client";

import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityPlayer = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity/Build/WebGLBuild.loader.js",
    dataUrl: "/unity/Build/WebGLBuild.data",
    frameworkUrl: "/unity/Build/WebGLBuild.framework.js",
    codeUrl: "/unity/Build/WebGLBuild.wasm",
  });

  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {!isLoaded && (
        <p className="absolute top-0 left-0 right-0 text-center text-white">
          Loading... {Math.round(loadingProgression * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      />
    </div>
  );
};

export default UnityPlayer;
