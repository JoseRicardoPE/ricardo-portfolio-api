import { StrengthModel } from "./strength.model.js";

export async function getStrengths() {
    return StrengthModel.find({
        isActive: true,
    })
        .sort({
            order: 1,
            'nam.es': 1,
        })
        .lean();
}