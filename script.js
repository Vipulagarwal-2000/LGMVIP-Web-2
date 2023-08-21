function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
  
    document.getElementById("registrationForm").reset();
  
    document.getElementById("displayData").style.display = "block";
  }
  