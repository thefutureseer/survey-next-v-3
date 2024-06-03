'use client';
import React from 'react';
import '../../styles/resultsList.css';
import countIdKeys from './CountUsers';

const ResultsList = ({ results }) => {
  const result = results;
  // console.log(JSON.stringify(result));
  if (!results || results.length === 0) return <p>No results found.</p>;
  const headCount = countIdKeys(JSON.stringify(results));
  const colors = ['red', 'yellow', '#4FFFB0', 'blue',  'purple', 'orange', 'magenta'];
  return (
    <div>
      <h2>Total Survey Results</h2>
      <p>Surveys taken: {headCount}</p>
      <ul>
        {results.map((result, index) => (
          <li key={result._id}> <h3 style={{color: colors[index % colors.length], borderTop: '4px solid gold', background:"#0087ff" }}>{index}</h3>
            <pre>{
              Object.entries(result).map(([key, value], i)=>(
                <div key={i} style={{display:'flex', color:colors[i % colors.length]}}>
                  {'\n'} 
                  <p >
                   Q:{key.replace(/-/g, ' ')}{" " }{'\n'} 
                  </p>
                  <p style={{textWrap:'wrap', height:'15%', alignItems:'stretch'}}>
                    A: {Array.isArray(value) ? value.join(', ') : value.toString()}
                  </p> 
                </div>
              ))}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResultsList;