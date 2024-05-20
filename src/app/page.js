import Link from 'next/link';
import SurveyContainer from "./components/surveyContainer";
import ResultsButtonClient from '@components/ResultsButtonClient';

export default function Home() {
  return (
   <div>
    <ResultsButtonClient/>
    {/* <Link href="/api/results">
      <button>See all results</button>
    </Link> */}
    <SurveyContainer />
   </div> 
  );
};