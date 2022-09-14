let idx = 0;

export function writeText(str) {
	str.slice(0, idx);

	idx++;

	if (idx > str.length) {
		console.log(str);
		return str;
	}

	setTimeout(() => {
		writeText(str);
	}, 500);
}
