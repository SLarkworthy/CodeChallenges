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
    let i = 0;
   
    console.log(count);
}