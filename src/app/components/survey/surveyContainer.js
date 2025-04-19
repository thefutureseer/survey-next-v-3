'use client';
import { Model } from "survey-core";
import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui';
import '@styles/survey.css';
import surveyJson from "../../../data/surveyBones";
import dynamic from 'next/dynamic';
import InstallButton from "@components/common/InstallButton";


const SurveyContainer = () => {
  
  const survey = new Model(surveyJson);
  survey.onComplete.add(async function (sender, options) {
    options.showSaveInProgress();
    options.showSaveSuccess();
    const finishedSurvey = sender.data;
    alert(JSON.stringify(finishedSurvey))
try {
  const response = await fetch('/api/results', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(finishedSurvey),
  });
  if (response.ok) {
    console.log('Survey results saved successfully');
  } else {
    console.error('Failed to save survey results', response.statusText);
  }
} catch (error) {
  console.error('Error saving survey results', error);
};
});
  return (
   <div>
    <div className="install-btn-container">
     <InstallButton />
    </div>
    <Survey model={survey}/>
   </div>
   )
};

// Dynamically import SurveyContainer with SSR disabled
export default dynamic(() => Promise.resolve(SurveyContainer), { ssr: false });