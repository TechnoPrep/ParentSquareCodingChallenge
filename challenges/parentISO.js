const { langArr, parentsArr } = require('../index');


/**
 * This function takes in the list of Languages and parentArr and returns an object of lang: code that exist in the parent files.
 * @param {*} langArr 
 * @param {*} parentsArr 
 * @returns {}
 */
const langToISOCode = (langArr, parentsArr) => {

  const langs = parentsArr.map((row) => {
    // Check if language is blank
    if(row.language !== ''){
      return row.language
    }
  }).filter(x => x !=undefined);

  let uniqueLang = [...new Set(langs)]

  let langObj = {};

  for (let i = 0; i < uniqueLang.length; i++) {
    const lang = uniqueLang[i];
    const key = lang

    for (let j = 0; j < langArr.length; j++) {
      const code = langArr[j].code;
      if(lang === langArr[j].language){
        if(!(lang in langObj)){
          langObj[key] = code
        }
      }
      
    }
    
  }
  return langObj;
}

console.log(langToISOCode(langArr, parentsArr));