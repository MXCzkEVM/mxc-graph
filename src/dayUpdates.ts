import {Bundle, MXCDayData} from "../generated/schema";
import {BigDecimal, BigInt, ethereum} from "@graphprotocol/graph-ts";
export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')

export let BD_18 = BigDecimal.fromString('18')


export let BD_1e18 = BigDecimal.fromString("1e18")

let archorGas = BigInt.fromI32(162332)


export let BI_18 = BigInt.fromI32(18)
export function updateMXCDayDates(event: ethereum.Event): MXCDayData {
    let bundle = Bundle.load("1");
    if(bundle === null) {
        bundle = new Bundle("1");
        bundle.burn = ZERO_BD;
    }
    let timestamp = event.block.timestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;
    let MXCDayDate = MXCDayData.load(dayID.toString());
    if (MXCDayDate === null) {
        MXCDayDate = new MXCDayData(dayID.toString());
        MXCDayDate.date = dayStartTimestamp;
        MXCDayDate.burn = ZERO_BD;
    }
    if(event.block.baseFeePerGas) {
        if(event.block.gasUsed.gt(archorGas)) {
            let burn = event.block.gasUsed.minus(archorGas).times(event.block.baseFeePerGas!).divDecimal(BD_1e18);
            MXCDayDate.burn = MXCDayDate.burn.plus(burn);
            bundle.burn = bundle.burn.plus(burn);
        }
    }
    MXCDayDate.save();
    bundle.save();

    return MXCDayDate;
}