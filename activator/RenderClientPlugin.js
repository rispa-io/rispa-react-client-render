const createDebug = require('debug')
const { PluginInstance } = require('@rispa/core')
const ServerPluginApi = require('@rispa/server')

const renderClient = require('../lib/client').default

const log = createDebug('rispa:info:render-server')

class RenderClientPlugin extends PluginInstance {
  constructor(context) {
    super(context)
    this.server = context.get(ServerPluginApi.pluginName)
  }

  start() {
    this.server.setClientRender(this.render)
  }

  render(assets) {
    return req => {
      log(`request page '${req.originalUrl}'`)

      return renderClient(req, { assets, log })
    }
  }
}

module.exports = RenderClientPlugin
