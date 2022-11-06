import { React, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export const BoxAnimationLogin = () => {
  const [styles, api] = useSpring(() => ({
    from: { x: -50, opacity: 1, background: "#ad1fff" },
  }));

  useEffect(() => {
    api({
      x: 50,
      opacity: 1,
      background: "#277ef4",
      loop: { reverse: true },
    });
  }, [api]);

  return (
    <animated.div
      style={{
        width: 50,
        height: 50,
        borderRadius: 8,
        ...styles,
      }}
    />
  );
};
