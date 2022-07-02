const { sectionsArr, rostersArr, studentsArr } = require('../index');

/**
 * This functions takes the sectionArr and ClassName and returns an Array of section_id's
 * @param {*} arr 
 * @param {*} className 
 * @returns []
 */

const getSectionIds = (arr, className) => {

  return arr.map((sec) =>{
    if(sec.course_name === className){
      return sec.section_id
    }
  }).filter(x => x !=undefined);

}

/**
 * This function creates an array of Objects for students who are enrolled in a classname
 * @param {*} secArr 
 * @param {*} rosterArr 
 * @param {*} stuArr 
 * @returns [ {} ]
 */
const getStuBySec = (secArr, rosterArr, stuArr) => {

  //Create array of Students id's who exist are enrolled in the secArr
  let stuInSec = rosterArr.map((rost) => {
    if(secArr.includes(rost.section_id)){
      return rost.student_id
    }
  }).filter(x => x !=undefined);

  // Returns an Array of Objects of students who are enrolled in the desired class.
  return stuArr.map((stu)=>{
    if(stuInSec.includes(stu.student_id)){
       return { 
         student_id: stu.student_id, 
         first_name: stu.FirstName, 
         last_name: stu.LastName 
       }
    }
  }).filter(x => x !=undefined);
}

console.log(getStuBySec(getSectionIds(sectionsArr, 'Physics 9'), rostersArr, studentsArr));