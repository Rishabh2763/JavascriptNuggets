const val=prompt("enter random number");

const promise=new Promise((resolve,reject)=>{
  const random=Math.floor(Math.random*3);
  if(random===val){
    resolve('you guessed correctly');
  }
  else{
    reject('you guessed incorrectly');
  }

})


promise.then((data)=>{
  console.log(data);

}).catch((err)=>{
  console.log(err);
})