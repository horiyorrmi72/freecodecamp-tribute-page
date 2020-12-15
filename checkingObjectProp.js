function checkObj(obj, checkProp) {
    
  
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else{
      return "Not Found";
    }
    return "Change Me!";
    
  }
  var name = {
    firstName: "Ridwan",
    surName: "Yusuf",
    middleName: "olalekan"
  };
   
   var h = checkObj(name,"otherNames");
   console.log(h)