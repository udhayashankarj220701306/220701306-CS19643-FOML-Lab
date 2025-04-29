import React, { useRef, useState } from "react";
import Day from "./Day.jsx";
import { useClassStore } from "../stores/useClassStore.js";



const Calendar = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { changeDate } = useClassStore();

  // console.log(today);
  const days = [1,2,3,4,5,6,7];

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // *1 = scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scroll-snap-x snap-mandatory select-none"
            style={{
                scrollbarWidth: "none",        // Firefox
                msOverflowStyle: "none",       // IE 10+
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                // hide scrollbar for Chrome, Safari
                display: "flex",
                WebkitScrollbar: {
                    display: "none"
                }
            }}
        >
          {days.map((ithday, idx) => (
            <button onClick={() => changeDate({ithday})}
              key={idx}
              >
            <Day
              key={idx}
              ithday={ithday}
            />
            </button>
              
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
