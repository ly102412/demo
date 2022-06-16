/**
 * Created by liuyong on 2021/3/22
 */
// 移动端适配
// 获取根字体大小
function adapt () {
  let d = window.document.createElement('p')
  d.style.width = '1rem'
  d.style.display = 'none'
  let head = window.document.getElementsByTagName('head')[0]
  head.appendChild(d)
  let defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
  return defaultFontSize
}

// 设置根字体的百分比大小 默认 750px 的设计稿的根字体大小 100px 即 100px = 1rem
/* eslint-disable no-unused-expressions */
!(function (doc, win, designWidth, rem2px) {
  let docEl = doc.documentElement
  let defaultFontSize = adapt()
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth
    if (!clientWidth) return
    if (clientWidth < 750) {
      // 设置根字体百分比
      docEl.style.fontSize = clientWidth / designWidth * rem2px / defaultFontSize * 100 + '%'
    } else {
      docEl.style.fontSize = '625%'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window, 750, 100)
