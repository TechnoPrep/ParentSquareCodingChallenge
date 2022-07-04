const { parentsArr } = require('../index');

/**
 * This function creates an Object that contains the Languauge: Count
 * @param {*} arr 
 * @returns {OBJECT}
 */

const countLangs = (arr) => {
  const langs = arr.map((par) => {
    // Check if language is blank
    if(par.language === ''){
      return 'No Language'
    }
    return par.language
  })

  //Create a Object for Languages to be stored
  const langObj = {}

  // Iterate through langs array
  langs.map((lang) =>{
    // Check if lang exists in langObj
    if(!(lang in langObj)){
      // create property in langObj with initial value of 1
      langObj[lang] = 1
    } else {
      // Add to property value 
      langObj[lang]++
    }
  })
  
  return langObj;

}

/**
 * This function sorts and returns the top n values
 * @param {*} obj 
 * @param {*} num 
 * @returns {OBJECT}
 */
const pickHighest = (obj, num = 1) => {

  const objOut = {};
  //Return false if num is greater than obj length
  if(num > Object.keys(obj).length){
    console.log("Request exceeds number of Languages");
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

// Out put Top n languages of Parents
console.log(pickHighest(countLangs(parentsArr),2));