'use client';
import React, { useState, useEffect } from 'react';
import ResultsList from '@/app/components/ResultsList';
import ResultsButtonClient from '@components/ResultsButtonClient';
const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/results');
        const data = await response.json();
        if (response.ok) {
          setResults(data.results);
        } else {
          throw new Error(data.error || 'Failed to fetch results');
        };
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      };
    };
    fetchResults();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <ResultsButtonClient/>
      <h1>Companies / Everyday users / Entertainers</h1>
      <ResultsList results={results} />
    </div>
  );
};
export default ResultsPage;