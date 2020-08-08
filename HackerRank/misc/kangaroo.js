// You are choreographing a circus show with various animals. 
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.

// Function Description

// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2
// Input Format

// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

function kangaroo(x1, v1, x2, v2) {
    let prevDistance = -Infinity;
    let currentDistance = x1 - x2;
    while (Math.abs(prevDistance) - Math.abs(currentDistance) > 0) {
        if (currentDistance === 0) return "YES";
        x1 += v1;
        x2 += v2;
        prevDistance = currentDistance;
        currentDistance = x1 - x2;
    }
    return "NO";
}

//alternatively, the Math Way:

function kangaroo(x1, v1, x2, v2) {
    let prevDistance = -Infinity;
    let currentDistance = x1 - x2;
    while (Math.abs(prevDistance) - Math.abs(currentDistance) > 0) {
        if (currentDistance === 0) return "YES";
        x1 += v1;
        x2 += v2;
        prevDistance = currentDistance;
        currentDistance = x1 - x2;
    }
    return "NO";
}

function kangarooMath(x1, v1, x2, v2) {
    if (v1 === v2) return "NO";
    let result = (x1-x2) % (v2-v1);
    if( result === 0){
        return "YES";
    }
    return "NO";
}
