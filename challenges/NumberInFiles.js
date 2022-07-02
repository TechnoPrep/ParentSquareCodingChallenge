const { studentsArr, parentsArr, staffArr } = require('../index');

const listOfUnqiueNumbers = (stu, par, staff) => {

  let unqiueNums = []
  const stuFileName = 'students.csv'
  const parFileName = 'parents.csv'
  const staffFileName = 'staff.csv'
  
  // Builds out the initial Array of Numbers, and trims Duplicates
  stu.filter((s) =>{
    if(s.cellphone !== ''){
      //Only push object if it doesn't already exist
      if(!unqiueNums.some(num => s.cellphone === num.number)){
        let obj = {
              number: s.cellphone, 
              files: [stuFileName]
              }
            unqiueNums.push(obj)
        }
    }
  })

  // Check if uniqueNums contains number, creates or appends
  par.filter((p) =>{
    if(p.mobile !== ''){
      // If doesn't exist, create object
      if(!unqiueNums.some(num => p.mobile === num.number)){
        let obj = {
              number: p.mobile, 
              files: [parFileName]
              }
            unqiueNums.push(obj)
      } else {
        // if exists, append obj.files with additional file name
        unqiueNums.find((num) =>{
          if(p.mobile === num.number){
            num.files.push(parFileName)
          }
        })
      }
    }
  })

  // Check if uniqueNums contains number, creates or appends
  staff.filter((p) =>{
    if(p.mobile !== ''){
      // If doesn't exist, create object
      if(!unqiueNums.some(num => p.mobile === num.number)){
        let obj = {
              number: p.mobile, 
              files: [staffFileName]
              }
            unqiueNums.push(obj)
      } else {
        // if exists, append obj.files with additional file name
        unqiueNums.find((num) =>{
          if(p.mobile === num.number){
            num.files.push(staffFileName)
          }
        })
      }
    }
  })

  // Only return numbers that are in two or more files.
  return unqiueNums.filter((u) => {
    if(u.files.length >= 2){
      return u
    }
  })

}


console.log(listOfUnqiueNumbers(studentsArr, parentsArr, staffArr))