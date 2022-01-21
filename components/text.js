import PropTypes from 'prop-types'
import React from 'react'
import {modsToStyle} from 'spacery'

export const Text = ({type = 'p', ...props}) => {
	const {style, sanitizedProps} = modsToStyle(props, 'px')
	return React.createElement(type, {
		style,
		...sanitizedProps,
	})
}

Text.propTypes = {
	type: PropTypes.string,
}
