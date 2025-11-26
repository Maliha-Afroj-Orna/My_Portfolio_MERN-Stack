import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <DotLottieReact
        className="h-46 w-46 md:h-96 md:w-96"
        src="/json/loading.lottie"
        loop
        autoplay
      />
    </div>
  );
}
