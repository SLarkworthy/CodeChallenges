//sum the even numbers between two given numbers

function sumEvenNumsInRange(start, end) {
    //calculate first and last number that would be summed
    const realStart = start + (start % 2);
    const realEnd = end - (end % 2);
  
    //calculate the number of values to be summed
    const numsSummed = (realEnd - realStart) / 2 + 1;
    //calculate the average num to be summed
    const averageNum = (realStart + realEnd) / 2;
  
    return numsSummed * averageNum;
  }

  //I saw people talking about this on linkedin
  //but only posting linear solutions
  //so I wrote this constant time solution with extra notes to explain