const { rostersArr, sectionsArr } = require('../index');

/**
 * This function takes in the Section and Roster data, returns an object of the sections_id, course_name, and an array of Id's
 * @param {*} rostersArr 
 * @param {*} sectionsArr 
 * @returns [ {} ]
 */
// const secAndStu = (rostersArr, sectionsArr) => {

//   let secArr = []

//   //Iterate through the SectionArr
//   for (let i = 0; i < sectionsArr.length; i++) {
//     const section = sectionsArr[i].section_id
//     const course = sectionsArr[i].course_name
//     const students = []

//     if(section != undefined){
//       //Iterate throught rosterArr
//       for (let j = 0; j < rostersArr.length; j++) {
//         //if match, push student_id to array
//         if(section === rostersArr[j].section_id){
//           students.push(rostersArr[j].student_id)
//         }
//       }
    
//       let secObj = {
//         section_id: section,
//         course_name: course,
//         student_ids: students,
//       }
      
//       secArr.push(secObj)
//     }
//   }

//   return secArr

// }

const secAndStu = (rostersArr, sectionsArr) => {

  rostersArr.map((ros) => {
    sectionsArr.map((sec) => {
      //check if ros and section_id match
      if(ros.section_id === sec.section_id){
        //If matched, check if the obj had the students property
        if(!sec.hasOwnProperty('students')){
          //If not, create the property
          sec.students = []
        }
        //push student to students array in section obj
        sec.students.push(ros.student_id) 
      }
    })
  })

  // Filter out any sections with a section_id, and only return required properties
  return sectionsArr.filter((sec) =>{
    if(sec.hasOwnProperty('section_id')){
      return sec
    }
  }).map((sec)=>{
    return{
      section_id: sec.section_id,
      course_name: sec.course_name,
      students: sec.students
    }
  })

}

console.log(secAndStu(rostersArr, sectionsArr))