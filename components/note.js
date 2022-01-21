import React from 'react'
import {Spacery} from 'spacery'
import pt from 'prop-types'
import {Text} from './text.js'

Note.propTypes = {
	date: pt.string,
	content: pt.string,
}

export const Note = ({date = '', content = '', ...props}) => {
	return (
		<Spacery {...props}>
			<Text margin-0 padding-0 type="p">
				<Text type="small" className="text-dim">
					{date}
				</Text>
			</Text>
			<Text marginY-4 type="main" dangerouslySetInnerHTML={{__html: content}} />
		</Spacery>
	)
}
