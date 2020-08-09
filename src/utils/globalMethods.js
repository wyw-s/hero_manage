import { Message } from 'element-ui'

// 全局提示语；
export function tooltip (message, type = 'success', duration = 2000) {
  Message({
    message,
    type,
    duration
  })
}

// 设置localStorage
export function setLocalStorage (key, value) {
  let newValue = ''
  if (typeof value === 'string') {
    newValue = value
  } else {
    newValue = JSON.stringify(value)
  }
  window.localStorage.setItem(key, newValue)
}

// 获取localStorage
export function getLocalStorage (key) {
  let value = ''
  try {
    value = JSON.parse(window.localStorage.getItem(key))
  } catch (e) {
    value = window.localStorage.getItem(key)
  }
  return value
}

// 删除localStorage；
export function rmLocalStorage (key) {
  window.localStorage.removeItem(key)
}
