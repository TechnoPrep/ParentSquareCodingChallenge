const { rostersArr, sectionsArr } = require('../index');

const secAndStu = (rostersArr, sectionsArr) => {

  let secArr = []

  for (let i = 0; i < sectionsArr.length; i++) {
    const section = sectionsArr[i].section_id
    const course = sectionsArr[i].course_name
    const students = []

    if(section != undefined){

      for (let j = 0; j < rostersArr.length; j++) {
        if(section === rostersArr[j].section_id){
          students.push(rostersArr[j].student_id)
        }
      }
    
      let secObj = {
        section_id: section,
        course_name: course,
        student_ids: students
      }
      
      secArr.push(secObj)
    }
  }

  return secArr

}

console.log(secAndStu(rostersArr, sectionsArr))