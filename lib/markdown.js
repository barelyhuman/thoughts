import snarkdown from 'snarkdown'

export function parse(md) {
  return md
    .split(/(?:\r?\n){2,}/)
    .map((l) =>
      [' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
        ? snarkdown(l)
        : `<p>${snarkdown(l)}</p>`
    )
    .join('\n')
}
