import { convert, Options } from "./convert"
const sample = require('./input.json');

function main() {
    const options = new Options(
      true,
      false,
      false,
    );
    const result = convert(JSON.stringify(sample).trim(), options)
    console.log(result.success)
}

main()