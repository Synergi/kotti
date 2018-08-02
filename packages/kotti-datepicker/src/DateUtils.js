const util = {
	daysInMonth(year, month) {
		if (/8|3|5|10/.test(month)) {
			return 30
		}
		if (month === 1) {
			let isLoopYear = (!(year % 4) && year % 100) || !(year % 400)
			return isLoopYear ? 29 : 28
		}
		return 31
	},
}

export default {
	...util,
}