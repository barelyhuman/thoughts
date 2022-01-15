import { Spacery } from 'spacery'
import { Text } from './text'

export function Note({ title = '', date = '', content = '', ...props }) {
  return (
    <Spacery {...props}>
      <Text type="p" margin-0 padding-0>
        <Text type="small" className="text-dim">
          {date}
        </Text>
      </Text>
      <Text
        type="main"
        marginY-4
        dangerouslySetInnerHTML={{ __html: content }}></Text>
    </Spacery>
  )
}
