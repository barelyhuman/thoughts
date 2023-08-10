import { Note } from './Note'

const dateToID = (date: Date) => {
  return date.getTime()
}

export default function ThoughtsList({ authenticated, data }) {
  return (
    <div class="max-w-3xl p-5 mx-auto">
      <h1 class="font-semibold">Thoughts</h1>
      <div class="flex items-center justify-end">
        {authenticated && (
          <a class="btn" href="/admin/posts/new">
            New
          </a>
        )}
      </div>
      <div class="article">
        {data.map(x => {
          return (
            <Note
              content={x.content}
              date={new Date(x.date).toLocaleString()}
              idRef={dateToID(new Date(x.date))}
            />
          )
        })}
      </div>
    </div>
  )
}
