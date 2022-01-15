import { Spacery } from 'spacery'
import { Text } from './text'

export function Note({ title = '', date = '', content = '', ...props }) {
  return (
    <Spacery {...props}>
      <Text type="small" className="text-dim">
        {date}
      </Text>
      <Text
        type="article"
        marginY-4
        dangerouslySetInnerHTML={{ __html: content }}></Text>
    </Spacery>
  )
}
