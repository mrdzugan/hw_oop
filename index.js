class RangeValidator {
	constructor(from, to) {
		this._from = from;
		this._to = to;
	}

	get from() {
		return this._from;
	}

	set from(v) {
		this._from = v;
	}

	get to() {
		return this._to;
	}

	set to(v) {
		this._to = v;
	}

	get range() {
		return [this.from, this.to];
	}

	validate(value) {
		return value >= this.from && value <= this.to;
	}
}