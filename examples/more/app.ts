import axios from '../../src/index'

document.cookie = 'a=b'

axios.get('/more/get').then(res => {
  console.log(res)
})

// axios.defaults.withCredentials = true
// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true
// }).then(res => {
//   console.log(res)
// })

fetch('http://127.0.0.1:8088/more/server2', {
  method: 'post',
  credentials: 'include'
}).then(res => {
  console.log(res)
})
