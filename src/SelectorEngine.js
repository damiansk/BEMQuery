'use strict';

class SelectorEngine {
	constructor( converter ) {
		this.converter = converter;
	}

	find( selector ) {
		const convertedSelector = this.converter.convert( selector );
		const result = {
			selector: convertedSelector
		};
		const elements = document.querySelectorAll( convertedSelector.CSS );

		result.elements = Array.from( elements );

		return result;
	}
}
