import SurveyContainer from "./components/surveyContainer";
import ResultsButtonClient from '@components/ResultsButtonClient';
import ServiceWorkerRegister from "@components/service-worker";

export default function Home() {
  return (
   <div>
    <ResultsButtonClient/>
    <SurveyContainer />
    <ServiceWorkerRegister />
   </div> 
  );
};