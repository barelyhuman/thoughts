import { config } from '@/configs'
import { listen } from '@/lib/queue'

export class SearchIndexHandler {
  @listen(
    config.queue.searchIndex.name,
    config.queue.searchIndex.types.generateIndex
  )
  async handleSearchIndexGeneration(job: any) {
    // TODO:
  }
}
