//Here is my initial solution, which is quadratic time.
//It did time out for a few of the test cases, so I will keep trying to optimize it.

function minimumBribes(q) {
    let count = 0;
    for (let j=0; j < q.length; j++){
        let chaos = q[j] - j - 1;
        if (chaos > 2) return console.log("Too chaotic");
        for (let i = j + 1; i < q.length; i++) {
            if (q[j] > q[i]) count++;
        }
    }
    console.log(count);
}

//so numbers can be more than two HIGHER than their index, but not more than two lower than their index
//or else they have bribed more than one person
//so if we start from the end of the array instead of the beginning and iterate backwards
//we only have to check for higher numbers up until a certain index
//so lets say we are looking at the number 4
//the smallest larger number, which is the one that can be the farthest forward, is 5
//and 5 can be where 3 is supposed to be, aka index 2.
//so we search for larger numbers until we hit index q[i] - 2 OR ZERO if this is negative.

function minimumBribes(q) {
    let count = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        let chaos = q[i] - i - 1;
        if (chaos > 2) return console.log("Too chaotic");
        const index = Math.max(0, q[i] - 2);
        for (let j = i - 1; j >= index; j--) {
            if (q[j] > q[i]) count++;
        }
    }   
    console.log(count);
}

//Just by stopping at the index variable instead of the end of the array, we are looking at far fewer numbers
//and now passed all test cases with no timeouts!