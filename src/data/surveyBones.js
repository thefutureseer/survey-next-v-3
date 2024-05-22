const surveyJson = {
 "title": "Survey for deeper results",
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q1 Check whichever",
     "choices": [
      "Item 1",
      "Item 2",
      "Item 3"
     ],
     "showOtherItem": true,
     "showNoneItem": true,
     "showSelectAllItem": true
    },
    {
     "type": "radiogroup",
     "name": "Q2 Check one",
     "choices": [
      "Item 1",
      "Item 2",
      "Item 3"
     ],
     "showOtherItem": true,
     "showNoneItem": true
    },
    {
     "type": "ranking",
     "name": "Q3 Rank",
     "choices": [
      "Item 1 goes here. ",
      "Item 2 goes here. ",
      "Item 3 goes here. "
     ]
    },
    {
     "type": "rating",
     "name": "Q4 Rating"
    },
    {
     "type": "tagbox",
     "name": "Q5 Add/delete, order your answer",
     "choices": [
      "Item 1. ",
      "Item 2. ",
      "Item 3. "
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "boolean",
     "name": "Q6 True or False"
    }
   ]
  }
 ]
}

export default surveyJson;