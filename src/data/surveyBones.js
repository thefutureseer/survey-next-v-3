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
          "name": "team Performance",
          "title": "How well did our team do in yesterday’s game?"
        },
        {
          "type": "text",
          "name": "support Team",
          "title": "Which sports team do you support?"
        },
        {
          "type": "boolean",
          "name": "vampire HighSchool",
          "title": "If you were a vampire, would you attend high school for the rest of your life?",
          "label": "Yes"
        },
        {
          "type": "comment",
          "name": "forget a Memory",
          "title": "Which of your childhood memories would you like to forget?"
        },
        {
          "type": "text",
          "name": "favorite Toy / game",
          "title": "What was your favorite childhood toy or game?"
        },
        {
          "type": "text",
          "name": "comfort Food",
          "title": "What's your favorite comfort food?"
        },
        {
          "type": "radiogroup",
          "name": "snack Preference",
          "title": "Do you prefer sweet or savory snacks?",
          "choices": ["Sweet", "Savory"]
        },
        {
          "type": "text",
          "name": "dream Destination",
          "title": "What's your dream travel destination?"
        },
        {
          "type": "comment",
          "name": "memorable Travel",
          "title": "Share a memorable travel experience you've had."
        },
        {
          "type":"text",
          "name": "Camping anyone?",
          "title": "On a scale from 1-1000 how much do you like camping?"
        },
        {
          "type": "radiogroup",
          "name": "pet Preference",
          "title": "Are you a cat person or a dog person?",
          "choices": ["Cat", "Dog"]
        },
        {
          "type": "text",
          "name": "reincarnation Animal",
          "title": "If reincarnation were real, what animal would you like to come back as?"
        },
        {
          "type":"boolean",
          "name":"religion",
          "title": "Have you ever been to one of those really lively, colorful events, like a Krishna festival, where a very traditional Catholic might raise an eyebrow and call it 'devil worship'? They're actually pretty fascinating!"},
        {
          "type": "radiogroup",
          "name": "Dating Preference re:Persistence",
          "title": "Have you ever had that persistent person who is always trying to catch a date with you while you are single and ready to mingle?",
          "choices": ["All the time", "Once", "That one time doesn't count"],
          "hasOther": true,
          "otherText": "Other (please specify)"
        },
        {
          "type":"text",
          "naem":"mystics?",
          "title": "From 1-1000 rate how much you like psychics and fortune tellers"},
        {
          "type":"choices",
          "name":"Did this survey work for me?",
          "title":"Did this survey work for Daniel?",
          "choices":["Yes, No, Too early to ask"],
          "hasOther": true,
          "otherText": "Other (please specify)"
        },
      ]
    }
  ]
};
export default surveyJson;