import getAllApods from "./apod-api.js"
import fs from "fs"


async function main() {
	const allApods = await getAllApods()

	fs.writeFileSync("apods.json", JSON.stringify(allApods))
}

main()
