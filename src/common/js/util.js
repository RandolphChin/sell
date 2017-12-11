/**
 * 解析 url 参数 ?id=12345&a=b
 */
export function urlParser () {
  let url = window.location.search
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg) // 返回数组// ['?id=12345','&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tmpArr = item.substring(1).split('=')
      let key = decodeURIComponent(tmpArr[0])
      let val = decodeURIComponent(tmpArr[1])
      obj[key] = val
    })
  }
  return obj
}
