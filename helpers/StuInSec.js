const getSectionIds = (arr, className) => {

  return arr.map((sec) =>{
    if(sec.course_name === className){
      return sec.section_id
    }
  }).filter(x => x !=undefined);

}

const getStuBySec = (secArr, rosterArr, stuArr) => {

  let stuInSec = rosterArr.map((rost) => {
    if(secArr.includes(rost.section_id)){
      return rost.student_id
    }
  }).filter(x => x !=undefined);

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

module.exports = { getSectionIds, getStuBySec };