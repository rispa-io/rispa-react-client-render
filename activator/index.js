const RenderClientPlugin = require('./RenderClientPlugin')
const RenderClientPluginApi = require('./RenderClientPluginApi')
const WebpackPluginApi = require('@rispa/webpack')
const ConfigPluginApi = require('@rispa/config').default

module.exports.default = RenderClientPlugin

module.exports.api = RenderClientPluginApi

module.exports.after = [
  ConfigPluginApi.pluginName,
  WebpackPluginApi.pluginName,
]
