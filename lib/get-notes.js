import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import {
  parseDate,
  parseDateToString,
  parseTime,
  parseTimeToString,
  prettyDate
} from './date'
import { parse } from './markdown'

export function getNotes() {
  const noteMeta = []
  readdirSync('./notes').forEach((file) => {
    if (!String(file).endsWith('.md')) {
      return
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
      mdContent: fileContent
    })
  })
  return noteMeta.sort((x, y) => {
    return new Date(y.date).getTime() - new Date(x.date).getTime()
  })
}
