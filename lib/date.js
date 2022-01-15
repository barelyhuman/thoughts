import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export const parseDate = (date) => {
  const splits = {
    year: parseInt(date.slice(0, 4), 10),
    month: parseInt(date.slice(4, 6), 10) - 1,
    day: parseInt(date.slice(6, 8))
  }

  return new Date(splits.year, splits.month, splits.day).toISOString()
}

export const parseTime = (time, refDate) => {
  const splits = {
    hours: time.slice(0, 2),
    minutes: time.slice(2, 4),
    seconds: time.slice(4, 6)
  }

  const dateInMills = new Date(refDate).setHours(
    splits.hours,
    splits.minutes,
    splits.seconds
  )
  return dateInMills
}

export const prettyDate = (date) => {
  return dayjs(date).format('MMM Do, YYYY hh:mm a')
}
