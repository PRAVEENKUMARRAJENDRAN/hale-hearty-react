import React from "react";
import { useSpring, animated,easings } from "react-spring";

export const BoxAnimation = () => {
  const { background, rotateZ } = useSpring({
    from: {
      background: "#277ef4",
      rotateZ: 0,
    },
    to: {
      background: "#ad1fff",
      rotateZ: 225
    },
    config: {
      duration: 1000,
      easing: easings.easeInOutQuart,
    },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        background,
        rotateZ,
        width: 50,
        height: 50,
        borderRadius: 8,
      }}
    />
  );
};
