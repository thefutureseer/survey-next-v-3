'use client';
import { useRouter } from 'next/navigation';

const ResultsButtonClient = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/results');
  };

  return (
    <button onClick={handleClick}>
      See results page
    </button>
  );
};

export default ResultsButtonClient;