import { Note } from 'components/note'
import { getNotes } from 'lib/get-notes'
import { Spacery } from 'spacery'

export default function NotesList({ notes }) {
  return (
    <>
      <Spacery paddingY-100>
        {notes.map((i) => {
          return (
            <Note
              key={i}
              title={i.title}
              date={i.timeString}
              content={i.htmlContent}
              marginB-50
            />
          )
        })}
      </Spacery>
    </>
  )
}

export function getStaticProps(ctx) {
  const allNotes = getNotes()
  return {
    props: {
      notes: allNotes
    }
  }
}
