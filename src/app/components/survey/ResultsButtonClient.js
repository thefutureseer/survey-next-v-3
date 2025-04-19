'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ResultsButtonClient = () => {
  const router = useRouter();
  const [isResultsPage, setIsResultsPage] = useState(null);

  useEffect(() => {
    setIsResultsPage(window.location.pathname !== '/');
  }, []);

  const handleClick = () => {
    if (isResultsPage === null) return; // Early return if state is not set yet
    if (!isResultsPage) {
      router.push('/results');
    } else {
      router.push('/');
    }
  };

  if (isResultsPage === null) {
    return <button disabled>Loading...</button>;
  }

  return (
    <button onClick={handleClick}>
      {isResultsPage ? 'Survey' : 'Results'}
    </button>
  );
};

export default ResultsButtonClient;