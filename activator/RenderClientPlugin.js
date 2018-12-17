const { PluginInstance } = require('@rispa/core')
const ServerPluginApi = require('@rispa/server')
const ConfigPluginApi = require('@rispa/config').default

class RenderClientPlugin extends PluginInstance {
  constructor(context) {
    super(context)
    this.server = context.get(ServerPluginApi.pluginName)
    this.config = context.get(ConfigPluginApi.pluginName).getConfig()
    this.render = this.render.bind(this)
  }

  start() {
    this.server.setClientRender(this.render)
  }

  render(req, assets) {
    const { renderHtml } = this.config
    return renderHtml(assets)
  }
}

module.exports = RenderClientPlugin
