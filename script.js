// Treemap generator using D3
// Reads values from the form and renders a treemap of size 800 x 600 in #treemap-area

const WIDTH = 800;
const HEIGHT = 600;

const form = document.getElementById('treemap-form');
const treemapArea = document.getElementById('treemap-area');
const messageEl = document.getElementById('message');

function clearMessage() {
	messageEl.textContent = '';
}

function setMessage(msg) {
	messageEl.textContent = msg;
}

function prepareData(total, nodes) {
	const sumNodes = nodes.reduce((s, d) => s + d.value, 0);

	if (sumNodes > total) {
		// Throw an error: user requested explicit behavior to show error when sum > total
		throw new Error('Sum of values (' + Math.round(sumNodes) + ") exceeds total budget (" + total + "). Please adjust values.");
	}

	if (sumNodes < total) {
		// Add an "Other" node to fill remaining space
		const otherVal = total - sumNodes;
		return nodes.concat([{name: 'Remaining budget', value: otherVal}]);
	}

	return nodes;
}

function renderTreemap(data, total) {
	// clear previous
	treemapArea.innerHTML = '';

	const svg = d3.select('#treemap-area')
		.append('svg')
		.attr('width', WIDTH)
		.attr('height', HEIGHT)
		.attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
		.style('font-family', 'sans-serif');

	const root = d3.hierarchy({children: data})
		.sum(d => d.value)
		.sort((a, b) => b.value - a.value);

	d3.treemap()
		.size([WIDTH, HEIGHT])
		.paddingInner(2)
		(root);

	const color = d3.scaleOrdinal(d3.schemeSet3);

	const leaf = svg.selectAll('g')
		.data(root.leaves())
		.join('g')
		.attr('transform', d => `translate(${d.x0},${d.y0})`);

	leaf.append('rect')
		.attr('width', d => Math.max(0, d.x1 - d.x0))
		.attr('height', d => Math.max(0, d.y1 - d.y0))
		.attr('fill', (d, i) => color(i))
		.attr('stroke', '#fff');

	// labels: try to fit name and percentage
	leaf.append('text')
		.attr('x', 4)
		.attr('y', 16)
		.attr('fill', 'black')
		.style('font-size', '13px')
		.style('pointer-events', 'none')
		.text(d => {
			const percent = ((d.data.value / total) * 100).toFixed(1);
			return `${d.data.name} (${percent}%)`
		})
		.each(function(d) {
			// simple truncation if text wider than rect
			const rectWidth = d.x1 - d.x0 - 6; // padding
			let text = d3.select(this);
			if (this.getComputedTextLength() > rectWidth) {
				let t = text.text();
				while (this.getComputedTextLength() > rectWidth && t.length > 0) {
					t = t.slice(0, -1);
					text.text(t + '…');
				}
			}
		});
}

form.addEventListener('submit', e => {
	e.preventDefault();
	clearMessage();
	try {
		const {title, total, nodes} = parseInputs();
		const data = prepareData(total, nodes);
		document.getElementById('treemap-title-display').textContent = title;
		renderTreemap(data, total);
	} catch (err) {
		setMessage(err.message);
	}
});

// --- Dynamic node row management ---
function makeNodeRow(name = '', value = '', required = false) {
	const row = document.createElement('div');
	row.className = 'node-row';

	const left = document.createElement('div');
	left.style.flex = '1';
	const nameLabel = document.createElement('label');
	nameLabel.textContent = required ? 'Name (required)' : 'Name';
	const nameInput = document.createElement('input');
	nameInput.className = 'node-name';
	nameInput.type = 'text';
	nameInput.placeholder = 'e.g. Apples';
	nameInput.value = name;
	if (required) nameInput.required = true;
	left.appendChild(nameLabel);
	left.appendChild(nameInput);

	const right = document.createElement('div');
	right.style.width = '110px';
	const valLabel = document.createElement('label');
	valLabel.textContent = required ? 'Value (required)' : 'Value';
	const valInput = document.createElement('input');
	valInput.className = 'node-value';
	valInput.type = 'number';
	valInput.step = 'any';
	valInput.placeholder = 'e.g. 400';
	valInput.value = value === undefined || value === null ? '' : value;
	if (required) valInput.required = true;
	right.appendChild(valLabel);
	right.appendChild(valInput);

	row.appendChild(left);
	row.appendChild(right);
	return row;
}

document.addEventListener('DOMContentLoaded', () => {
	const addBtn = document.getElementById('add-node-btn');
	const nodesContainer = document.getElementById('nodes-container');


	addBtn.addEventListener('click', () => {
		const row = makeNodeRow('', '', false);
		nodesContainer.appendChild(row);
	});
});

// Update parseInputs to read dynamic rows
function parseInputs() {
	const total = parseFloat(document.getElementById('total').value);
	if (!Number.isFinite(total) || total <= 0) {
		throw new Error('Total must be a positive number');
	}

	const title = document.getElementById('treemap-title').value.trim();
	if (!title) {
		title = "My Dream Budget";
	}

	const container = document.getElementById('nodes-container');
	const rows = container.querySelectorAll('.node-row');
	const nodes = [];

	rows.forEach((r, idx) => {
		const name = (r.querySelector('.node-name').value || '').trim();
		const rawVal = r.querySelector('.node-value').value;
		const val = rawVal === '' ? NaN : parseFloat(rawVal);
		if (Number.isFinite(val) && val > 0) {
			nodes.push({name: name || ('Value ' + (idx + 1)), value: val});
		}
	});

	if (nodes.length === 0) {
		throw new Error('Enter at least one node value.');
	}

	return {title, total, nodes};
}
