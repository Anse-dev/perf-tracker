// index.js

export function trackPerformance(func) {
	return async function (...args) {
		const isAsync = func.constructor.name === 'AsyncFunction';
		const startMemory = process.memoryUsage().heapUsed;
		const start = process.hrtime();
		const result = await func(...args);
		const end = process.hrtime(start);
		const endMemory = process.memoryUsage().heapUsed;
		const timeTaken = `${end[0]}s ${end[1] / 1000000}ms`;
		const funcName = func.name || '';
		console.log(func.name);
		const funcType = isAsync ? 'asynchronous' : 'synchronous';
		const memoryUsed = `${(endMemory - startMemory) / 1024} KB`;
		console.log(
			`Function '${funcName}' executed in ${timeTaken} (${funcType}), memory used: ${memoryUsed}`
		);
		return result;
	};
}
