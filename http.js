const http = {
  get(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data.splice(0, 20)))
      .catch(err => callback(null, err))
  },
  getOne(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => callback(null, err))
  },
  post(url, data, callback) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => callback(null, err))
  },
  update(url, data, callback) {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => callback(null, err))
  },
  delete(url, callback) {
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => callback(data))
      .catch(err => callback(null, err))
  }
}

function getTodos() {
  http.get('https://jsonplaceholder.typicode.com/todos', function (data, err) {
    if (err) {
      console.log(('Error': err)
    } else {
      //error or data?
      console.log(data)
    }
  })
}

function getTodo(id) {
  http.getOne(`https://jsonplaceholder.typicode.com/todos/${id}`, function (
    data,
    error
  ) {
    if (error) {
      console.log('err', error)
    } else {
      console.log(data)
    }
  })
}

function addTodo() {
  http.post(
    'https://jsonplaceholder.typicode.com/todos',
    {
      userId: 1,
      title: 'walking Around',
      completed: true
    },
    function (data, err) {
      if (err) {
        console.error('err', err)
      }
      console.log(data)
      getTodo(data.id)
    }
  )
}

function updateTodo() {
  http.update(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      title: 'walking around update'
    },
    function (data) {
      console.log(data)
    }
  )
}

function deleteTodo() {
  http.delete('https://jsonplaceholder.typicode.com/todos/1', function (data) {
    console.log(data)
  })
}

//add a todo
//get the todo
getTodos()
addTodo()
// getTodo()
updateTodo()
deleteTodo()
