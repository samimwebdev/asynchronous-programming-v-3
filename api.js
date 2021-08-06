//promise
// function getTodos() {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log(data.slice(0, 10)))
//     .catch(err => console.log(err))
// }

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await res.json()

  // .then(response => response.json())
  // .then(data => console.log(data.slice(0, 10)))
  // .catch(err => console.log(err))
}

function getTodo() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getTodo()

function addTodo() {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My Todo',
      body: 'my Todo Body',
      completed: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

addTodo()

//promise- deleteTodo
// function deleteTodo() {
//   fetch('https://jsonplaceholder.typicode.com/todos/10', {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

//async await deleteTodo

async function deleteTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/10', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  return await res.json()
}

function updateTodo() {
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'My Updated Todo',
      body: 'my Todo Body-1',
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

updateTodo()

async function run() {
  const todos = await getTodos()
  console.log(todos.slice(0, 20))
  const deletedTodo = await deleteTodo()
  console.log(deletedTodo)
}

run()
