let arr = [1, 4];

const findPoisonedDuration = function (timeSeries, duration) {
	let totalPossibleSecond = timeSeries.length * duration
	let totalPoisonedSecond = totalPossibleSecond
	for (let i = 0; i < timeSeries.length; i++) {
		if (timeSeries[i + 1] <= duration) {
			let gap = timeSeries[i + 1] - timeSeries[i]
			totalPoisonedSecond = totalPossibleSecond - gap
		}
	}

	return totalPoisonedSecond;
}

console.log(findPoisonedDuration(arr, 2));
 