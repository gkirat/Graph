import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { list } from "../generated/schema"
import { list as listEvent } from "../generated/graph/graph"
import { handlelist } from "../src/graph"
import { createlistEvent } from "./graph-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let numValue = BigInt.fromI32(234)
    let whoChanged = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newlistEvent = createlistEvent(numValue, whoChanged)
    handlelist(newlistEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("list created and stored", () => {
    assert.entityCount("list", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "list",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "numValue",
      "234"
    )
    assert.fieldEquals(
      "list",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "whoChanged",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
