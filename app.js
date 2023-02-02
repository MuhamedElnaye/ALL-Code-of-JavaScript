/*167-
//Note You can use [Alias] by it you Can change the name of import modules
// //by using [oldName as newName]
// import { a, arr, sayHello as say } from "./test.js";
// console.log(a);
// console.log(arr);
// console.log(say());
 */
/*168-//Note the ALias Export to Can  access about it
//Note you should Write the [export default] after import direct and [,]
// import Muhamed, { a, array as orr, sayHello as say } from "./test.js";
// console.log(a);
// console.log(orr); //you Can Do Alias to expert Alias
// console.log(say());
// //you can calling it by any name you Write it After Import until if you write it [as anonymuse function ]
// // console.log(sayWhy());
// console.log(Muhamed());
// // console.log(sayWhen());Error

// //you Can do Import For All expert from another paeg
// //Note All Any Name you Want To Write It
import * as All from "./test.js";
console.log(All); //Module Contain all Export from test.js page
console.log(All.a); //6
console.log(All.array); //[1, 23, 3, 4]
console.log(All.sayHello()); //Hello in the Import page
console.log(All.default()); //Why You Do this the default Export
 */
