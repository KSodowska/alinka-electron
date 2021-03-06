const { SchoolType, School } = require("./models");

const createSchoolType = schoolType => {
  SchoolType.sync({ force: true }).then(() => {
    return SchoolType.create({
      name: schoolType
    });
  });
};

const getSchoolTypeList = () => {
  return SchoolType.findAll();
};

const createSchool = ({
  name,
  city,
  postCode,
  street,
  SchoolTypeName,
  postOffice
}) => {
  School.sync({ force: true }).then(() =>
    School.create({
      name,
      city,
      postCode,
      street,
      SchoolTypeName,
      postOffice
    })
  );
};

const getSchoolList = schoolType => {
  return School.findAll({
    where: {
      SchoolTypeName: schoolType
    }
  });
};

module.exports = {
  createSchoolType,
  getSchoolTypeList,
  createSchool,
  getSchoolList
};
