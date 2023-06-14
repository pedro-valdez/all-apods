import getAllApods from "./apod-api.js"
import fs from "fs"


async function main() {
	const years = await getAllApods()
	const apods = years.map(year => year.apods).flat()

	apods.forEach(apod => {
		fs.writeFileSync(`apods/${apod.date}.json`, JSON.stringify(apod))
	})
}

main()
