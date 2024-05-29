import SurveyContainer from "./components/surveyContainer";
import ResultsButtonClient from '@components/ResultsButtonClient';

export default function Home() {
  return (
   <div>
    <ResultsButtonClient/>
    <SurveyContainer />
   </div> 
  );
};