import React from 'react'
import About from 'components/about'
import Header from 'components/header'
import {Note} from 'components/note'
import ScrollUp from 'components/scroll-up'
import {getNotes} from 'lib/get-notes'
import {Spacery} from 'spacery'
import PropTypes from 'prop-types'

NotesList.propTypes = {
	notes: PropTypes.array,
}

const NotesList = ({notes}) => {
	return (
		<>
			<Header />
			<Spacery paddingT-50>
				{notes.map((i) => {
					return (
						<Note
							key={`${i.timeString}`}
							marginB-100
							title={i.title}
							date={i.timeString}
							content={i.htmlContent}
						/>
					)
				})}
			</Spacery>
			<ScrollUp />
			<About />
		</>
	)
}

export function getStaticProps(_) {
	const allNotes = getNotes()
	return {
		props: {
			notes: allNotes,
		},
	}
}

export default NotesList
