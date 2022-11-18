
function agregarUsuarios() {
    const request= new XMLHttpRequest();
    request.onreadystatechange= function(){
        console.log(`Estado actual ${this.readyState}`);
        if(this.readyState == 4 && this.status ==200){
        let response = JSON.parse(this.responseText);
        let userDiv= document.getElementById("user");
        const users = response.data;
        let htmlContent;
        for(i=0;i<users.length;i++){
            htmlContent+= `<div class= card>${users[i].firstName} ${users[i].lastName}</div>`;
            
        }
           
            userDiv.innerHTML=htmlContent;
        }
    }

  request.open("GET", "https://dummyapi.io/data/v1/user?limit=", true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}