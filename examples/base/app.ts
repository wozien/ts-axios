import axios from '../../src/index'

// /base/get?foo[]=bar&foo[]=baz
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

// /base/get?foo=%7B%22bar%22:%22baz%22%7D
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

const date = new Date()

// /base/get?date=2021-03-28T15:57:33.217Z
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

// /base/get?foo=@:$,+
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

// /base/get?foo=bar
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

// /base/get?foo=bar
axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

// /base/get?foo=bar&bar=baz
axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})