/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const d=new Date();
    let start=d.getTime();
    sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;

    }
    const b=new Date();
    let last=b.getTime();
    let total=last-start;
    console.log(start);
    console.log(last);
    console.log(total/1000+"sec");
}

calculateTime(1000000000);
