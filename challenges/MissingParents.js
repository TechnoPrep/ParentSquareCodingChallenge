const { studentsArr, parentsArr } = require('../index');

/**
 * This function returns an array of students who do not have a parent in the parent.csv file, or the parent has no phone AND email
 * @param {*} studentArr 
 * @param {*} parentArr 
 * @returns [ {} ]
 */
const missingParentContact = (studentArr, parentArr) => {
  //Return an Array of student with no parents
  let noPar = studentsArr.filter((stu) =>{
    return !parentsArr.some((par) => {
      return stu.student_id === par.student_id
    })
  }) 

  //Return an array of students with parents, but no contact info
  let noInfo = studentsArr.filter((stu) =>{
    return parentsArr.some((par) => {
      if(stu.student_id === par.student_id && (par.email === '' && par.mobile === '')){
        return {student_id: stu.student_id}
      }
    })
    
  }) 

  //Combine Array
  let results = [...new Set([...noPar, ...noInfo])]

  //Return only Student_id, Firstname, LastName fields
  return results.map((stu) => {
    return {
      student_id: stu.student_id,
      first_name: stu.FirstName,
      last_name: stu.LastName
    }
  })

}

console.log(missingParentContact(studentsArr, parentsArr));