import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Html from './Html'

export default function (req, { assets, log }) {
  log(assets)
  // log('RENDER CLIENT', assets.compilation.assets)
  // const headerAssets = Object.keys(assets.styles).map(style => (
  //   <link href={assets.styles[style]} key={style} media='screen, projection' rel='stylesheet' type='text/css' charSet='UTF-8' />
  // ))
  return renderToStaticMarkup(<Html assets={assets} />)
  // return mergeTemplateWithAssets(template, { bodyAssets })
}
