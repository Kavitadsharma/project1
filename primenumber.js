//Problem 1 : Check whether a number is Prime or not
for (let i=1;i<=10;i++){
  let count_factor=1;
for(let j=1;j<=10;j++){
  if(i%j==0){
    count_factor++;
   
  }
}

 if(count_factor==8){
  console.log(i,"is prime");
 }
  else{
    console.log(i,"is not prime");
  }
}