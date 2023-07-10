/// <reference path="./panda.d.ts" />

import React, { useEffect } from "react";

export interface PandaProps {
  id: string;
  // url: string;
  // start: number;
  // pip: boolean;
  // speed: boolean;
  // autoplay: boolean;
  // textTrack: string;
  // onReady: () => void;
  // onTimeUpdate: (timeUpdate: any) => void;
  // onEnd: () => void;
  // onTextTrackChange: (language: string) => void;
}

const Panda = ({ id }: PandaProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.pandavideo.com.br/api.v2.js"; // Replace with the script URL for the video player API
    script.async = true;

    script.onload = () => {
      const player = new PandaPlayer("panda-0f5a40e28f07", {
        onReady: () => {
          console.log("PLAYER LOADED");
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag when the component is unmounted
      document.body.removeChild(script);
    };
  }, [id]);

  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%",
      }}
    >
      <iframe
        id="panda-0f5a40e28f07"
        src={`https://player-vz-9e0394ba-e58.tv.pandavideo.com.br/embed/?v=${id}`}
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Panda;
