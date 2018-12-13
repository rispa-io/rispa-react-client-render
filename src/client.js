import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Html from './Html'

export default function (req, { assets }) {
  return renderToStaticMarkup(<Html assets={assets} />)
}
