const { PluginApi } = require('@rispa/core')

class RenderClientPluginApi extends PluginApi {
  render(...props) {
    return this.instance.render(...props)
  }
}

RenderClientPluginApi.pluginName = '@rispa/render-client'

module.exports = RenderClientPluginApi
