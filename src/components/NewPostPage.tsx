export default function NewPostPage({}) {
  return (
    <div class="max-w-3xl mx-auto p-2">
      <h1>New Post</h1>

      <form method="POST" action="/admin/posts/new" class="flex flex-col gap-2">
        <div class="flex items-center justify-end">
          <button class="btn">Save</button>
        </div>
        <div>
          <textarea name="content" class="input" />
        </div>
      </form>
    </div>
  )
}
