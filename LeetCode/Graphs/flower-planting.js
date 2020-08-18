var gardenNoAdj = function(N, paths) {
    let flowerAnswer = [];
    let adjacencyList = {};
    const flowers = [1, 2, 3, 4];
    for (let path of paths) {
        const [to, from] = path;
        if (!adjacencyList[to]) adjacencyList[to] = [];
        if (!adjacencyList[from]) adjacencyList[from] = [];
        adjacencyList[to].push(from);
        adjacencyList[from].push(to);
    }
    for (let i = 1; i <= N; i++) {
        let neighbors = adjacencyList[i];
        if (!neighbors) {
            flowerAnswer[i-1] = 1;
        } else {
        let neighborFlowers = neighbors.map(neighbor => flowerAnswer[neighbor-1]);
        for (let j = 1; j <= 4; j++) {
            if (!neighborFlowers.includes(j)){
                flowerAnswer[i-1] = j;
                break;
            }
        }
        }
    }
    return flowerAnswer;
};

//I am trying this slow and steady because this is my first try at a graph problem
//We first want to take paths and make an adjacency list.
//Time-wise and space-wise, this isn't great.
//However it is my first attempt at a graph problem and I'm happy to have solved it.