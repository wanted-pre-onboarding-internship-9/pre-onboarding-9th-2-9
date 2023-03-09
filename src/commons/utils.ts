export function commaPerThousand(number: number) {
	return number.toLocaleString('ko-KR');
}

export function convertUnitToWon(number: number) {
	return `${number.toLocaleString('ko-KR')} KRW`;
}
