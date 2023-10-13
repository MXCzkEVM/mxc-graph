import {
  MXCL2,
  AddressManagerChanged,
  Anchored,
  CrossChainSynced,
  Initialized,
  OwnershipTransferred
} from "../generated/MXCL2/MXCL2"
import {updateMXCDayDates} from "./dayUpdates";

// export function handleAddressManagerChanged(
//   event: AddressManagerChanged
// ): void {
// }

export function handleAnchored(event: Anchored): void {
  updateMXCDayDates(event);
}

// export function handleCrossChainSynced(event: CrossChainSynced): void {}
//
// export function handleInitialized(event: Initialized): void {}
//
// export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
