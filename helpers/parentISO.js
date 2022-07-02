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

langToISOCode(langArr, parentsArr)