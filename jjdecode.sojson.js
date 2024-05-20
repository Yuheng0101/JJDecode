const fs = require('fs')
const path = require('path')
const text = fs.readFileSync(path.join(__dirname, 'input.js'), 'utf-8')
const reg = /sojson\.\$\((.*?)\)\(sojson=.*?\)/i
const result = reg.exec(text)?.[1].replace(reg, '$1')
const defaults = text.split(/sojson\.\$\(/)[0]
eval(defaults)
const result_ = eval(result)
if (result_) {
    console.log(`JJEncode(sojson版)解析成功，结果已保存至 target.js`)
    fs.writeFileSync(path.join(__dirname, 'target.js'), result_)
}
