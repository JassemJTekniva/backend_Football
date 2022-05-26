const GetallequipeService = require("../Services/serviceequipe");

  const GetallequipeeController = async (req, res) => {
    res.send(await GetallequipeService());
  };
  
  module.exports = GetallequipeeController ;
  