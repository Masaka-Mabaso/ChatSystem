const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault(); //prevent form from submitting
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();  //create xml objects
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;  //xhr.response gives us response of the pass url
              if(data === "success"){
                location.href="users.php";
              }else{
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }
    //send form data through ajax to php
    let formData = new FormData(form); //creating new form data object
    xhr.send(formData); //sending the form datato php
}