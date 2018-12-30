const ServerPluginApi = require('@rispa/server')
const ConfigPluginApi = require('@rispa/config').default
const RenderClientPlugin = require('./RenderClientPlugin')
const RenderClientPluginApi = require('./RenderClientPluginApi')

module.exports.default = RenderClientPlugin

module.exports.api = RenderClientPluginApi

module.exports.after = [
  ConfigPluginApi.pluginName,
  ServerPluginApi.pluginName,
]
