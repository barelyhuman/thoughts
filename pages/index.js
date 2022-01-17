import Footer from 'components/footer'
import { Note } from 'components/note'
import { getNotes } from 'lib/get-notes'
import { Spacery } from 'spacery'

export default function NotesList({ notes }) {
  return (
    <>
      <Spacery paddingT-50>
        {notes.map((i, index) => {
          return (
            <Note
              key={`${i.timeString}-${index}`}
              title={i.title}
              date={i.timeString}
              content={i.htmlContent}
              marginB-100
            />
          )
        })}
      </Spacery>
      <Footer />
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
