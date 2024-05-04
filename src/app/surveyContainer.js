'use client'

import 'survey-core/defaultV2.min.css';
import { Survey } from 'survey-react-ui';
import { Model} from "survey-core";
import surveyJson from "../data/surveyBones";

export function SurveyContainer( ) {
  const survey = new Model(surveyJson)
  return <Survey model={survey}/> ;
}

export default SurveyContainer;