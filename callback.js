function makeUpperCase(value){
  console.log(value.toUpperCase());
}
makeUpperCase('peter');


function reverseString(value){
  console.log(value.split('').reverse().join(''));
}


function handleName(name,cb){
  const fullName=`${name} smith`;
  cb(fullName);
}

handleName('Peter',makeUpperCase);
handleName('Peter',reverseString);
handleName('Rishabh',(value)=>{
  console.log(value);
})


