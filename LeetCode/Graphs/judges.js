var findJudge = function(N, trust) {
    if (N === 1) return 1;
    let list = {};
    for (let pair of trust) {
        [truster, trustee] = pair;
        if (!list[truster]) list[truster] = [0, 0];
        if (!list[trustee]) list[trustee] = [0, 0];
        list[truster][0]++;
        list[trustee][1]++;
    }
    console.log(list)
    let entries = Object.entries(list);
    for (const [node, info] of entries){
        if (info[0] === 0 && info[1] === N - 1){
            return node;
        }
    }
    return -1;
};

//Okay so this is a directed graph problem.
//So my adjacency list would just add one edge per pair going one way
//If we make an adjacency list, it will be super clear who the judge is
//Because they will have 0 edges and they will be in every other node's edge array.
//But....it would be best if i solved this without an adj. list...
//I could iterate through the pairs and keep track of how many people each person trusts
//and how many people trust them
//and then at the end, find the node that looks like [0, N-1]

//This did quite badly in terms of speed AND space, so I will look at other solutions.