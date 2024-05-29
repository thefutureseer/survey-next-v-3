const surveyJson = {
  "title": "Survey for deeper results",
  "logoPosition": "right",
  "pages": [
    {
      "name": "mainPage",
      "elements": [
        {
          "type": "text",
          "name": "respondentName",
          "title": "What is your name or code name for this survey?"
        },
        {
          "type": "comment",
          "name": "teamPerformance",
          "title": "How well did our team do in yesterday’s game?"
        },
        {
          "type": "text",
          "name": "supportTeam",
          "title": "Which sports team do you support?"
        },
        {
          "type": "boolean",
          "name": "vampireHighSchool",
          "title": "If you were a vampire, would you attend high school for the rest of your life?",
          "label": "Yes"
        },
        {
          "type": "comment",
          "name": "forgetMemory",
          "title": "Which of your childhood memories would you like to forget?"
        },
        {
          "type": "text",
          "name": "favoriteToy",
          "title": "What was your favorite childhood toy or game?"
        },
        {
          "type": "text",
          "name": "comfortFood",
          "title": "What's your favorite comfort food?"
        },
        {
          "type": "radiogroup",
          "name": "snackPreference",
          "title": "Do you prefer sweet or savory snacks?",
          "choices": ["Sweet", "Savory"]
        },
        {
          "type": "text",
          "name": "dreamDestination",
          "title": "What's your dream travel destination?"
        },
        {
          "type": "comment",
          "name": "memorableTravel",
          "title": "Share a memorable travel experience you've had."
        },
        {
          "type": "radiogroup",
          "name": "petPreference",
          "title": "Are you a cat person or a dog person?",
          "choices": ["Cat", "Dog"]
        },
        {
          "type": "text",
          "name": "reincarnationAnimal",
          "title": "If reincarnation were real, what animal would you like to come back as?"
        },
        {
          "type": "radiogroup",
          "name": "datingPreference",
          "title": "Have you ever had that persistent person who is always trying to catch a date with you while you are single and ready to mingle?",
          "choices": ["All the time", "Once", "That one time doesn't count"],
          "hasOther": true,
          "otherText": "Other (please specify)"
        },
        {
          "type": "boolean",
          "name": "Love",
          "title": "Do you love me or do you love me?",
          "label": "Yes"
        },
      ]
    }
  ]
};
export default surveyJson;