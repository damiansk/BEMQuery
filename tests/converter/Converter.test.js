/* global chai*/
'use strict';

import Converter from '../src/converter/Converter';
import defaultConverterConfig from '../src/converter/defaultConfig';

const expect = chai.expect;

describe( 'Converter', () => {
	it( 'is a class', () => {
		expect( Converter ).to.be.a( 'function' );
	} );

	it( 'constructor takes configuration of conversion as 1. parameter', () => {
		const config = {
			'hublabubla': true
		};
		const converter = new Converter( config );

		expect( converter.config ).to.deep.equal( config );
	} );

	it( 'fallbacks to default configuration if instantiated without parameters', () => {
		const converter = new Converter();

		expect( converter.config ).to.deep.equal( defaultConverterConfig );
	} );
} );

