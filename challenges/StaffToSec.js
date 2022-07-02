const { staffArr, sectionsArr } = require('../index');


/**
 * This function returns a list of, if any, of staff members in the staff.csv and sections.csv file.
 * @param {*} staff 
 * @param {*} section 
 * @returns [] or false if no records match.
 */
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

  return staffData.length === 0 ? false : staffData
}

console.log(staffToSec(staffArr, sectionsArr));