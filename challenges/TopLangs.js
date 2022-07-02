const { parentsArr } = require('../index');

const countLangs = (arr) => {
  const langs = arr.map((row) => {
    // Check if language is blank
    if(row.language === ''){
      return 'No Language'
    }
    return row.language
  })

  //Create a Object for Languages to be stored
  const langObj = {}
  
  // Count Languages
  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i];
    const key = lang;

    // Check if lang exists in langObj, if not, create with value of 1
    if(!(lang in langObj)){
      langObj[key] = 1
    } else {
    // If it does, update value
     langObj[lang]++
    }
  }

  return langObj;

}

const pickHighest = (obj, num = 1) => {

  const objOut = {};
  //Return false if num is greater than obj length
  if(num > Object.keys(obj).length){
    return false;
  };

  //Sort Object
  Object.keys(obj).sort((a,b) => obj[b] - obj[a]).forEach((key, ind) => {
    //Return only the top n keys set by num
    if(ind < num){
      objOut[key] = obj[key]
    }

  });

  return objOut;

}

// module.exports = { countLangs, pickHighest } 

//console.log(parentsArr);

// Out put Top n languages of Parents
console.log(pickHighest(countLangs(parentsArr),3));