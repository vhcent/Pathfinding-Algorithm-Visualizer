export function getNeighbors(currentNode, grid) {
    const neighbors = [];
    const column = currentNode.column;
    const row = currentNode.row;

    if(row > 0) {
        if(grid[row-1][column].isVisited === false) neighbors.push(grid[row-1][column]);
    }
    if(row < grid.length-1) {
        if(grid[row+1][column].isVisited === false) neighbors.push(grid[row+1][column]);
    }
    if (column > 0) {
        if(grid[row][column-1].isVisited === false) neighbors.push(grid[row][column-1]);
    }
    if(column < grid[0].length - 1) {
        if(grid[row][column+1].isVisited === false) neighbors.push(grid[row][column+1]);
    }

    return neighbors;
}

export function sortByDistance(nodes) {
    nodes.sort((A, B) => A.distance - B.distance);
}