import {readFileSync, readdirSync} from 'node:fs'
import {join} from 'node:path'
import {parseDate, parseTime, prettyDate} from './date.js'
import {parse} from './markdown.js'

export function getNotes() {
	const noteMeta = []
	for (const file of readdirSync('./notes')) {
		if (!String(file).endsWith('.md')) {
			continue
		}

		const [date, time] = file.split('-')
		const pdate = parseDate(date)
		const ptime = parseTime(time, pdate)

		const fileContent = readFileSync(join('./notes', file)).toString()
		const content = parse(fileContent)

		noteMeta.push({
			id: noteMeta.length * 2022,
			title: fileContent.slice(0, 30) + (fileContent.length > 100 && '...'),
			date: ptime,
			timeString: prettyDate(new Date(ptime)),
			htmlContent: content,
			mdContent: fileContent,
		})
	}

	return noteMeta.sort((x, y) => {
		return new Date(y.date).getTime() - new Date(x.date).getTime()
	})
}
