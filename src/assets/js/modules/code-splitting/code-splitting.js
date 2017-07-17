// Code Splitting and Code on Demand
// Place this code on App.JS for it to run.
// Note that you will need to change the path of the Sample Pages. Alternatively, make this an export.
app.innerHTML = `
	<div id="menu">
		<button id="loadPage1">Load Page 1</button>
		<button id="loadPage2">Load Page 2</button>
	</div>
	<div id="content">
		<h1>Home</h1>
	</div>
`;

const elContent = document.getElementById('content');

document.getElementById('loadPage1').addEventListener('click', () => {
	System.import('./sample-page-1')
		.then(pageModule => {
			console.log(pageModule.default);
			elContent.innerHTML = pageModule.default;
		})
});

document.getElementById('loadPage2').addEventListener('click', () => {
	System.import('./sample-page-2')
		.then(pageModule => {
			elContent.innerHTML = pageModule.default;
		})
});