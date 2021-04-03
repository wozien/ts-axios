const toString = Object.prototype.toString

// 这里返回类型用 val is Date 而不用 boolean, 触发类型保护，从而获得类型提示
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for(let key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      const val = obj[key]
      if(isPlainObject(val)) {
        if(isPlainObject(result[key])) {
          result[key] = deepMerge(result[key], val)
        } else {
          result[key] = deepMerge({}, val)
        }
      } else {
        result[key] = val
      }
    })
  })

  return result
}
