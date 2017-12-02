export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    // 月份
    'M+': this.getMonth() + 1,
    // 日
    'd+': this.getDate(),
    // 小时
    'h+': this.getHours(),
    // 分
    'm+': this.getMinutes(),
    // 秒
    's+': this.getSeconds(),
    // 季度
    'q+': Math.floor((this.getMonth() + 3) / 3),
    // 毫秒
    'S': this.getMilliseconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k}`).text(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substring(str.length)
}
