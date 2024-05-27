function breadthFirstSearch(graph, startVertex) {
  const queue = [startVertex];
  const visited = { [startVertex]: true };
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();
    result.push(vertex);

    graph.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
}

// Exemplo de uso:
const graphBFS = new Graph();
graphBFS.addVertex("A");
graphBFS.addVertex("B");
graphBFS.addVertex("C");
graphBFS.addEdge("A", "B");
graphBFS.addEdge("A", "C");
console.log(breadthFirstSearch(graphBFS, "A")); // ["A", "B", "C"]
