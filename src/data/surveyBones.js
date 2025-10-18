const surveyJson = {
  "title": "Survey for deeper results",
  "logoPosition": "right",
  "pages": [
    {
      "name": "mainPage",
      "elements": [
        {
          "type": "text",
          "name": "cuteName ",
          "title": "What is you favorite honey name that I call you?"
        },
        {
          "type": "comment",
          "name": "onMind ",
          "title": "Is there anything youd like to discuss before taking this survey?"
        },
        {
          "type": "text",
          "name": "teams ",
          "title": "What are your favorite sports teams?"
        },
        {
          "type": "boolean",
          "name": "fairies ",
          "title": "Do you believe in fairies?",
          "label": "Yes"
        },
        {
          "type": "comment",
          "name": "forgetAMemory ",
          "title": "Which of your childhood memories would you like to forget?"
        },
        {
          "type": "text",
          "name": "favoriteToyOrGame ",
          "title": "What was your favorite childhood toy or game?"
        },
        {
          "type": "text",
          "name": "comfortFood ",
          "title": "What's your favorite comfort food? Please list top 5"
        },
        {
          "type": "radiogroup",
          "name": "snackPreference ",
          "title": "I know you like Savory but when do you like sweet?",
          "choices": ["Day", "Night"]
        },
        {
          "type": "text",
          "name": "endOfLifeDestination ",
          "title": "If you had 3 months to live but could do anything you want who would you spend it with?"
        },
        {
          "type": "comment",
          "name": "memorableTravel ",
          "title": "Share a memorable travel experience you've had."
        },
        {
          "type":"text",
          "name": "exercise ",
          "title": "On a scale from 1-1000 how much do you know about exercise and nutrition?"
        },
        {
          "type": "comment",
          "name": "exoticPetPreference ",
          "title": "If you could have any exotic pet what would it be?",
        },
        {
          "type": "text",
          "name": "spiritAnimal",
          "title": "Do you know what your spirit animal is?"
        },
        {
          "type":"boolean",
          "name":"religion",
          "title": "Have you ever been to an ISKON temple?",
          "label": "Yes"
        },
        {
          "type": "radiogroup",
          "name": "DatingPreference",
          "title": "(Preference/ money is no object) How often would you like to eat at expensive restaurants?",
          "choices": ["All the time (Most days per week)", "Once a week", "a few times a month", "Never"],
          "hasOther": true,
          "otherText": "Other (please specify)"
        },
        {
          "type":"text",
          "name":"mystics?",
          "title": "From 1-1000 rate how much you like fortune tellers"
        }
      ]
    }
  ]
};
export default surveyJson;