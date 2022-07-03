const { sectionsArr, rostersArr } = require('../index');

/**
 * This function returns an array of sections that do not have any students currently enrolled.
 * @param {*} sectionsArr 
 * @param {*} rostersArr 
 * @returns [] or false if no records match
 */
const secNoStu = (sectionsArr, rostersArr) => {

  //Iterate through the rosterArr
  rostersArr.map((ros) => {
    //Iterate through the sectionArr
    sectionsArr.map((sec) => {
      if(ros.section_id === sec.section_id){
        //If roster and section section_id match, check if the section obj has the 
        //student_count, property, if not, set it to'1'
        if(!sec.hasOwnProperty('student_count')){
          sec.student_count = 1;
        }

        //Add a count to that sections student_count property
        sec.student_count++;
      }
    })
  })

  // Only return a section object if the student_count is 0
  return sectionsArr.filter((sec) => {
    if(sec.student_count === 0){
      return sec
    }
  })
}

console.log(secNoStu(sectionsArr, rostersArr));
