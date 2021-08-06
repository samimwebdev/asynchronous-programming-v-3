//synchronous
//Asynchronous
//Task - 1) produce immediate result(synchronous) 2) need time to get result(asynchronous)
//Asynchronous (need time to get result)
//database dealing
// Send API request to get data
// writing file, reading from file

//v8, browser API
//javascript is single threaded (one task can be done at a time)

//promise
function getOne() {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}
//callback
//promise
//Async Await

//callback
function getTwo(cb) {
  setTimeout(() => {
    cb(2)
  }, 1000)
}

//promise way
function getThree() {
  return new Promise((resolve, reject) => {
    // resolve(3)
    reject(new Error(3))
  })
}
//callback
function getFour(cb) {
  setTimeout(() => {
    cb(4)
  }, 1000)
}

//callback hell
getTwo(function (number) {
  console.log(number) //2
  getFour(function (data) {
    console.log(data + number)
  })
})

// getThree()
//   .then(number => {
//     //promise is fulfilled
//     return getOne()
//     // .then(data => {
//     //   console.log(number + data)
//     // })
//     // .catch(err => console.log(err))
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//Async await uses promise(Behind the scene)
async function getResult() {
  try {
    const resultThree = await getThree()
    console.log(resultThree)
    const resultOne = await getOne()
    console.log(resultThree + resultOne)
  } catch (err) {
    console.log(err)
  }
}

getResult()
