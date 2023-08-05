export const Note = ({ date = '', content = '', idRef, ...props }) => {
  return (
    <div class="article-container">
      <a href={'#' + idRef} className="no-underline text-zinc-400">
        <p id={idRef} class="!m-0 !p-0">
          <small>{date}</small>
        </p>
      </a>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
