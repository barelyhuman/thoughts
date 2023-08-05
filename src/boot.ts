import { config } from '@/configs'
import { createProducer } from '@/lib/queue'

// example queues
// Inline name
createProducer('test')
// name from config
createProducer(config.queue.email.name)
createProducer(config.queue.searchIndex.name)

// get the controllers
import '@/controllers/root'
import '@/controllers/options'
import '@/controllers/health'
