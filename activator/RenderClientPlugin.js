const createDebug = require('debug')
const { PluginInstance } = require('@rispa/core')
const WebpackPluginApi = require('@rispa/webpack')

const clientWebpackConfig = require('./configs/client.wpc')
const commonWebpackConfig = require('./configs/common.wpc')

const renderClient = require('../lib/client').default

const log = createDebug('rispa:info:render-server')

class RenderClientPlugin extends PluginInstance {
  constructor(context) {
    super(context)
    this.webpack = context.get(WebpackPluginApi.pluginName)

    this.render = this.render.bind(this)
  }

  start() {
    this.webpack.addClientConfig(clientWebpackConfig)
    this.webpack.addCommonConfig(commonWebpackConfig)
  }

  render(assets) {
    return req => {
      log(`request page '${req.originalUrl}'`)

      return renderClient(req, { assets, log })
    }
  }
}

module.exports = RenderClientPlugin
