import yargs from "https://deno.land/x/yargs@v17.5.1-deno/deno.ts";
import { Arguments } from "https://deno.land/x/yargs@v17.5.1-deno/deno-types.ts";

yargs(Deno.args)
  .command(
    "download <files...>",
    "download a list of files",
    (yargs: Arguments) => {
      return yargs.positional("files", {
        describe: "a list of files to do something with",
      });
    },
    (argv: Arguments) => {
      console.info(argv);
      //hey
    },
  )
  .strictCommands()
  .demandCommand(1)
  .parse();
