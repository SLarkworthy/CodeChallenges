// Write a class RecentCounter to count recent requests.

// It has only one method: ping(int t), where t represents some time in milliseconds.

// Return the number of pings that have been made from 3000 milliseconds ago until now.

// Any ping with time in [t - 3000, t] will count, including the current ping.

// It is guaranteed that every call to ping uses a strictly larger value of t than before.

class RecentCounter {
    constructor(){
        this.pings = [];
    }
    
    ping(t){
        this.pings.push(t);
        while (this.pings[0] < t - 3000) this.pings.shift();
        return this.pings.length;
    }
}

//It would be more time-efficient to use a true queue, but as js does not have one built in, I have used an arr here.