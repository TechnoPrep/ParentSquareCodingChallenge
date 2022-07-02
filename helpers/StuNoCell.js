const stuNoCell = (studentsArr) => {

  return studentsArr.map((stu) => {
    if(stu.cellphone === '' || stu.cellphone === null || stu.cellphone === undefined){
      let obj = {
        student_id: stu.student_id,
        first_name: stu.FirstName,
        last_name: stu.LastName
      }
      
      return obj 
    }
  }).filter(x => x != undefined);  

}

module.exports = { stuNoCell }