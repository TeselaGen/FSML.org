import { Type, Static } from '../../deps/typebox.ts';
import Row from './row.ts';
import Column from './column/index.ts';

const Data = Type.Object({
  name: Type.String(),
  /**
   * NOTE: we could go with a row-based or a column-based approach for storing data.
   *
   * - row-based has the advantage of not needing to know how to parse each row into columns
   * (e.g., when the delimiter isnt well defined or known). It also makes it easier to read data files
   * in a stream line by line fashion without worry about how each line translates into columns, but just
   * simply go on and storing rows in FSML directly.
   *
   * - column-based gives you less flexibility when creating the FSML out of a data file,
   * as it forces you to know how to translate rows into columns. But it has the advantage of
   * easier manageability when wanting to do statistical analyses because you can just grab the column
   * data you need instead of looping through each row to get them.
   */
  rows: Type.Array(Row),
  // Instead of Array it could be also good to make columns of type [key:string]: Column
  // But not sure how to that with typebox yet.
  columns: Type.Optional(Type.Array(Column)),
  /**
   * This is to be a reference to the files from which this data came.
   * The actual URI for the file is to be stored in manifest.sourceContent
   */
  sourceFileReference: Type.Optional(Type.String()),
});

export default Data;
