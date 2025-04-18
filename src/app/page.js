import SurveyContainer from "./components/surveyContainer";
import ResultsButtonClient from '@components/ResultsButtonClient';
// import '../styles/survey.css';

export default function Home() {
  return (
   <div>
    <button className="install-btn" style={{ backgroundColor: '#b4eeb6' }}>
      📲 Install App
    </button>
    <ResultsButtonClient/>
    <SurveyContainer />
   </div> 
  );
};