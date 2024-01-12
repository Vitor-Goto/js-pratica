const commander = require("commander")

async function main() {
  commander
    .version("v1")

    .parse(process.aqv)
}
main()
