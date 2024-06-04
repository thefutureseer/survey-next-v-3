const countIdKeys = (inputJson) => {
  let idCount = 0;
  let arrFromJson = JSON.parse(inputJson);
  for (let obj of arrFromJson) {
    if (obj.hasOwnProperty('_id')) {
      idCount++;
    };
  };
  return idCount;
};
module.exports = countIdKeys;