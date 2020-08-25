const input = document.getElementById("Name");
const content = document.getElementById("text");
const button = document.getElementById("post");
const posts = document.getElementById("myId");
const press = document.getElementById("post");

function getData() {
  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => {
      const count = data.length;
      for (let i = 0; i < count; i++) {
        posts.innerHTML += `<h1>${data[i].name}</h1>
        <p>${data[i].content}</p> 
        ${data[i].timeAndDate}
        <br>
        <br>
        `;
      }
    });
}

getData();

function putData() {
  let d = new Date();
  const send = {
    name: input.value,
    content: content.value,
    timeAndDate:  d.getDate() + " | " + d.getMonth() + " | " + d.getFullYear() + " Time: " + d.getHours()%12 + ":" + d.getMinutes(),
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(send),
  };
  fetch("http://localhost:3000/", options);
}

press.addEventListener("click", () => {
  putData();
});

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})