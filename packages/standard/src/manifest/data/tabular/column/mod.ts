import { Static, Type } from "../../../../deps/typebox.ts";
import { ColumnKindEnum } from "../../types.ts";
import Subject from "./subject.ts";
import ReferenceDimension from "./reference-dimension.ts";
import Measurement from "./measurement.ts";
import Descriptor from "./descriptor.ts";
import Unit from "./unit.ts";
import NumericType from "../valueTypes/numeric.ts";
import CategoricType from "../valueTypes/categoric.ts";
import TextType from "../valueTypes/text.ts";
import DateType from "../valueTypes/date.ts";

export const Class = Type.Optional(
  Type.Union([
    Subject,
    ReferenceDimension,
    Measurement,
    Descriptor,
    Unit,
  ]),
);

export const Kind = Type.Optional(
  Type.Object({
    /**
     * The column's kind, any of ColumnKindEnum.
     */
    type: Type.Enum(ColumnKindEnum),
    /**
     * The column class (e.g, measurement, descriptor, etc.).
     *
     * Classifying columns give them a more detailed description
     * of its meaning.
     */
    class: Class,
  }),
);

export const Column = Type.Object({
  /**
   * Index of the column this metadata object is referring to.
   */
  index: Type.Number(),
  /**
   * name of the column, e.g., the column header.
   */
  name: Type.Number(),
  /**
   * An optional field for a plain text description of the column.
   */
  description: Type.Optional(Type.String()),
  /**
   * type of value this column stores.
   */
  valueType: Type.Optional(
    Type.Union([NumericType, CategoricType, TextType, DateType]),
  ),
  /**
   * The column's kind gives it a context
   * or meaning.
   */
  kind: Kind,
});

export default Column;

export type TColumn = Static<typeof Column>;
export type TKind = Static<typeof Kind>;
export type TClass = Static<typeof Class>;
