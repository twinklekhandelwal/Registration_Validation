var fullname = $('#name').val();

  var DateBirth = $('#DOB').val();
  var GraduationDate= $('#Grada').val();

  var Graduationdegree= $('#Grade').val();
  var WorkExperience= $('#WorkEx').val();
  
   
  $('#but').click(function() {
    
 
    if(fullname == '')
    {
      alert('Please enter your Full Name');
      $('#name').focus();
	   
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
  
