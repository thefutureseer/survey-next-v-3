const surveyJson = {
 "title": "survey everything ",
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "question1",
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
     "name": "question2",
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
     "name": "question3",
     "choices": [
      "Item 1",
      "Item 2",
      "Item 3"
     ]
    },
    {
     "type": "rating",
     "name": "question4"
    },
    {
     "type": "tagbox",
     "name": "question5",
     "choices": [
      "Item 2",
      "Item 3"
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "boolean",
     "name": "question6"
    }
   ]
  }
 ]
}

export default surveyJson;