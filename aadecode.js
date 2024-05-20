const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.js'), 'utf-8').replace(/\s/g, '')
const defaults = input.split(/\(ﾟДﾟ\)\[["']_["']\]\(/)[0]
eval(defaults)
const reg = /\(ﾟДﾟ\)\[["']_["']\]\((.*?)\)\(["']_["']\)/g
const codes = input.match(reg)?.[0].replace(reg, '$1')
const result = eval(codes)
if (result) {
    console.log(`颜文字解析成功，结果已保存至 target.js`)
    fs.writeFileSync(path.join(__dirname, 'target.js'), result)
}
