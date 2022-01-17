import { Text } from './text'

export default function Footer() {
  return (
    <>
      <footer>
        <Text className="text-dim">
          The code for this site is{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://opensource.org/licenses/MIT">
            MIT
          </a>{' '}
          and available{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/barelyhuman/thoughts">
            here
          </a>
        </Text>
      </footer>
      <style></style>
    </>
  )
}
