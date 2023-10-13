import { BigInt } from "@graphprotocol/graph-ts"
import {
  MXCL2,
  AddressManagerChanged,
  Anchored,
  CrossChainSynced,
  Initialized,
  OwnershipTransferred
} from "../generated/MXCL2/MXCL2"
import { ExampleEntity } from "../generated/schema"

export function handleAddressManagerChanged(
  event: AddressManagerChanged
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.addressManager = event.params.addressManager

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.GOLDEN_TOUCH_ADDRESS(...)
  // - contract.GOLDEN_TOUCH_PRIVATEKEY(...)
  // - contract.addressManager(...)
  // - contract.gasExcess(...)
  // - contract.getBasefee(...)
  // - contract.getBlockHash(...)
  // - contract.getCrossChainBlockHash(...)
  // - contract.getCrossChainSignalRoot(...)
  // - contract.getEIP1559Config(...)
  // - contract.latestSyncedL1Height(...)
  // - contract.owner(...)
  // - contract.parentTimestamp(...)
  // - contract.publicInputHash(...)
  // - contract.resolve(...)
  // - contract.resolve(...)
  // - contract.signAnchor(...)
}

export function handleAnchored(event: Anchored): void {}

export function handleCrossChainSynced(event: CrossChainSynced): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
