'use client';
import React from 'react';

const ResultsList = ({ results }) => {
  if (!results || results.length === 0) return <p>No results found.</p>;

  // Define a rainbow set of colors to cycle through
  const colors = ['red', 'yellow', 'green', 'blue',  'purple', 'orange', 'magenta'];


  return (
    <div>
      <h1 style={{textAlign: "center"}}>Total Survey Results</h1>
      <ul style={{background: "black"}}>
        {results.map((result, index) => (
          <li style={{textAlign:"center",border: '4px solid white' }} key={index}> <pre style={{border: '4px dotted gold', background:"#0087ff", color: "white" }}>{index}</pre>
            <pre>{
              //loop over the single object
              //and make each line a different color
              Object.entries(result).map(([key, value], i)=>(
                <div key={i} style={{color: colors[i%colors.length]}}>
                  <strong>{'\n'} Q:{key}</strong>{" " }{'\n'}  A: {value}
                </div>
              ))}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;