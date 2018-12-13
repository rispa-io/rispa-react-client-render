import React, { Component } from 'react'
import { shape, arrayOf, string } from 'prop-types'

const loadChunksOnClient = () => {
  const chunks = window.RISPA_CHUNKS
  let loadedChunksCount = 0

  const loadScript = (src, handler) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = handler
    document.body.appendChild(script)
  }

  const chunkLoadedHandler = () => {
    loadedChunksCount += 1
    if (loadedChunksCount === chunks.length) {
      // Schedule application start for next tick for break long frames
      setTimeout(window.startApp, 0)
    }
  }

  const loadChunk = chunk => loadScript(chunk, chunkLoadedHandler)

  if (chunks.length) {
    chunks.forEach(loadChunk)
  } else {
    setTimeout(window.startApp, 0)
  }
}

class Html extends Component {
  static propTypes = {
    assets: shape({
      chunks: arrayOf(string),
      vendor: string,
      polyfill: string,
    }),
  }

  render() {
    const { assets: { chunks, vendor, polyfill } } = this.props

    return (
      <html lang='ru-RU'>
        <head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* {Object.keys(assets.styles).map(style => (
            <link
              href={assets.styles[style]}
              key={style}
              media='screen, projection'
              rel='stylesheet'
              type='text/css'
              charSet='UTF-8'
            />
          ))} */}
        </head>
        <body>
          <div id='root' />
          <script src={vendor} charSet='UTF-8' />
          {polyfill && <script src={polyfill} charSet='UTF-8' />}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // <![CDATA[
                window.RISPA_CHUNKS=${JSON.stringify(chunks)};
                (${loadChunksOnClient.toString()}());
                // ]]>
              `,
            }}
            charSet='UTF-8'
          />
        </body>
      </html>
    )
  }
}

export default Html
