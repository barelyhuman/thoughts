import snarkdown from 'snarkdown'

export function parse(md) {
  return snarkdown(md)
}
