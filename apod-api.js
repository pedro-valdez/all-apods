import axios from "axios"
import allRanges from "./ranges.js"


/*
 * There is only one endpoint in this API,
 * so I'll include it in the baseURL.
*/
const base = "http://localhost:8000"
const endpoint = "v1/apod"
const apodApi = axios.create({
	baseURL: `${base}/${endpoint}/`,
})

const getApods = async ([start, end]) => {
	const year = start.slice(0, 4)

	try {
		const response = await apodApi.get("", {
			params: {
				start_date: start,
				end_date: end,
			},
		})

		const apods = response.data

		return {
			year,
			apods,
		}
	} catch (error) {
		console.log(`An error occurred on ${start} - ${end}`)

		return {
			year,
			apods: [],
		}
	}
}

const getAllApods = async () => {
	const requests = allRanges.map(getApods)
	const response = await Promise.all(requests)

	return response
}


export default getAllApods
