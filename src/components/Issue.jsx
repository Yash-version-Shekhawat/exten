import React, { useState } from 'react';

function Issue() {
  const [issues, setIssues] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addIssue = (e) => {
    e.preventDefault();
    if (title && description) {
      const newIssue = { title, description, id: Date.now() };
      setIssues([...issues, newIssue]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  return (
    <div className="p-4 w-[273px] shadow-xl bg-[#716af210] rounded-3xl h-[408px] mb-9">
      <h1 className="text-xl mb-4">Issue Tracker</h1>
      <form onSubmit={addIssue} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-[#716af2] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Issue
        </button>
      </form>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} className="p-4 mb-2 border rounded">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{issue.title}</h2>
              <button
                onClick={() => deleteIssue(issue.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
            <p>{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Issue;