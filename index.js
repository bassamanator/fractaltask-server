const PORT = 3011;
const path = require('path');
const fs = require('fs');
const http = require('http');

const logFileName = require('./logFileName.js');

const server = http.createServer((req, res) => {
	let pData = "";
	if (req.method === 'POST') {
		req.on('data', (chunk) => {
			pData += chunk;
		});
		req.on('end', () => {
			let ver = pData.substr(pData.length - 1, 1);
			pData = pData.substr(0, pData.length - 1) + '\n';
			let fn = logFileName(pData, ver);
			// console.log(fn);
			fs.writeFile(path.join(__dirname, 'logs', fn), pData, (err) => {
				if (err) console.log(err.message);
			});
		});
	}
}).listen(PORT);
