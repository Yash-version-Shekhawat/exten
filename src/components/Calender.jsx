import React from 'react';

const Calender = () => {
  const slideUrl = 'https://calendar.google.com/calendar/embed?height=210&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&showCalendars=0&showPrint=0&showTitle=0&showTz=0&showTabs=0&showNav=0&src=eWFzaHVpdGp5MTEyQGdtYWlsLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043';
  return (
    <div className="widget">
      
      <iframe src={slideUrl} className=" rounded-3xl pt-1 -ml-[0.35rem] overflow-hidden border-2 border-[#6E94DC20]" scrolling="no" width="280" height="260"  ></iframe>
    </div>
  );
};

export default Calender;