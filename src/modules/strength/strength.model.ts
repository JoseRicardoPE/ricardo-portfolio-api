import { model, Schema } from "mongoose";
import { Strength } from "./strength.interface.js";
import { localizedTextSchema } from "../../shared/schemas/localized-text.schema.js";
import { boolean } from "zod";

const strengthSchema = new Schema<Strength>(
    {
        name: {
            type: localizedTextSchema,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true,
        },
        order: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
    },
  {
    timestamps: true,
  },
);

export const StrengthModel = model<Strength>('Strength', strengthSchema);