'use client';
import React from 'react';

const ResultsList = ({ results }) => {
  if (!results || results.length === 0) return <p>No results found.</p>;

  return (
    <div>
      <h1>Total Survey Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;