import axios from '../../src'

// axios.post('/base/post',{
//   a: 1,
//   b: 2
// }).then(res => console.log(res))

axios('/base/post', {
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => console.log(res))