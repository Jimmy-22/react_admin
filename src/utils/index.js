import {useEffect, useState} from "react";

export const isFalsy = (value) => value === 0 ? false : !value

//函数里改变传入的对象不太好
export const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

// const debounce = (func, delay) => {
//   let timeout
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(() => {
//       func()
//     }, delay)
//   }
// }
//
// const log = debounce(() => console.log('gogogo!'), 3000)
// log()
// log()
// log()

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    //每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    //每次在上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout)
  }, [value])

  return debounceValue
}

