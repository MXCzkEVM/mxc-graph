import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddressManagerChanged,
  Anchored,
  CrossChainSynced,
  Initialized,
  OwnershipTransferred
} from "../generated/MXCL2/MXCL2"

export function createAddressManagerChangedEvent(
  addressManager: Address
): AddressManagerChanged {
  let addressManagerChangedEvent = changetype<AddressManagerChanged>(
    newMockEvent()
  )

  addressManagerChangedEvent.parameters = new Array()

  addressManagerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "addressManager",
      ethereum.Value.fromAddress(addressManager)
    )
  )

  return addressManagerChangedEvent
}

export function createAnchoredEvent(
  number: BigInt,
  basefee: BigInt,
  gaslimit: BigInt,
  timestamp: BigInt,
  parentHash: Bytes,
  prevrandao: BigInt,
  coinbase: Address,
  chainid: BigInt
): Anchored {
  let anchoredEvent = changetype<Anchored>(newMockEvent())

  anchoredEvent.parameters = new Array()

  anchoredEvent.parameters.push(
    new ethereum.EventParam("number", ethereum.Value.fromUnsignedBigInt(number))
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "basefee",
      ethereum.Value.fromUnsignedBigInt(basefee)
    )
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "gaslimit",
      ethereum.Value.fromUnsignedBigInt(gaslimit)
    )
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "parentHash",
      ethereum.Value.fromFixedBytes(parentHash)
    )
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "prevrandao",
      ethereum.Value.fromUnsignedBigInt(prevrandao)
    )
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam("coinbase", ethereum.Value.fromAddress(coinbase))
  )
  anchoredEvent.parameters.push(
    new ethereum.EventParam(
      "chainid",
      ethereum.Value.fromUnsignedBigInt(chainid)
    )
  )

  return anchoredEvent
}

export function createCrossChainSyncedEvent(
  srcHeight: BigInt,
  blockHash: Bytes,
  signalRoot: Bytes
): CrossChainSynced {
  let crossChainSyncedEvent = changetype<CrossChainSynced>(newMockEvent())

  crossChainSyncedEvent.parameters = new Array()

  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "srcHeight",
      ethereum.Value.fromUnsignedBigInt(srcHeight)
    )
  )
  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "signalRoot",
      ethereum.Value.fromFixedBytes(signalRoot)
    )
  )

  return crossChainSyncedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
