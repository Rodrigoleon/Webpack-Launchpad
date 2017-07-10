// Code Splitting and Code on Demand
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
			elContent.innerHTML = pageModule.default;
		})
});

document.getElementById('loadPage2').addEventListener('click', () => {
	System.import('./sample-page-2')
		.then(pageModule => {
			elContent.innerHTML = pageModule.default;
		})
});