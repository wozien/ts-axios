import axios from '../../src'

// axios.post('/base/post',{
//   a: 1,
//   b: 2
// }).then(res => console.log(res))

// axios('/base/post', {
//   method: 'post',
//   data: {
//     a: 1,
//     b: 2
//   }
// }).then(res => console.log(res))

interface User {
  name: string
  age: number
}

interface ResponseData<T> {
  code: number
  msg: string
  result: T
}

function getUser<T>() {
  return axios.get<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(e => console.error(e))
}

async function test() {
  const data = await getUser<User>()
  if(data) {
    console.log(data.result.name)
  }
}

test()
