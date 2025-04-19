const countIdKeys = (inputJson) => {
  let idCount = 0;
  //vote: vampire = highschool forever
  let highschoolYes = 0;
  let highschoolNo = 0;
  let majorityVote;

  let arrFromJson = JSON.parse(inputJson);
  for (let obj of arrFromJson) {
    if (obj.hasOwnProperty('_id')) {
      idCount++;
    };
    if (obj.hasOwnProperty('vampireHighSchool')){
      if (obj.vampireHighSchool === true) highschoolYes++;
      highschoolNo++
    }
  };
  majorityVote = highschoolYes > highschoolNo ? 'If I were a vampire Id like to attend highschool for eternity':'As a vampire Id not attend highschool forever';
  return {idCount, majorityVote};
};
module.exports = countIdKeys;