'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const ResultsButtonClient = () => {
  const router = useRouter();
  const [isResultsPage, setIsResultsPage] = useState(false);
  useEffect(() => {
    if (window.location.pathname === '/results') {
      setIsResultsPage(true);
    } else {
      setIsResultsPage(false);
    }
  }, []);
  const handleClick = () => {
    if (isResultsPage) {
      router.push('/');
    } else {
      router.push('/results');
    }
  };
  return (
    <button onClick={handleClick}>
      {isResultsPage ? 'Survey' : 'Results'}
    </button>
  );
};
export default ResultsButtonClient;