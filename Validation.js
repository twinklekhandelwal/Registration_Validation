var fullname = $('#name').val();

  var DateBirth = $('#DOB').val();
  var GraduationDate= $('#Grada').val();

  var Graduationdegree= $('#Grade').val();
  var WorkExperience= $('#WorkEx').val();
  
   
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
	  $('#DOB').focus();
    }
    else if(GraduationDate == '')
    {
	  alert('Please enter your Graduation Date')
	  $('#Grada').focus();
    }
    
    else if(Graduationdegree == '')
    {
	  alert('Please enter your Graduation degree');
	 $('#Grade').focus();
	 
    }
    else if(WorkExperience == '')
    {
	  alert('Please enter your Graduation Date');
	  $('#WorkEx').focus();
    }
    
    
  });
  
