// test/test.js

import { expect } from 'chai';
import { trackPerformance } from '../index.js';

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Performance Tracker', () => {
	it('should track the performance of a synchronous function', () => {
		const trackedFunction = trackPerformance(() => {
			for (let i = 0; i < 1000000; i++) {}
		});
		trackedFunction();
	});

	it('should track the performance of an asynchronous function', async () => {
		const trackedFunction = trackPerformance(async () => {
			await delay(100);
		});
		await trackedFunction();
	});
});
