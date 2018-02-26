// configTest.js
const Config = require('./config')
const strategies = require('./strategies')

const jsonConfig = new Config(strategies.json)
const jsonFile = 'configs/conf.json'
jsonConfig.read(jsonFile)
jsonConfig.set('dependencies.dev', {'mongodb': '6.9.1', 'zeromq': '3.4.1'})
jsonConfig.save(jsonFile)

const iniConfig = new Config(strategies.ini)
const iniFile = 'configs/conf.ini'
iniConfig.read(iniFile)
iniConfig.set('api.url', 'http://google.com/api')
iniConfig.save(iniFile)