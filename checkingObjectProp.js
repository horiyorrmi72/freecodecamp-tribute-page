function checkObj(obj, checkProp) {
    
  
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
    return "Change Me!";
    
  }
  // *************the data passed in here is the object **********************
  // *************we are checking if it has any of the properties from the query******************
  var datas = {
    firstName: "Ridwan",
    surName: "Yusuf",
    middleName: "olalekan"
  };
  //  *********************************************************************************************
   var h = checkObj(datas,"surName");
   console.log(h)