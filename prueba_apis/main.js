function agregarUsuarios() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("user");
      const users = response.data;
      let htmlContent = "<div >";
      let largo = Math.floor(response.total / 10);
      if (response.total % 10 != 0) {
        largo + 1;
      }
      for (let i = 0; i < users.length; i++) {
        htmlContent += `<div><a href="/datosusers.html"><img src =${users[i].picture}></a> ${users[i].firstName} ${users[i].lastName}</div>`;
      }
      htmlContent += "</div>";
      let pagination = `<ul class="pagination d-flex justify-content-center" >`;
      for (let i = 1; i <= largo; i++) {
        pagination += `<li onclick="paginacion(${i})" class="page-item"><a class="page-link" >${i}</li>`;
      }
      console.log(largo);
      pagination += "</ul>";
      let page = document.getElementById("paginas");
      page.innerHTML = pagination;
      userDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", "https://dummyapi.io/data/v1/user?limit=10", true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}
function paginacion(x) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("user");
      const users = response.data;
      let htmlContent = "<div>";
      for (i = x * 10 - 10; i < x * 10; i++) {
        htmlContent += `<div ><img src =${users[i].picture}> ${users[i].firstName} ${users[i].lastName}</div>`;
      }
      htmlContent += "</div>";
      userDiv.innerHTML = htmlContent;
    }
  };
  request.open("GET", "https://dummyapi.io/data/v1/user?limit", true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}
function datosUser() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("datos");
      let htmlContent = `<div>id: ${response.id} <br></br>Title:${response.title} <br></br>Nombre:${response.firstName}<br></br> 
      Apellido:${response.lastName} <br></br>Url foto:${response.picture}<br></br> Genero:${response.gender}<br></br>email:${response.email} 
      <br></br>dateOfBirth:${response.dateOfBirth}<br></br>Phone:${response.phone}<br></br>Location<br></br>Street:${response.location.street}
      <br></br>city:${response.location.city}<br></br>state:${response.location.state}<br></br>country:${response.location.country}
      <br></br>timezone:${response.location.timezone}<br></br>registerDate:${response.registerDate}<br></br>updatedDate:${response.updatedDate}</div>`;
      userDiv.innerHTML = htmlContent;
      
    }
  };
  request.open(
    "GET",
    "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109cc",
    true
  );
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}
function datosUser() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("datos");
      let htmlContent = `<div>id: ${response.id} <br></br>Title:${response.title} <br></br>Nombre:${response.firstName}<br></br> 
      Apellido:${response.lastName} <br></br>Url foto:${response.picture}<br></br> Genero:${response.gender}<br></br>email:${response.email} 
      <br></br>dateOfBirth:${response.dateOfBirth}<br></br>Phone:${response.phone}<br></br>Location<br></br>Street:${response.location.street}
      <br></br>city:${response.location.city}<br></br>state:${response.location.state}<br></br>country:${response.location.country}
      <br></br>timezone:${response.location.timezone}<br></br>registerDate:${response.registerDate}<br></br>updatedDate:${response.updatedDate}</div>`;
      userDiv.innerHTML = htmlContent;
      
    }
  };
  request.open("GET","https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109cc",true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}
function postUser() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("post");
      const users = response.data;
      let htmlContent="<ul>"
      let tags="";
      let owner=""
      for (let i = 0; i < response.limit; i++) {
       
        tags=users[i].tags
        owner=users[i].owner
        htmlContent += `<div>${users[i].id}<br><img width="80px"src="${users[i].image}"><br></img>likes:${users[i].likes}<br>${tags}
        <br>${users[i].text}<br> ${users[i].publishDate}<br>${owner.id}<br>${owner.title}<br>${owner.firstName}<br>${owner.lastName}
        <br>${owner.picture}</div>`;
        
      }
      userDiv.innerHTML = htmlContent
    }
  }  
  request.open("GET", "https://dummyapi.io/data/v1/post?limit=10", true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}
function postTags() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`Estado actual ${this.readyState}`);
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      let userDiv = document.getElementById("post");
      const users = response.data;
      let htmlContent="<ul>"
      let tags="";
      let owner=""
      for (let i = 0; i < response.limit; i++) {
        tags=users[i].tags
        owner=users[i].owner
        htmlContent += `<div>${users[i].id}<br><img width="80px"src="${users[i].image}"><br></img>likes:${users[i].likes}<br>${tags}
        <br>${users[i].text}<br> ${users[i].publishDate}<br>${owner.id}<br>${owner.title}<br>${owner.firstName}<br>${owner.lastName}
        <br>${owner.picture}</div>`;
        
      }
      userDiv.innerHTML = htmlContent
    }
  }  
  request.open("GET", "https://dummyapi.io/data/v1/tag/water/post?limit=10", true);
  request.setRequestHeader("app-id", "63768ca658fe3b89e06f1d96");
  request.send();
}