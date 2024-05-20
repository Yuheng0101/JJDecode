const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, 'input.js'), 'utf-8')
const code = format(input)
fs.writeFileSync(path.join(__dirname, 'input.js'), code)
console.log('初始化成功: input.js')
const isAA = input.includes('Дﾟ')
const isJJ4Sojson = input.includes('sojson')
const isJJ = input.includes('~[]')
switch (true) {
    case isAA: {
        console.log('aa')
        const decode_ = require('./aadecode.js')
        eval(decode_)
        break
    }
    case isJJ4Sojson: {
        console.log('sojson')
        const decode_ = require('./jjdecode.sojson.js')
        eval(decode_)
        break
    }
    case isJJ: {
        console.log('jj')
        const diyName = code.match(/^(\w+)=~\[\]/)?.[1] || ''
        if (diyName !== '$') {
            const _code = code.replaceAll(diyName, '$')
            fs.writeFileSync(path.join(__dirname, 'input.js'), _code)
        }
        const decode_ = require('./jjdecode.js')
        eval(decode_)
        break
    }
    default:
        console.log('未知加密类型')
        break
}

function format(text) {
    var regex = /\/\*[\s\S]*?\*\//g
    return text.replace(regex, '')
}
