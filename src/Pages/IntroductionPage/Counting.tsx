import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const Counting = ({}: {}) => {
  const start = 0;
  const end = 300;
  const [number, setCurrentNumber] = useState(start);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    threshold: 0,
  });
  useEffect(() => {
    const duration = 500;
    const stepTime = Math.abs(Math.floor(duration / (end - start))); // 1
    if (inView) {
      let currentNumber = start;
      const counter = setInterval(() => {
        currentNumber += 1;
        setCurrentNumber(currentNumber);

        if (currentNumber === end) {
          // 2
          clearInterval(counter);
        }
      }); // 3
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {`${inView}`}
      {console.log(inView)}
      {number}
    </div>
  );
};

export default Counting;
