const ServerPluginApi = require('@rispa/server')
const RenderClientPlugin = require('./RenderClientPlugin')
const RenderClientPluginApi = require('./RenderClientPluginApi')

module.exports.default = RenderClientPlugin

module.exports.api = RenderClientPluginApi

module.exports.after = [
  ServerPluginApi.pluginName,
]
