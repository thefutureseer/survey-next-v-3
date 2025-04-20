import SurveyContainer from "./components/survey/surveyContainer";
import ResultsButtonClient from '@components/survey/ResultsButtonClient';
import InstallButton from "@components/common/InstallButton";

export default function Home() {

  return (
   <div>    
    <div className="install-btn-container">
      <InstallButton />
    </div>
    <ResultsButtonClient/>
    <SurveyContainer />
   </div> 
  );
};