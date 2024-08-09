import React from 'react';
const Spreadsheet = () => {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/1bP4DSSFq1afUPIStMp4_4xbEzNSGoqVK8HKkoRtuPk8/edit?gid=0#gid=0/pubhtml';
  return (
    <div className="widget">
      <iframe src={sheetUrl} frameBorder="0" className="w-[838px] h-80 rounded-lg border-gray-400 border-2 mt-6"></iframe>
    </div>
  );
};

export default Spreadsheet;