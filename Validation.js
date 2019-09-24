var fullname = $('#name').val();
console.log("yugui")
  var DateBirth = $('#DOB').val();
  var GraduationDate= $('#Grada').val();

  var Graduationdegree= $('#Grade').val();
  var WorkExperience= $('#WorkEx').val();

 
  //Function will execute when the button "Click to Submit" is clicked.
  $('#but').click(function() {
    
	  
    //Blank field validation of fullname, mobile no and address. The function will generate an alert message if "fullname" or "mobile no" or "address" field is blank  
    if(fullname == '')
    {
      alert('Please enter your Full Name');
      $('#name').focus();
	   //The focus function will move the cursor to "fullname" field
    }
    else if(DateBirth == '')
    {
	  alert('Please enter your Date of Birth')
	  $('#address').focus();
    }
    else if(GraduationDate == '')
    {
	  alert('Please enter your Graduation Date')
	  $('#address').focus();
    }
    
    else if(Graduationdegree == '')
    {
	  alert('Please enter your Graduation degree');
	 $('#address').focus();
    }
    else if(WorkExperience == '')
    {
	  alert('Please enter your Graduation Date');
	  $('#address').focus();
    }
    
    
  });
  
