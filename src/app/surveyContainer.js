'use client'

import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui';
import { Model} from "survey-core";
import { useCallback } from 'react';
import surveyJson from "../data/surveyBones";

const SurveyContainer = () => {
  const survey = new Model(surveyJson);
  //set up an alert to just show something
  const setAlert = useCallback((sender)=>{
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(setAlert);

  return <Survey model={survey}/>;
 
}

// const SURVEY_ID = 1;

// export function SurveyContainer( ) {
//   const survey = new Model(surveyJson);
//   const surveyCompleted = useCallback((survey)=>{
//     const userId = 100;
//     survey.setValue("userID", userId);
//     saveSurveyResults(
//       "Rowzzy etc.."+ SURVEY_ID,
//       survey.data
//     )
//   }, [])

//   survey.onComplete.add(surveyCompleted);

//   return <Survey model={survey}/> ;
// }

// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default SurveyContainer;