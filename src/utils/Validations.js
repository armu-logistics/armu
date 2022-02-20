let required = (propertyType) => {
  return (v) => (v && v.length > 0) || `You must input a ${propertyType} `
}

let minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} must be less ${minLength} characters`
}

const confirmPassword = (propertyType, password) => (v) =>
  (v && v === password) || `${propertyType} must be same as entered password`

let maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} must be less that ${maxLength}`
}

let emailFormat = () => {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (v) => (v && regex.test(v)) || 'Must be a valid email'
}

let numberFormat = () => {
  let regex = /^[0-9]+$/

  return (v) => (v && regex.test(v)) || 'Must be a valid number'
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  numberFormat,
  confirmPassword,
}
