import React from 'react';

const Spreadsheet = () => {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMDUI7HkG2cMY6PTiC-ZGINKEUnUlfBa7nrMCQ8HQJKJoFCNB-sq6IpkXRbBk-STyjWwn5lOpdX_qh/pubhtml';
  return (
    <div className="widget">
      <iframe src={sheetUrl} frameBorder="0" className="w-[838px] h-80 rounded-lg border-gray-400 border-2 mt-6"></iframe>
    </div>
  );
};

export default Spreadsheet;