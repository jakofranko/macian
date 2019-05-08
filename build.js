const fs = require('fs')
const cc = require('clean-css')
const files = fs.readdirSync('./css')
let css = ''

for (let i in files) {
  const file = files[i]
  if (file === 'macian.css') continue
  console.log(`Reading ${file}...`)
  css += fs.readFileSync(`./css/${file}`, 'utf8')
}

console.log('Minifying CSS...')
const min = new cc({level: 2}).minify(css).styles
fs.writeFile('./macian.min.css', min, err => {
  err && console.error(err)
})

console.log('Macian built.')
