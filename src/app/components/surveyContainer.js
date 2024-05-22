'use client';

// Import survey styles
import 'survey-core/defaultV2.min.css';
import '../../styles/survey.css'

// Import Survey component from survey-react-ui library
import { Survey } from 'survey-react-ui';

// Import Model class from survey-core library
import { Model } from "survey-core";

// Import survey JSON data
import surveyJson from "../../data/surveyBones";

// Define SurveyContainer functional component
const SurveyContainer = () => {
  // Create a new survey model using the survey JSON data
  const survey = new Model(surveyJson);

  // Add an event handler for when the survey is completed
  survey.onComplete.add(async function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();

        //set css
        survey.css = {

        }

    
    // Log the finished sent survey results to the console
    const finishedSurvey = sender.data;
    console.log(" survey results", sender.data);

// Send the finished survey data to the backend API
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
}
});

  // Render the Survey component with the survey model
  return <Survey model={survey}/>
}

// Export the SurveyContainer component
export default SurveyContainer;