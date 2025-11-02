import React, { useEffect, useState } from "react";

const AnimatedIcon = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkPointerType = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    };

    checkPointerType();

    // Optional: update on resize/orientation change
    window.addEventListener("resize", checkPointerType);
    return () => window.removeEventListener("resize", checkPointerType);
  }, []);

  return (
    <>
      {isTouchDevice ? (
        <div className="hand-container">
          {/* SVG for touch devices */}
          <svg
            className="hand"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 1">
              <g id="Group 1">
                <path d="M78 52.5a4.5 4.5 0 0 1 4.5 4.5v13.5" className="stroke" strokeWidth="3" />
                <path d="M78 52.5a4.5 4.5 0 0 0 -4.5 4.5v13.5" className="stroke" strokeWidth="3" />
              </g>
              <g id="Group 2">
                <path d="M90 55.5a4.5 4.5 0 0 1 4.5 4.5v10.5" className="stroke" strokeWidth="3" />
                <path d="M90 55.5a4.5 4.5 0 0 0 -4.5 4.5v10.5" className="stroke" strokeWidth="3" />
              </g>
              <g id="Group 3">
                <path d="M102 60a4.5 4.5 0 0 1 4.5 4.5v6" className="stroke" strokeWidth="3" />
                <path d="M102 60a4.5 4.5 0 0 0 -4.5 4.5v6" className="stroke" strokeWidth="3" />
              </g>
              <g id="Group 4">
                <path d="M66 27a4.5 4.5 0 0 1 4.5 4.5v39" className="stroke" strokeWidth="3" />
                <path d="M66 27a4.5 4.5 0 0 0 -4.5 4.5v39" className="stroke" strokeWidth="3" />
              </g>
              <g id="Group 5">
                <path d="M106.5 70.5v13.5" className="stroke" strokeWidth="3" />
                <path d="m106.552 81.204 -0.054 7.5c-0.09 12.426 -10.236 22.425 -22.662 22.337L78 111" className="stroke" strokeWidth="3" />
                <path d="M52.5 87v1.5c0 12.426 10.074 22.5 22.5 22.5h3" className="stroke" strokeWidth="3" />
                <path d="M61.5 69v15" className="stroke" strokeWidth="3" />
                <path d="m61.5 82.552 -1.624 -5.795 -1.013 -2.51a10.395 10.395 0 0 0 -5.771 -5.76l-2.498 -0.999a4.415 4.415 0 0 0 -5.034 6.924l3.12 3.747a8.25 8.25 0 0 1 1.395 2.4L51.75 85.035l0.75 2.715" className="stroke" strokeWidth="3" />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      )}
    </>
  );
};

export default AnimatedIcon;
