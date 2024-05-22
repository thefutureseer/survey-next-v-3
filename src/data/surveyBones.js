const surveyJson = {
 "title": "Lets do a quick survey",
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
     "name": "question3 (rearrange if necessary)",
     "choices": [
      "Item 1 goes here",
      "Item 2 goes here",
      "Item 3 goes here"
     ]
    },
    {
     "type": "rating",
     "name": "question4 (choose one)"
    },
    {
     "type": "tagbox",
     "name": "question5 (add and order)",
     "choices": [
      "Item 1",
      "Item 2",
      "Item 3"
     ]
    }
   ]
  },
  {
   "name": "page2 (True or False)",
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