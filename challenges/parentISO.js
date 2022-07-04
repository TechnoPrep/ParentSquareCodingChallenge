const { parentsArr, langArr } = require('../index');

/**
 * This function takes in the list of Languages and parentArr and returns an object of lang: code that exist in the parent files.
 * @param {*} langArr 
 * @param {*} parentsArr 
 * @returns {}
 */
const langToISOCode = (langArr, parentsArr) => {

  let langObj = {};

  langArr.map((lang) => {
    parentsArr.map((par) =>{
      // Skip if par.lang is empty
      if(par.language === ''){
        return
      }
      
      // Skip if par.lang already exists in langObj
      if(par.language in langObj){
        return
      }
      
      // If lang.lang and par.lang match, create object key pair
      if(lang.language === par.language){
        langObj[lang.language] = lang.code
      }
    })
  })

  return langObj;
}

console.log(langToISOCode(langArr, parentsArr));
