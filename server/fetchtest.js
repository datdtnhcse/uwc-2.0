import fetch from 'node-fetch';
let todo = {
  userId: 123,
  title: "loren impsum doloris",
  completed: false
};

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
.then(json => console.log(json));