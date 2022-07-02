const { sectionsArr, rostersArr } = require('../index');

/**
 * This function returns an array of sections that do not have any students currently enrolled.
 * @param {*} sectionsArr 
 * @param {*} rostersArr 
 * @returns [] or false if no records match
 */
const secNoStu = (sectionsArr, rostersArr) => {

  let rosterData = rostersArr.map(rost => rost.section_id);

  let secData = sectionsArr.filter((sec) => {
    if(rosterData.indexOf(sec.section_id) === -1){
      return {
        section_id: sec.section_id,
        course_name: sec.course_name
      }
    }
  })

  return secData.length === 0 ? false : secData;

}

console.log(secNoStu(sectionsArr, rostersArr));
