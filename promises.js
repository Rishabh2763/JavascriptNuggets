// const promise=new Promise((resolve,reject)=>{
//   // resolve('promise is resolved')
//   reject('there was an error');
// })

// console.log(promise);

// promise.then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err);
// })



// const val=prompt("enter random number");

// const promise=new Promise((resolve,reject)=>{
//   const random=Math.floor(Math.random*3);
//   if(random===val){
//     resolve('you guessed correctly');
//   }
//   else{
//     reject('you guessed incorrectly');
//   }

// })


// promise.then((data)=>{
//   console.log(data);

// }).catch((err)=>{
//   console.log(err);
// })





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a random number: ', (val) => {
  const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    if (random === parseInt(val)) {
      resolve('You guessed correctly');
    } else {
      reject('You guessed incorrectly');
    }
  });

  promise
    .then((data) => {
      console.log(data);
      rl.close();
    })
    .catch((err) => {
      console.log(err);
      rl.close();
    });
});
