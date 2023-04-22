declare module androidNative {
	// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
	export class Array<T> {
		constructor();
		length: number;
		[index: number]: T;
	}
}

import globalAndroid = android;

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
type Any = any;
