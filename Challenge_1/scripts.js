// firstName = 'John';
// age = 35;
// hobby = 'Coding';

// // const logTwice = () => {
// //   console(parameter)
// //   console(parameter)
// // }

// const logTwice = () => {
//   console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
// }

// logTwice()
// logTwice()






// const firstName = () => 'John' ;
// const age = () => '35';
// const hobby = () => 'Coding';

// const logTwice =   
//   console.log(`Hello, ${firstName()} (${age()}). I love ${hobby()}!`)
//   console.log(`Hello, ${firstName()} (${age()}). I love ${hobby()}!`)




//   console.log(`Hello, ${firstName()} (${age()}). I love ${hobby()}!`)



const firstName = 'John';
const age = 35;
const hobby = 'Coding';
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};
function callHobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}
callHobby();