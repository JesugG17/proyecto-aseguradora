const VISA = /^4\d{12}(\d{3})?$/
const MASTER = /^(5[1-5]\d{4}|677189)\d{10}$/

export function brandMatcher(value ) {
	if(value.match(VISA) !== null) return 'visa';

	if(value.match(MASTER) !== null) return 'master';

	return 'default'
}