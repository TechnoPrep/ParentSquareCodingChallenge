const { studentsArr } = require('../index');

const stuNoCell = (studentsArr) => {

  return studentsArr.filter((stu) => {
    if(stu.cellphone === '' || stu.cellphone === null || stu.cellphone === undefined){
      let obj = {
        student_id: stu.student_id,
        first_name: stu.FirstName,
        last_name: stu.LastName
      }
      
      return obj 
    }
  }) 

}

console.log(stuNoCell(studentsArr));