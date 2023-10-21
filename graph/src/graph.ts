import { list as listEvent } from "../generated/graph/graph"
import { list } from "../generated/schema"

export function handlelist(event: listEvent): void {
  let entity = new list(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.numValue = event.params.numValue
  entity.whoChanged = event.params.whoChanged

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
