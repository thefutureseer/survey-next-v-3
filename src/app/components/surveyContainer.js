'use client'

// Import survey styles
import 'survey-core/defaultV2.min.css';

// Import Survey component from survey-react-ui library
import { Survey } from 'survey-react-ui';

// Import Model class from survey-core library
import { Model } from "survey-core";

// Import survey JSON data
import surveyJson from "../../data/surveyBones";

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Define SurveyContainer functional component
const SurveyContainer = () => {
  // Create a new survey model using the survey JSON data
  const survey = new Model(surveyJson);

  // Add an event handler for when the survey is completed
  survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();

    // Create a new XMLHttpRequest object for making the POST request
    const xhr = new XMLHttpRequest();
    
    console.log("MongoDB Connection String:", process.env.mongoSurveyDB);
    // Open a POST request to the MongoDB server using the connection string from environment variables
    xhr.open("POST", process.env.mongoSurveyDB);

    // Set the request header to indicate JSON content
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    // Define the onload and onerror event handlers for the request
    xhr.onload = xhr.onerror = function () {
      // Check the status code of the response
      if (xhr.status == 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };

    // Send the survey data as a JSON string in the request body
    xhr.send(JSON.stringify(sender.data));
    
    // Log the sent survey results to the console
    console.log(" survey results", sender.data);
  });

  // Render the Survey component with the survey model
  return <Survey model={survey}/>
}

// Export the SurveyContainer component
export default SurveyContainer;