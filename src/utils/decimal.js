/**
 * @name 计算类方法
 * @params mul：乘 div：除 add：加 sub：减
 * @return
*/

const Decimal = require('decimal.js')

// 乘
const mul = (a, b) => {
  const c = new Decimal(a).mul(new Decimal(b)).toNumber()
  return c
}

// 除
const div = (a, b) => {
  const c = new Decimal(a).div(new Decimal(b)).toNumber()
  return c
}

// 加
const add = (a, b) => {
  const c = new Decimal(a).add(new Decimal(b)).toNumber()
  return c
}

// 减
const sub = (a, b) => {
  const c = new Decimal(a).sub(new Decimal(b)).toNumber()
  return c
}

export {
  mul,
  div,
  add,
  sub
}
