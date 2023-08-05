export default function Dashboard({ existingThoughts }) {
  return (
    <div class="max-w-3xl mx-auto p-2">
      <h1>Admin</h1>

      <div class="mt-10">
        <div class="flex items-center justify-between">
          <h2 class="font-semibold">Posts</h2>
          <a class="btn" href="/admin/posts/new">
            New
          </a>
        </div>
        <div class="mt-2 flex flex-col gap-4">
          {existingThoughts.map(d => {
            return (
              <div class="border rounded-md border-zinc-300">
                <div class="border-b flex items-center justify-between w-full p-2 border-b-zinc-300">
                  <p class="font-semibold text-xs">{d.filename}</p>
                  <a
                    class="text-sm underline text-zinc-600 hover:text-black"
                    href={`/admin/posts/${d.filename}`}
                  >
                    View
                  </a>
                </div>
                <div
                  class="p-4 article"
                  dangerouslySetInnerHTML={{ __html: d.content }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
