const missingParentContact = (studentArr, parentArr) => {
  //List of Stu Ids
  let stuData = studentArr.map(stu => stu.student_id);

  //List of Students Parents
  let Par = parentArr.map(par => par.student_id)

  //List of Parents with no Contact Info
  let parNoCon = parentArr.map((par) => {
    if(par.email === '' && par.mobile === ''){
      return par.student_id
    }
  }).filter(x => x != undefined);  

  //List of Students with no Matching Parent
  let noMatch = stuData.map((stu) => {
    if(Par.indexOf(stu) === -1){
      return stu
    }
  }).filter(x => x != undefined);  

  // Unique Array of Student Id's
  let stuFinal = [...new Set([...parNoCon, ...noMatch])];

  return studentArr.map((stu) => {
    if(stuFinal.includes(stu.student_id)){
      return { 
        student_id: stu.student_id, 
        first_name: stu.FirstName, 
        last_name: stu.LastName 
      }
    }
  }).filter(x => x != undefined);

}

module.exports = { missingParentContact }