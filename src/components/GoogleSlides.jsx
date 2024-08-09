import React from 'react';
const GoogleSlide = () => {
  const slideUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vTmEWmxPo2AzEKHhpjj4BiVsIFFNV3eXeteuBKc7swBhlEt6DULgEfofsAmwOEJBMAZpxDzK5KUpaXI/embed?start=false&loop=false&delayms=3000';
  return (
    <div className="widget">
      
      <iframe src={slideUrl} className=" rounded-3xl overflow-hidden" scrolling="no" width="415" height="220" ></iframe>
    </div>
  );
};
export default GoogleSlide;