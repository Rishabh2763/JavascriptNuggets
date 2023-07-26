//  javascript Nuggets

// async must be present,always returns a promise
// await waits till promise is settled 
// error handling - try/catch block

const users=[
  {userId:1, name: 'john'},
  {userId:2, name: 'Susan'},
  {userId:3, name: 'anna'},
]

const articles=[
  {userId:1 , articles: ['one', 'two', 'three'] },
  {userId:2 , articles: ['four', 'five'] },
  {userId:3 , articles: ['six', 'seven', 'eight','nine'] },
]

function getUser(name){
  return new Promise((resolve,reject)=>{
    const user=users.find((user)=>user.name===name)
    if(user){
      return resolve(user)
    } else{
      reject(`No such user with name: ${name}`)
    }
  })
}



