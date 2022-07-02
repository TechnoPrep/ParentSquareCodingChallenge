const { staffArr, sectionsArr } = require('../index');

const staffToSec = (staff, section) => {

  let secData = section.map(sec => sec.staff_id);
  
  let staffData = staff.filter((staff) => {
    if(secData.includes(staff.staff_id)){
      return {
        staff_id: staff.staff_id,
        first_name: staff.first_name,
        last_name: staff.last_name
      }
    }
  })

  return staffData.length === 0 ? 'No Matching Records' : staffData
}

console.log(staffToSec(staffArr, sectionsArr));