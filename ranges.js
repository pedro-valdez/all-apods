import dayjs from "dayjs"


const firstApodDate = dayjs("1995-06-16")
const today = dayjs()

const makeBody = () => {
	const body = []
	const start = firstApodDate.add(1, "year")
	const end = today.subtract(1, "year").endOf("year")

	let year = dayjs(start)
	while(year.isBefore(end)) {
		body.push([dayjs(year), year.endOf("year")])
		year = year.add(1, "year")
	}

	return body
}

const formatRange = (range) => {
	return range.map(date => date.format("YYYY-MM-DD"))
}

const makeAllApodRanges = () => {
	const head = [firstApodDate, firstApodDate.endOf("year")]
	const body = makeBody()
	const tail = [today.startOf("year"), today]

	const allRanges = [head, ...body, tail]
		.map(formatRange)

	return allRanges
}

const allRanges = makeAllApodRanges()


export default allRanges
