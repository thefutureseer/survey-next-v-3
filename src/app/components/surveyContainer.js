'use client';
import 'survey-core/defaultV2.min.css';
import '../../styles/survey.css';
import { Survey } from 'survey-react-ui';
import { Model } from "survey-core";
import surveyJson from "../../data/surveyBones";
const SurveyContainer = () => {
  const survey = new Model(surveyJson);
  survey.onComplete.add(async function (sender, options) {
    options.showSaveInProgress();
    options.showSaveSuccess();
    const finishedSurvey = sender.data;
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
  return <Survey model={survey}/>
};
export default SurveyContainer;