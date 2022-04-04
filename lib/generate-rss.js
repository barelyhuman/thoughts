import {getNotes} from './get-notes'
import {justText} from './markdown.js'
import {join} from 'node:path'
import {writeFileSync} from 'node:fs'
import RSS from 'rss-generator'

export function generateRSS() {
	const notes = getNotes()
	const feed = new RSS({
		title: 'Thoughts',
		description: '',
		feed_url: 'https://thoughts.reaper.im/rss.xml',
		site_url: 'https://thoughts.reaper.im',
		image_url: 'https://thoughts.reaper.im/android-chrome-512x512.png',
		language: 'en',
	})

	notes.forEach((note) => {
		feed.item({
			title: note.timeString,
			description: justText(note.mdContent).slice(0, 100) + '...',
			date: note.date,
		})
	})

	const rssOutPath = join('public', 'rss.xml')
	writeFileSync(rssOutPath, feed.xml())
}
