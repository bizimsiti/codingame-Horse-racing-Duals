/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const arr=[];
const index=[];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    arr[i] = pi;
   
}

     arr.sort(function(a,b){
    return b-a;
});
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


for(let i =0;i<arr.length-1;i++){
    index[i]= arr[i]-arr[i+1];
}
index.sort(function(a,b){
    return a-b;
});

console.log(index[0])
