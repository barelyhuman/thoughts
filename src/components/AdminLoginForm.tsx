export default function AdminLoginForm() {
  return (
    <div class="h-screen flex justify-center items-center">
      <form method="POST" action="/admin/login" class="flex flex-col gap-2">
        <div>
          <input
            class="text-3xl border-4 border-zinc-400 outline-none focus:border-zinc-900  px-3 py-1 rounded-xl "
            name="username"
            placeholder="username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            class="text-3xl border-4 border-zinc-400 outline-none focus:border-zinc-900 px-3 py-1 rounded-xl"
            placeholder="superSecretPassword"
          />
        </div>
        <div>
          <button class="text-3xl w-full hover:bg-zinc-900 hover:cursor-pointer px-6 py-2 rounded-xl bg-black text-white">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
