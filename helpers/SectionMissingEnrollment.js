const secNoStu = (sectionsArr, rostersArr) => {

  let rosterData = rostersArr.map(rost => rost.section_id);

  let secData = sectionsArr.filter((sec) => {
    if(rosterData.indexOf(sec.section_id) === -1){
      return {
        section_id: sec.section_id,
        course_name: sec.course_name
      }
    }
  })

  if(secData.length === 0){
    return 'All Sections have Students Enrolled'
  }

  return secData;

}

module.exports = { secNoStu }