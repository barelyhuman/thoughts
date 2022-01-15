import React from 'react'
import { modsToStyle } from 'spacery'

export function Text({ type = 'p', ...props }) {
  const { style, sanitizedProps } = modsToStyle(props, 'px')
  return React.createElement(type, {
    style: style,
    ...sanitizedProps
  })
}
