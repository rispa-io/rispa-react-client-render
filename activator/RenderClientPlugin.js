const { PluginInstance } = require('@rispa/core')
const ServerPluginApi = require('@rispa/server')
const ConfigPluginApi = require('@rispa/config').default

class RenderClientPlugin extends PluginInstance {
  constructor(context) {
    super(context)
    this.server = context.get(ServerPluginApi.pluginName)
    this.config = context.get(ConfigPluginApi.pluginName).getConfig()

    this.createRender = this.createRender.bind(this)
  }

  start() {
    this.server.setClientRender(this.createRender)
  }

  createRender() {
    const { renderHtml } = this.config
    return (req, assets) => renderHtml(assets, {})
  }
}

module.exports = RenderClientPlugin
