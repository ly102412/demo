/**
 * Created by liuyong on 2021/4/14
 */
import { mul } from '@/utils/decimal'
import dayjs from 'dayjs'

const getDeviceRatio = () => {
  let isIPhone = window.navigator.appVersion.match(/iphone/gi)
  let devicePixelRatio = window.devicePixelRatio
  let dpr
  if (isIPhone) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3) {
      dpr = 3
    } else if (devicePixelRatio >= 2) {
      dpr = 2
    } else {
      dpr = 1
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案
    dpr = 1
  }
  return dpr
}

const DEVICE_RATIO = getDeviceRatio()

// 下拉配置
export const DOWN_CONFIG = {
  threshold: 50 * DEVICE_RATIO,
  stop: 20 * DEVICE_RATIO
}
// 上拉配置
export const UP_CONFIG = {
  threshold: -40 * DEVICE_RATIO
}

// 计算金额
// money: 要改变的数字
// status: 使用 '+' 还是 '-'
// nums: 保留小数点后的位数
// isSymbol: 是否需要使用 '+''-' 号，默认是 true
export function calMoney (money, status, nums, isSymbol = true, isType = true) {
  if (money === 0) {
    return '0.00'
  }
  if (isSymbol) {
    if (status === 0) {
      return `+${mul(money, 0.01).toFixed(nums)}`
    } else {
      return `-${mul(money, 0.01).toFixed(nums)}`
    }
  } else {
    if (isType) {
      return mul(money, 0.01).toFixed(nums)
    } else {
      return mul(money, 100).toFixed(nums)
    }
  }
}

// 字符串截取
// number 截取的数字
// startIndex 开始下标
// endIndex 结束下标
export function substrString (number, startIndex, endIndex) {
  return String(number).substr(startIndex, endIndex)
}

// 保留小数点位数
export function setFixed (num, nums) {
  return Number(num).toFixed(nums)
}

// 获取主题颜色
const themeColor = {
  '#1677FE': function () {
    return 1
  },
  '#FF2550': function () {
    return 2
  },
  '#FF4B33': function () {
    return 3
  }
}

export function setThemeColor (type) {
  return themeColor[type]()
}

// // 获取码状态
// const cdkeyStatus = {
//   0: function () {
//     return '去使用'
//   },
//   1: function () {
//     return '充值中'
//   },
//   2: function () {
//     return '兑换成功'
//   },
//   3: function () {
//     return '重新兑换'
//   },
//   4: function () {
//     return '作废'
//   },
//   5: function () {
//     return '已过期'
//   }
// }

// export function cdkeyStatusTree (type) {
//   return cdkeyStatus[type]()
// }
const orderStatus = {
  '10': function () {
    return {
      order_status: '',
      order_note: ''
    }
  },
  '11': function () {
    return {
      order_status: '充值中',
      order_note: '充值高峰期略有延迟，到账时间以运营商为准'
    }
  },
  '12': function () {
    return {
      order_status: '充值成功',
      order_note: '本服务合作方喜音暂无法提供机打发票'
    }
  },
  '13': function () {
    return {
      order_status: '充值失败',
      order_note: '运营商充值失败，请重新选择'
    }
  },
  '30': function () {
    return {
      order_status: '',
      order_note: ''
    }
  },
  '31': function () {
    return {
      order_status: '发货中',
      order_note: '发货高峰期略有延迟，到账时间以供货商为准'
    }
  },
  '32': function () {
    return {
      order_status: '发货成功',
      order_note: '本服务合作方喜音暂无法提供机打发票'
    }
  },
  '33': function () {
    return {
      order_status: '发货失败',
      order_note: '商品发货失败，请重新选择'
    }
  },
  '40': function () {
    return {
      order_status: '',
      order_note: ''
    }
  },
  '41': function () {
    return {
      order_status: '充值中',
      order_note: '充值高峰期略有延迟，到账时间以供货商为准'
    }
  },
  '42': function () {
    return {
      order_status: '充值成功',
      order_note: '本服务合作方喜音暂无法提供机打发票'
    }
  },
  '43': function () {
    return {
      order_status: '充值失败',
      order_note: '供货商充值失败，请重新选择'
    }
  }
}

export function orderStatusTree (type) {
  return orderStatus[type]()
}
// 话费直充-状态
const rechargeStatus = {
  0: function () {
    return '入库'
  },
  1: function () {
    return '充值中'
  },
  2: function () {
    return '充值成功'
  },
  3: function () {
    return '充值失败'
  }
}

export function rechargeStatusTree (type) {
  return rechargeStatus[type]()
}

// 电子卡券-状态
const couponStatus = {
  0: function () {
    return '入库'
  },
  1: function () {
    return '发货中'
  },
  2: function () {
    return '发货成功'
  },
  3: function () {
    return '发货失败'
  }
}

export function couponStatusTree (type) {
  return couponStatus[type]()
}

// 号码归属地
const belongType = {
  1: function () {
    return '移动'
  },
  2: function () {
    return '联通'
  },
  3: function () {
    return '电信'
  },
  4: function () {
    return '虚拟移动'
  },
  5: function () {
    return '虚拟联通'
  },
  6: function () {
    return '虚拟电信'
  }
}

export function belongTypeTree (type) {
  return belongType[type]()
}

// 格式化时间
export function formatTime (time, format) {
  return dayjs(time).format(format)
}

// 判断正整数
// number 数字
export function isIntegerNumber (number) {
  return Number.isInteger(Number(number))
}

// 数字抹零
// number 数字
export function isParseFloat (number) {
  return parseFloat(Number(number))
}
