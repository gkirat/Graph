import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { list } from "../generated/graph/graph"

export function createlistEvent(numValue: BigInt, whoChanged: Address): list {
  let listEvent = changetype<list>(newMockEvent())

  listEvent.parameters = new Array()

  listEvent.parameters.push(
    new ethereum.EventParam(
      "numValue",
      ethereum.Value.fromUnsignedBigInt(numValue)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "whoChanged",
      ethereum.Value.fromAddress(whoChanged)
    )
  )

  return listEvent
}
