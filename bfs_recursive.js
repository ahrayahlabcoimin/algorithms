import {strict as assert} from 'node:assert';

const edges = [[1,2],[1,3],[1,4],[2,5],[2,6],[4,7],[4,8],[5,9],[5,10],[7,11],[7,12]]

function createNode(nodes, id) {
	if (!nodes[id]) {
		nodes[id] = {
			id,
			children: []
		}
	}
	return nodes[id];
}

function addChildNode(parentNode, childNode) {
	parentNode.children.push(childNode);
}

function createTree(edges) {
	const nodes = {};
	const roots = {};
	for (let [parentId, childId] of edges) {
		if (roots[parentId] == null || roots[parentId] !== false) {
			roots[parentId] = true;
		}
		if (roots[childId] == null || roots[childId] === true) {
			roots[childId] = false;
		}
		const childNode = createNode(nodes, childId)
		const parentNode = createNode(nodes, parentId)
		addChildNode(parentNode, childNode)
	}
	let root = null;
	for(let [id, isRoot] of Object.entries(roots)) {
		if (isRoot) {
			root = nodes[id];
		}
	}
	return root;
}
const tree = createTree(edges);
assert.equal(tree.id, 1)
assert.deepEqual(tree.children.map((node) => node.id),[2,3,4])
