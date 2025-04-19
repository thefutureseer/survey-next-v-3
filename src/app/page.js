import SurveyContainer from "./components/survey/surveyContainer";
import ResultsButtonClient from '@components/survey/ResultsButtonClient';

export default function Home() {

  return (
   <div>
    <ResultsButtonClient/>
    <SurveyContainer />
   </div> 
  );
};