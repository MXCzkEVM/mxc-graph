// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MXCDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MXCDayData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MXCDayData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MXCDayData", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MXCDayData | null {
    return changetype<MXCDayData | null>(store.get_in_block("MXCDayData", id));
  }

  static load(id: string): MXCDayData | null {
    return changetype<MXCDayData | null>(store.get("MXCDayData", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get burn(): BigDecimal {
    let value = this.get("burn");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set burn(value: BigDecimal) {
    this.set("burn", Value.fromBigDecimal(value));
  }
}