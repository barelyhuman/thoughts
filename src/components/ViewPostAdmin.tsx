// @island

import { useState } from 'preact/hooks'

export default function ViewPostAdmin({ postData, postDataRaw, postFile }) {
  const [editMode, setEditMode] = useState(false)

  return (
    <div class="max-w-3xl mx-auto p-2">
      <div class="flex justify-end">
        {!editMode && (
          <button type="button" class="btn" onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
        {editMode && (
          <button type="button" class="btn" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        )}
      </div>
      <div class="mt-2 border border-zinc-400 focus-within:border-zinc-900 rounded-md p-2 pb-1">
        {editMode ? (
          <form method="POST" action={`/admin/posts/${postFile}`}>
            <textarea
              name="content"
              rows={postDataRaw.split('\n').length + 2}
              class="outline-none resize-none min-h-full w-full border-0"
            >
              {postDataRaw}
            </textarea>
            <div class="mt-3">
              <button type="submit" class="btn">
                Save
              </button>
            </div>
          </form>
        ) : (
          <article
            class="article"
            dangerouslySetInnerHTML={{ __html: postData }}
          ></article>
        )}
      </div>
    </div>
  )
}
