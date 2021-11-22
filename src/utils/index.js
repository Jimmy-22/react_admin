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