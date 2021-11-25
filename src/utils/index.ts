import {useEffect, useState} from "react";

export const isFalsy = (value: unknown) => value === 0 ? false : !value

//函数里改变传入的对象不太好
export const cleanObject = (object: object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    //@ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
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

