/* for (let i = 0; i < 4; i++) {
  document.write("**********<br>");
}
document.write("#".repeat(40));
for (let i = 0; i < 6; i++) {
  //   document.write(`${"*".repeat(i)} <br>`);
  document.write("*".repeat(i) + "<br>");
}
document.write("#".repeat(40));
for (let i = 5; i > 0; i--) {
  document.write("<br>" + "*".repeat(i));
}
document.write("<br>" + "#".repeat(40));
for (let i = 0; i < 6; i++) {
  document.write("<br>" + "&nbsp".repeat() );
//   for (let j=0;)
} */
//########################################################################################
/* // let a = [];
// let b = [];
// console.log(`The a is ${a}`);
// console.log(`The b is ${b}`);
// console.log(a == b); //false
// console.log(a === b); //false
//########################################################################################
// console.log(typeof a == typeof b); //true
// console.log(typeof a === typeof b); //true */
/* //BOM Chalang
// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");

// let tasks = []; //for storeing tasks

// fungetDataFromLocal();

// //Add task
// submit.onclick = function () {
//   if (input.value !== "") {
//     funaddToArr(input.value);
//     input.value = "";
//   }
// };

// // Click On Task Element
// tasksDiv.addEventListener("click", (e) => {
//   //delete button
//   if (e.target.classList.contains("del")) {
//     //remove from local storage
//     fundeleteTask(e.target.parentElement.getAttribute("data-id"));
//     e.target.parentElement.remove();
//   }
//   // on task
//   if (e.target.classList.contains("task")) {
//     // Toggle Completed For The Task
//     funtoggleStatus(e.target.getAttribute("data-id"));
//     e.target.classList.toggle("done");
//   }
// });

// function funaddToArr(taskText) {
//   //task info
//   let task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };
//   tasks.push(task);
//   funaddToPage(tasks);
//   funaddToLocal(tasks);
// }

// function funaddToPage(tasks) {
//   tasksDiv.innerHTML = "";
//   tasks.forEach((task) => {
//     let div = document.createElement("div");
//     div.className = "task";
//     if (task.completed) div.className = "task done";

//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     //delete button
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("Delete"));
//     div.appendChild(span);
//     tasksDiv.appendChild(div);
//   });
// }

// function funaddToLocal(tasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function fungetDataFromLocal() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     tasks = JSON.parse(data);
//     funaddToPage(tasks);
//   }
// }

// function fundeleteTask(taskId) {
//   tasks = tasks.filter((task) => task.id != taskId);
//   funaddToLocal(tasks);
// }

// function funtoggleStatus(taskId) {
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id == taskId) {
//       tasks[i].completed == false
//         ? (tasks[i].completed = true)
//         : (tasks[i].completed = false);
//     }
//   }
//   funaddToLocal(tasks);
// } */
//########################################################################################
/* 123-Set_Data_Types_And_Methods
    ->set:
      --syntax: new set (iterable )
      --it's an [Object] using to store uniqueData  only and don't repeat the data.
      --Can't access by index
    -size
    -Methods that using in it
    -add()
    -delete()
    -clear()
    -has
EX:
  let myarrey = [1, 1, 1, 2, 3, 4];
  // let myuniqueData = new Set(myarrey);
  // let myuniqueData = new Set([1, 1, 1, 2, 3, 4]);
  
  //1-[Add] value
  // let myuniqueData = new Set().add(1).add(333).add(44).add(33);// add vlues to the set
  //Another way add
  //Note if you rebeat any value one of them will deleted and stay only one
  let myuniqueData = new Set();
  myuniqueData.add(22).add(33).add(44);
  myuniqueData.add("aa").add("bb");
  
  console.log(myarrey); //[1, 1, 1, 2, 3, 4]
  console.log(myuniqueData); //[1, 2, 3, 4];
  console.log(myuniqueData.size); //4 [size like length in the array]
  // console.log(myarrey[0]); //1
  // console.log(myuniqueData[0]); //undefined you can't retrun by index like array
  
  //2-[Delete]one by one
  //Note the delete =>is return [true] in case the value you want to delete it [found ]or
  // return [false] in case the value you want to delete it [not found]
  console.log(myuniqueData.delete("bb")); //true meaing it's found
  myuniqueData.delete("bb");
  console.log(myuniqueData);
  console.log(myuniqueData.size);
  
  //3-has using to sure are this value found our not
  console.log(myuniqueData.has("aa")); //true
  console.log(myuniqueData.has("AA")); //false
  console.log(myuniqueData.has("AA".toLowerCase())); //true
  
  //4-clear using to dalete all values
  
  myuniqueData.clear();
  console.log(myuniqueData);
  console.log(myuniqueData.size);
*/
/* 124-Set_vs_WeakSet_And_Garbage_Collector
 Set vs WeakSet
  -the Weakset is weak,
     meaning referances to [Object] in a weakset are held weakly.
     if no other references to an Object stored in the weakset Exist.
     those Objects can be garbage collected.
EX:
//1-Type of data that will accept
console.log(mySet);
  //2-size:
  console.log(mySet.size);
  
  //1-Type of data
  //-Set ->can store any data values
  //-weakSet ->collection of Objects onle
  
  //  2-size:
  //    -set -> have size property
  //    -weakset ->Don't have size property
  //    EX:
  console.log(mySet.size);
  
     3-key ,value ,entries
        -set-> have keys,values,Entries
        -weakset don't have clear ,keys,values,Entries
  EX:
  let mySet = new Set([1, 1, 1, 2, 3, "A"]);

  let iterator = mySet.keys();
  console.log(iterator); //SetIterator {1, 2, 3, 'A'}
  console.log(iterator.next()); //{value: 1, done: false} [done false] as ther are value after this
  console.log(iterator.next().value); //2
  console.log(iterator.next().value); //3
  console.log(iterator.next().value); //A
  console.log(iterator.next()); //{value: undefined, done: true} [done is true] as not there another value
  //  4-forEach:
  //    -set ->you can use forEach
  //    -weakset ->you can not  use forEach
  mySet.forEach((el) => {
    console.log(el);
  });
  console.log("#".repeat(20));
  //weekSet don't accept any type of Data else [Object]
  // let wSet = new WeakSet([1, 1, 1, 2, 3, 4, "A"]);//error
  let wSet = new WeakSet([{ A: 1, B: 2 }]); //Object
  console.log(wSet);
  // console.log(typeof []);Object
 */
/* 125-Map_Data_Type_Vs_Object
    -syntax Map: new Map(Iterable with key/value)
    -Map vs Object

    1-key
      --Map ->Don't Contain  Key by default
      --Object has default key[Note you can create object with no default key]
          let myEmptyObj = Object.create(null); //with no default key
    2-type of Data
      --Map->key can be any thing[function,Object,number,boolean,any primitve data type]
      --Object->string or symbol
    3-Ordering
      --Map->ordeing by insertion
      --Object->Not 100% Untill Now
    4-size
      --MAp->Get item by size
      --Object->Get item  Manualy
    5-Loop:
      --map->can be directly iterated[loop]
      --Object-> Not mad directily and need to use Object.keys() and so on
    6-removing and Add Performance
      --Map->better Performance when add or remove
      --Object->Low performance when compering to map
EX:
  //1-key
  let myMap = new Map();
  let myObj = {};
  let myEmptyObj = Object.create(null); //with no default key
  console.log(myObj);
  console.log(myEmptyObj); //Empty Object
  console.log(myMap);
  
  //2-type of Data
  let myNewObject = {
    //in this case will return the last one of two[10]
    10: "number",
    10: "string",
  };
  
  console.log(myNewObject[10]); //string
  
  let myNewMap = new Map();
  // myNewMap.set(key,Value)
  myNewMap.set(10, "Number"); //add this to myNewMap
  myNewMap.set("10", "String");
  myNewMap.set(true, "Boolean");
  myNewMap.set({ A: 1, B: 2 }, "Object");
  myNewMap.set(function DosamThing() {}, "function");
  console.log(myNewMap.get(10)); //"Number"
  console.log(myNewMap.get("10")); //"Sring"
  
  console.log(myNewObject); //{10: 'string'} Note only one string
  console.log(myNewMap); //Map(2) {10 => 'Number', '10' => 'String'}
    */
/* 126-Map Method
  -set(key,Value ) add element in the map
  -get(Key) to return the value
  -delete
  -clear
  -has
EX:
  let myMap = new Map();
  //set(key,value) ->Add element to the map
  // myMap = new Map([
  //   [key,value]
  // ]);
  myMap = new Map([
    [4, "Gamal"],
    ["a", "CSS"],
  ]);
  //set() another way
  myMap.set(1, "Muhamed");
  myMap.set(2, "Ali");
  myMap.set(3, "Omer");
  myMap.set("Name", "Muh");
  
  console.log(myMap); //Map(4) {4 => 'Gamal', 'a' => 'CSS',1 => 'Muhamed', 2 => 'Ali', 3 => 'Omer', 'Name' => 'Muh'}
  //get(key)
  console.log(myMap.get(2)); //Ali
  console.log(myMap.get("Name")); //Muh
  //delete(key) one by one
  // myMap.delete("a");
  console.log(myMap.delete("a")); //iffound the element and  delete it will return [true] if Not return [false]
  //clear() Remove all data from the Map
  // myMap.clear();
  //has(key) return true if found not if not found
  console.log(myMap.has("Name")); //true
  console.log(myMap.has("NN")); //false
  //size
  console.log(myMap.size);
*/
/* 127-Map Vs WeakMap
  WeakMap-> allow to do [garbage collection] for the memory
    -->Type of Data
        Map -> Key can be nay thing[Number,boolean,string,array,Object,....]
        weakMap -> Key can be Object Only
EX:
  let mapUser = { Name: "Muhamed" };
  let myMAp = new Map([[mapUser, "Object Value"]]);
  myMAp.set(mapUser, "Object Value1");
  mapUser = null; //Override Reference-> meaning it's stored only in [myMap] and Not have any refernce stored place
  //Note in [Map] Don't Do the [garbage collection] if not there a refrence
  console.log(myMAp);
  console.log("#".repeat(20));
  
  let wmUser = { Name: "Muhamed" };
  //  let myWM=new WeakMap(only Object)
  let myWM = new WeakMap();
  myWM.set(wmUser, "Object Value");
  myWM = null; //Override Reference->
  //Note in [weakMap] will Do the [garbage collection] if not there a refrence
  
  console.log(myWM); //null because he do a [garbage collection] as no refrence stroge for the [myWM]
*/
/* 128-[Array] Array.from_Method
   -Array.from() ->it's using to convert any thing you want to array
    -Array.from(iterable,MapFunction[Meaning this function conceder before it Mapfun ],This)
EX:
  console.log(Array.from("Muhamed"));
  //by anoniumuse Function
   console.log(
    Array.from("12345", function (ele){
      return parseInt(ele) + parseInt(ele); //[2, 4, 6, 8, 10] //doing analyse to data and retrun Intger number only
      //convert string to Number
      // return +ele + +ele;//[2, 4, 6, 8, 10]
      // return Number(ele) + Number(ele); //[2, 4, 6, 8, 10]
      // console.log(parseFloat("1.3Muhamed"));//1.3
      // console.log(parseInt("1.3Muhamed"));//1
      // console.log(parseFloat("Muhamed1.1"));//NaN
      // console.log(parseFloat("Muhamed1.1muhwshs"));//NaN
    })
  );
  
  //Another Way using arrow Function we should delete[keyword (function),{},return]
  console.log(Array.from("12345", (ele) => parseInt(ele) + parseInt(ele)));
  let myArray = [1, 1, 1, 2, 3, 4];
  // let mystring = ["Muhamed", "Ali"];
  let mystring = "muhamed";
  
  //set
  let mySetNm = new Set(myArray); //it's return new array with unique value
  let mySetstr = new Set(mystring); //it's return new array with unique value
  
  console.log(mySetNm); //[1,2,3,4]
  //set() and form() line by line
  console.log(mySetstr); //{'m', 'u', 'h', 'a', 'e', 'd'} // note the practies{} amd remove repeated
  console.log(Array.from(mySetstr)); //['m', 'u', 'h', 'a', 'e', 'd']//note the practies{}
  
  //You can do set() and Array.form() in one line
  console.log("#".repeat(20));
  //[...] calling spreat operator
  console.log([...new Set(mystring)]); //['m', 'u', 'h', 'a', 'e', 'd'] //set and form in one line
  console.log([new Set(mystring)]); //0:[Set(6) {'m', 'u', 'h', 'a', 'e','d'}]
  
  //using Arguments
  function testArgumnet() {
    return arguments;
  }
  console.log(testArgumnet("Muhamed", "El-Nayed", "Mahfouz"));
  //Arguments(3) ['Muhamed', 'El-Nayed', 'Mhfouz', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  function ArrayFrom() {
    return Array.from(arguments);
  }
  console.log(ArrayFrom("Muhamed", "El-Nayed", "Mahfouz")); //['Muhamed', 'El-Nayed', 'Mhfouz']
*/
/* 129-[Array] yourArray.copyWithin_Method
  yuorArray.copyWithin(target,start[optional],end[optional])
    -Note very important the number of copy take from the main Array the numper of place
    -Note the Array.copyWithin() return a new array [with the same length of the main Array]
      and if increment about that will removed from the end of the copy
    -target[Number(index)] ->meaning the place that you will set the copy in it
    -start [Number(index)]->the place that will start the copy from it
      if not found,it  will start from the index [0] in the array
    -end [Number(index)]->the place where it will end it's copy
      if not found will go to the end of the Array.
EX:
  let myArray = [10, 20, 30, 40, 50, "A", "B"];
  // console.log(myArray.copyWithin(2)); //[10, 20, 10, 20, 30, 40, 50]
  //target the place that will set copy in it
  //start not found copy  will start from index [0] , copy end not found  will go to end of array
  // console.log(myArray.copyWithin(4, 6)); //[10, 20, 30, 40, "B", "A", "B"]
  //negative value
  // console.log(myArray.copyWithin(4, -1)); //[10, 20, 30, 40, "B", "A", "B"]
  
  // console.log(myArray.copyWithin(1, -2)); //[10, "A", "B", 40, "B", "A", "B"]
  //[10, 50, "A", "B", 50, "A", "B"]
  // console.log(myArray.copyWithin(1, -3)); //[10, 50, "A", "B", 50, "A", "B"]
  //[10, "A", 30, 40, 50, "A", "B"]
  console.log(myArray.copyWithin(1, -2, -1)); //[10, "A", 30, 40, 50, "A", "B"]
  //[1] is  the target our the place that will set the copy in it
  //[-2] the start from the end of the Array
  //[-1] the end from the end of the Array

 */
/* 130-[Array] yourArray.some_Method
    -Syntax[Only one element should accept the condtion]
      ->yourarray.som(callbackfun(elemnt,index,Array),this argument)
        -callbackfun:the function that will run on every element in given array
        -Element-> the currnet element that we do Loop about it
        -index ->the index of the currnet element
        -Array the current arrey we are dealing with it
        -this Argument ->value to use as [this] when Execluting callbackfun
EX:
  let nums = [1, 2, , 15, 3, 4, 5, 6, 7, 8];

  // let newArrwithSome = nums.some(function (ele) {
  //   console.log("test"); // in this case will return only [6 test]
  //   // because if it arrive to the condtion will stop and return boolean Value
  //   // return ele < 6;//will return [one test] only
  //   return ele > 6; //[7 test]
  // });
  
  //using This Argument
  let myNum = 6;
  let newArrwithSome = nums.some(function (ele) {
    console.log("test");
    return ele > this; //Note this follback [myNum] that writing in the ThisArrgume from syntax
  }, myNum);
  
  // //Arrow function
  // let newArrwithSome = nums.some((ele) => ele > 6);
  
  function checkValue(arr, valu) {
    return arr.some(function (e) {
      return e === valu;
    });
  }
  
  console.log(newArrwithSome);
  console.log("your value available is: " + checkValue(nums, 30)); //false not found this value
  console.log("your value available is: " + checkValue(nums, 3)); //true found this value
  
  let range = {
    min: 10,
    max: 20,
  };
  
  let checkNumberInRange = nums.some(function (ele) {
    console.log(this.min);
    console.log(this.max);
    return ele >= this.min && ele <= this.max;
    //meaing are there element in arr[nums] contain element between this range [min,max]
  }, range);
  
  console.log(checkNumberInRange);
 */
/* 131-[Array] yourArray.every_Method
    -Syntax[All element should accep the condtion]
      ->yourarray.every(callbackfun(elemnt,index,Array),this argument)
        -callbackfun:the function that will run on every element in given array
        -Element-> the currnet element that we do Loop about it
        -index ->the index of the currnet element
        -Array the current arrey we are dealing with it
        -this Argument ->value to use as [this] when Execluting callbackfun
EX:
  const locations = {
    20: "place 1",
    30: "place 2",
    10: "place 3",
    40: "place 4",
  };
  
  let mainlocation = 15;
  // let myKeyLocation = Object.values(locations);//['place 3', 'place 1', 'place 2', 'place 4']
  let myKeyLocation = Object.keys(locations); //['10', '20', '30', '40']
  console.log(myKeyLocation);
  //Note return the Keys as string
  //convert string to number
  let myKeyLocationNumber = myKeyLocation.map((e) => +e);
  console.log(myKeyLocationNumber);
  
  let everyLocatio = myKeyLocation.every(function (ele) {
    //All element should be biger than the mainlocation if there one will return false
    return ele > this;
  }, mainlocation);
  
  console.log(everyLocatio); //false as 10 is less than mainlocation
*/
/* 132-Spread_Syntax_And_Use_Cases
    -spread operator -> three dots(...Iterable)
    -allow iterable to extract in place
EX:
  //1- Expand string and [concatination]
  console.log("Muhamed"); //Muhamed
  console.log(..."Muhamed"); //M u h a m e d
  console.log([..."Muhamed"]); //['M', 'u', 'h', 'a', 'm', 'e', 'd']
  
  let arrOne = [1, 2, 3];
  let arrTwo = [4, 5, 6];
  // let allArr = [arrOne, arrTwo];//[Array(3), Array(3)]
  // let allArr = [...arrOne, arrTwo];//[1, 2, 3, Array(3)];
  let allArr = [...arrOne, ...arrTwo]; //[1, 2, 3, 4,5,6];
  console.log(allArr);
  
  //2-Copy arreys
  let copyArr = [...arrOne];
  console.log(copyArr); //[1, 2, 3];
  
  //3-Push inside Array
  let myFrindes = ["Muhamed", "Ali", "Osama"];
  let newFrin = ["Omer", "Tarek"];
  
  myFrindes.push(...newFrin);
  console.log(myFrindes);
  
  //4-Use with Math Object
  let myNumbers = [10, 20, 1000, -199, 300];
  console.log(Math.max(...myNumbers)); //1000 you should write number
  
  //5-spread with Objects =>Merge objects
  let myobj1 = {
    a: 1,
    b: 2,
  };
  let myobj2 = {
    c: 3,
    d: 4,
  };
  // let fullObj = { myobj1, myobj2, e: 55 };//{myobj1: {}, myobj2: {}, e: 55}
  let fullObj = { ...myobj1, ...myobj2, e: 55 };//{a: 1, b: 2, c: 3, d: 4, e: 55}
  
  console.log(fullObj);
*/
/* 133-Map_And_Set_Challenge
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
// let myNewOb = new Set([...n1, ...n2]); //set{10, 30, 20}
// let myNewArray = Array.from(myNewOb); //[10, 30, 20]
// let copywith = myNewArray.copyWithin(1, 0, 1); //[10, 10, 20]
// let fullnNumber =
// Math.max(...copywith) * Math.min(...copywith) + Math.min(...copywith); //200
console.log(
  Math.max(...Array.from(new Set([...n1, ...n2])).copyWithin(1, 0, 1)) *
    Math.min(...Array.from(new Set([...n1, ...n2])).copyWithin(1, 0, 1)) +
    Math.min(...Array.from(new Set([...n1, ...n2])).copyWithin(1, 0, 1))
); //210

//Another solution :
// const arrOfFullLenght = [...n1, ...n2].length; //7
// const maxOfn1 = Math.max(...n1); //30
// console.log(arrOfFullLenght * maxOfn1);
console.log(Math.max(...n1) * [...n1, ...n2].length); //210

*/
/* 134-[Regular Expressions] Intro_And_What_Is_Regular_Expression
    -Email
    -IP
    -Phone
    -URL
 */
/* 135-[Regular Expressions] _Modifiers
    -match(pattern) search Method using to search and (regExpretion) return value +index
      -Matchs A string against a Regular EXpretion pattern
      -Return an[array] with the MAtches
      -Return [null] if no Match Is found

  -->Modifier(تحسين) using to modife the way of  Matching
     -syntax of Modifier
       -/pattern/modifier;
       -another Way: new RegEXp("pattern","modifier")
     -flags:Note You can do mor flag together
       ->i =>Meaning Case-insensitive[upper or small the Same]
       ->g =>Meaning glopal Match the all
       ->m=multiline
EX:
       let myString = "Yuor name is Muhamed muhamed";
  let regEXp = /muhamed/gim;
  // let regEXp = new RegExp("muhamed", "ig");
  console.log(myString.match(regEXp)); //22 before the Modifier
  //['muhamed', index: 22, input: 'Yuor name is Muhamed  muhamed', groups: undefined]
  console.log(myString.match(regEXp)); //13 after the Modifier
  //['Muhamed', index: 13, input: 'Yuor name is Muhamed  muhamed', groups: undefined]
  console.log(myString.match(regEXp)); //after ig flag ['Muhamed', 'muhamed']


*/
/* 136-[Regular Expressions] Ranges_Part_1
    Ranges part_1:
EX:
    //1-Character only->(X|Y)= X Or Y
    let tld = "Com Net Org Info Code IO";
    // let tldRa = /(org|info|io)/i;//['Org', 'Org', index: 8,
    // let tldRa = /(info|org|io)/i;//['Org', 'Org', index: 8,
    let tldRa = /(info|org|io)/gi; //['Org', 'Info', 'IO']
    console.log(tld.match(tldRa));
    
    //2-Number ->[0-9]=0 To 9
    let nums = "12345678910";
    // let numsRe = /[0-9]/; //['1', index: 0, input: the first num will find it
    let numsRe = /[0-3]/g; // ['1', '2', '3', '1', '0']
    console.log(nums.match(numsRe));
    
    let notNums = "12345678910";
    let notNumsRe = /[^0-3]/g; //(ماعدا الرينج من 0الي 3)['4', '5', '6', '7', '8', '9']
    console.log(notNums.match(notNumsRe));
    
    let specialCha = "!1@2#3$4%5^6&78910";
    let specialRe = /[^0-9]/g; //(ماعدا الرينج من 0الي 9)['!', '@', '#', '$', '%', '^', '&']
    console.log(specialCha.match(specialRe));
    
    let practice = "Os1 Os1Os Os2 Os8 OS8Os OS4Os OS6Os";
    // let practiceRe = /(os)[5-8](os)/gi;//['OS8Os', 'OS6Os']
    let practiceRe = /os[5-8]os/gi;//['OS8Os', 'OS6Os']
    console.log(practice.match(practiceRe));
    */
/* 137-[Regular Expressions] Ranges_Part_2
EX:
let myString = "AaBbcdefG123!234%^&*";

  //[a-z] Small
  let aTozsmall = /[a-z]/g; //['a', 'b', 'c', 'd', 'e', 'f']
  let NotaTozsmall = /[^a-z]/g; //['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
  console.log(myString.match(aTozsmall));
  console.log(myString.match(NotaTozsmall));

  //[A-Z] Capitel
  let AToZCabitel = /[A-Z]/g; // ['A', 'B', 'G']
  let NotAToZCabitel = /[^A-Z]/g; //['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
  console.log(myString.match(AToZCabitel));
  console.log(myString.match(NotAToZCabitel));

  //[abc] any character you want
  let aandcande = /[AcE]/gi; // ['A', 'a', 'c', 'e']
  let Notaandcande = /[^AcE]/gi; //['B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
  console.log(myString.match(aandcande));
  console.log(myString.match(Notaandcande));

  //All character capital and Small
  // let AllCharOn = /[A-Z]/gi; // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
  let AllCharOn = /[A-Za-z]/g; // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
  // let NotAllCharOn = /[^A-Z]/gi; //['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
  let NotAllCharOn = /[^A-Za-z]/g; //['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
  console.log(myString.match(AllCharOn));
  console.log(myString.match(NotAllCharOn));

  //specialsCharacter
  // let specialsCharacter = /[^A-Z0-9]/gi; //['!', '%', '^', '&', '*']
  // let specialsCharacter = /[^a-zA-Z0-9]/g; //['!', '%', '^', '&', '*']
  let specialsCharacter = /[^a-z^A-Z0-9]/g; //['!', '%','&', '*'] //[return allspciChar ماعدا "^"]
  console.log(myString.match(specialsCharacter));

*/
/* 138-[Regular Expressions] Character_Classes_Part_1
    Character Classes
    [.] =>Match all Character EXcept[Newline[\n] or other line Terminators]
    [\w]small   =>Match word Characters [a-z,A-Z,0-9,Underscore],
    [\W]Capitel =>Match reverse the small w all Except[a-z,A-Z,0-9,Underscore]
    [\d]small   =>MAtch digits from 0 to 9
    [\D]capital =>MAtch Non digits Character
    [\s]small   =>Match Whitespace Character
    [\S]Cpital  =>Match NonWhitespace Character
EX:
    let email = "\n_o-g.com 1@1.com o@@@g...com o@s.Org A@Y.Com A@Y.Net ";
    let validEmails = /\w@\w.(com|org|Net)/gi; //['1@1.com', 'o@s.Org', 'A@Y.Com', 'A@Y.Net']
    console.log(email.match(validEmails));
    //[.]
    let dot = /./g; //All Character Except \n
    // console.log(email.match(dot));/['_', 'o', '-', 'g', '.', 'c', 'o', 'm', ' ', '1',......
    console.log("#".repeat(20));
    //[\w]small w
    let wordw = /\w/g; //
    console.log(email.match(wordw)); //['_', 'o', 'g', 'c', 'o', 'm', '1', '1', 'c', 'o', 'm', 'o', 'g', 'c', 'o', 'm']
    console.log("#".repeat(20));
    //[\W]Capitel W
    let wordW = /\W/g; //
    console.log(email.match(wordW)); //['\n', '-', '.', ' ', '@', '.', ' ', '@', '@', '@', '.', '.', '.', ' ']
    console.log("#".repeat(20));
    //[\d]small d
    let numd = /\d/g; //
    console.log(email.match(numd)); //['1', '1']
    console.log("#".repeat(20));
    //[\D]Capitel D
    let NotnumD = /\D/g; //
    console.log(email.match(NotnumD)); //['\n', '_', 'o', '-', 'g', '.', 'c',.....every thing eXcept Number
    console.log("#".repeat(20));
    //[\s]
    let swhiteSpace = /\s/g; //
    console.log(email.match(swhiteSpace)); //['\n', ' ', ' ', ' '] Note it's conceder \n as Whitespace
    console.log("#".repeat(20));
    //[\s]
    let SwhiteSpace = /\S/g; //
    console.log(email.match(SwhiteSpace)); //['_', 'o', '-', 'g', '.', 'c', 'o', 'm', '1',.. every thing eXcept " "
    console.log("#".repeat(20));
*/
/* 139-[Regular Expressions] Character_Classes_Part_2
    [\b]small =>MAtches at the beginning or end of a word
    [\B]Capital =>MAtches Not  the beginning or end of a word
    
->Test Method:it's using with if condtion
    pattern.test(input) return [true or False]
EX:
    let names = "Muh 1spam 2Spam 3spam Spam4 spam5 Osama vvv ASpamO ";
  //[\b]small b
  // let beginEndb = /\bspam/gi; //['Spam','spam'] meaing the name that beginning with spam [Spam4,spam5]
  // let beginEndb = /spam\b/gi; //['spam','Spam','spam'] meaing the name that end with spam [1spam 2Spam 3spam]
  let re = /(\bspam|spam\b)/gi; //['spam', 'Spam', 'spam', 'Spam', 'spam'] meaing the name that beginning  and end with spam [1spam 2Spam 3spam Spam4 spam5]
  console.log(names.match(re)); //
  console.log("#".repeat(20));
  
  console.log(re.test(names)); //true
  console.log(/(\bspam|spam\b)/gi.test(names)); //true
  console.log(/(\bspam|spam\b)/gi.test("Muhamed")); //false
  console.log(/(\bspam|spam\b)/gi.test("!spamedcd")); //true
  console.log(/(\bspam|spam\b)/gi.test("edcspamedcd")); //false
 */
/* 140-[Regular Expressions] Quantifiers_Part_1
   Quantifiers =>it's using to can identifie the Quantaty[الاكميه]
  [N+] =>one  or more [there are one or more [num,charc,spchar,...]]
  [N*] =>zero or more [there are zero or more [num,charc,spchar,...]] or not found
  [N?] =>Zero or one  [there are zero  or one ] if this  \w found or not match with it
EX:
  let mails =
    "a@a.com AA@a.com o@nn.sa muh@gmail.com elz.@gmail.net ssss@mail.ru";
  // let re = /\w@\w.(com|ru)/g;//['a@a.com']
  // let re = /\w+@\w.(com|ru)/g; //['a@a.com', 'AA@a.com']
  // let re = /\w+@\w+.(com|ru)/g; //['a@a.com', 'AA@a.com', 'muh@gmail.com',''ssss@mail.ru']
  // let re = /\w+@\w+.\w+/g; //['a@a.com', 'AA@a.com', 'o@nn.sa', 'muh@gmail.com', 'ssss@mail.ru']
  // console.log(mails.match(re));
  let Nums = "0110 10 150 05120 0560 350 00 ";
  // let re = /0\d\d0/g; // ['0110', '0560']
  // let re = /0\d+0/g; //['0110', '05120', '0560']
  let re = /0\d*0/g; //['0110', '05120', '0560', '00'] meaing may by ther are [digits or more or no digit]
  // console.log(Nums.match(re));
  
  let urls = "https://google.com http://www.website.com http://webs.net web.com";
  // let urlRe = /https/gi;//['https']
  // let urlRe = /https?/gi; //['https','http'] if this character[s] found or not match with it
  //note you should write the excep [\] to avoid the error
  // let urlRe = /https?:\/\//gi; //['https://', 'http://']
  // let urlRe = /https?:\/\/(www.)/gi; //['http://www.']
  // let urlRe = /https?:\/\/(www.)?/gi; //['https://', 'http://www.']
  // let urlRe = /https?:\/\/(www.)?\w+/gi; //['https://google', 'http://www.website']
  // let urlRe = /https?:\/\/(www.)?\w+.\w+/gi; //['https://google.com', 'http://www.website.com', 'http://webs.net']
  //note if someone Write the websiteName.com onle
  let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/gi; //['https://google.com', 'http://www.website.com', 'http://webs.net', 'web.com']
  
  console.log(urls.match(urlRe));
*/
/* 141-[Regular Expressions] Quantifiers_Part_2
  n{X}   =>number of the character class
  n{X,y} =>range  of the character class
  n{X,}  =>At least X of  the character class
EX:
  let serials = "S100S S3000S s50000s s950000s ss";
  // let srRex = /s\d\d\ds/gi;//['S100S']
  // let srRex = /s\d+s/gi; //['S100S', 'S3000S', 's50000s', 's950000s']
  // let srRex = /s\d*s/gi; //['S100S', 'S3000S', 's50000s', 's950000s','ss']
  // let srRex = /s\d{3}s/gi; //['S100S']
  // let srRex = /s\d{4}s/gi; //['S3000S'] expretion that contain s,four digits ,and s
  // let srRex = /s\d{3,5}s/gi; //['S100S', 'S3000S', 's50000s'] expretion that contain s,three (TO) five digits,and s
  let srRex = /s\d{4,}s/gi; //['S3000S', 's50000s', 's950000s'] expretion that contain s,at least 4 and  to the end,and s
  console.log(serials.match(srRex));
*/
/* 142-[Regular Expressions] Quantifiers_Part_3
  Quanitfire
  [$] =>End with something
  [^] =>start with something
  [?=] =>Follow by something
  [?!] =>Not Follow by something
EX:
  let myString = "We love Programming";
  let names = "1OsamaZ 2AhmedZ 3Mohammed 4Moustafaz 5gamalz";
  // console.log(/ing$/gi.test(myString)); //true
  // console.log(/lz$/gi.test(names)); //true
  // console.log(/lza$/gi.test(names)); //false
  console.log(/^we/gi.test(myString)); //true
  console.log(/^1/gi.test(names)); //true
  console.log(/^\d/gi.test(names)); //true are this start with digit
  console.log(names.match(/\d\w{5}(?=z)/gi)); //['1Osama', '2Ahmed', '5gamal'] are this start with digit
  console.log(names.match(/\d\w{8}(?=z)/gi)); //['4Moustafa'] are this start with digit
  console.log(names.match(/\d\w{8}(?!z)/gi)); //['3Mohammed'] are this start with digit
  
*/
/* 143-[Regular Expressions] Replace_With_Pattern
    -Replace:return the first value and replace it
      syntax:string.replace("searchValue the value that will replaced","the new value tht set")
    -ReplaceAll : replace All
EX
    const txt = "We love Programming and @ because @ is Amizing";
  console.log(txt.replace("@", "JavaScript")); //Replace only the first one
  //We love Programming and JavaScript because @ is Amizing
  console.log(txt.replaceAll("@", "JavaScript")); //replace all
  //We love Programming and JavaScript because JavaScript is Amizing
  //using regulare Exppretion
  console.log(txt.replaceAll(/@/gi, "JavaScript"));

*/
/* 144-[Regular Expressions] Form_Validation
EX:
document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/gi; //(1234) 567-8910 //Note if you write () the compiler expect that is group
  let Validphonenumeber = phoneRe.test(phoneInput);
  // console.log(Validphonenumeber);
  if (Validphonenumeber === false) {
    return false;
  }
  return true;
};
*/
/* 145-[Regular Expressions] Test_Your_Regular_Expressions_And_Discussions[regexr.com]
 */
/* 146-[Regular Expressions] Challange
=>Solution:
const url1 = "elzero.org";
const url2 = "http://elzero.org";
const url3 = "https://elzero.org";
const url4 = "https://www.elzero.org";
const url5 = "https://www.elzero.org:8080/articels.php?id=100&cat=topics";

const regEX =
  /(https?:\/\/)?(www.)?\w+.org(:\d{4}\/\w+.\w{3}\?\w{2,}=\d{3}&\w{3,}=\w{6,})?/gi;

console.log(url1.match(regEX));
console.log(url2.match(regEX));
console.log(url3.match(regEX));
console.log(url4.match(regEX));
console.log(url5.match(regEX));

const url6 = "https://www.Muhamed.net";
const url7 = "https://www.Ali.com";
const url8 = "https://www.Elnayed.info";
// const regEX =
//   /(https?:\/\/)?(www.)?\w+.(\w{3,})(:\d{4}\/\w+.\w{3}\?\w{2,}=\d{3}&\w{3,}=\w{6,})?/gi;
console.log(url6.match(regEX));
console.log(url7.match(regEX));
console.log(url8.match(regEX));
*/
/* 147-[OOP] Introduction
  OOP:Object oriented programming [meaing method using to write your code]
  --it's a paradigm or style of code
  --Encapsulation meaning hide some parts of code
*/
/* 148-[OOP] Constructor_Function_Introduction
    --Constractor Function:bast practice should write it with capital letter
EX:
  // constractor
  function User(id, userName, salary) {
    //Note by using this you can change any thing you want like salary
    this.i = id; //this return about the new object that will create it
    this.u = userName;
    this.s = salary + 100;
  }
  
  let userOne = new User(100, "Muhamed", 5000);
  let userTwo = new User(101, "Elna", 6000);
  let userThree = new User(102, "Nor", 7000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userTwo.i);
  console.log(userTwo.u);
  console.log(userTwo.s);
  
  console.log(userThree.i);
  console.log(userThree.u);
  console.log(userThree.s);
  // let userOne = {
  //   id: 100,
  //   userName: "Muhemed",
  //   salary: 5000,
  // };
  // let useTwo = {
  //   id: 102,
  //   userName: Elnayed,
  //   salary: 6000,
  // };
  // let userThree = {
  //   id: 102,
  //   userName: Mahfouz,
  //   salary: 7000,
  // };
*/
/* 149-[OOP] Constructor_Function_New_Syntax
// constractor
class User {
  constructor(id, userName, salary) {
    //Note by using this(constructor) you can change any thing you want like salary
    this.i = id; //this return about the new object that will create it
    this.u = userName;
    this.s = salary + 100;
  }
}

let userOne = new User(100, "Muhamed", 5000);
let userTwo = new User(101, "Elna", 6000);
let userThree = new User(102, "Nor", 7000);
console.log(userOne instanceof User); //true because he see it
console.log(userOne.constructor === User); //true because he see it

*/
/* 150-[OOP] Deal_With_Properties_And_Methods 
EX:
// constractor
class User {
  constructor(id, userName, salary) {
    //Propertise [Note all these are Propertise]
    this.i = id;
    this.u = userName || "unKnow";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Your name ${this.u} and your salary Is ${this.s} `;
    };
  }
  //Methods [Note it's writing out of the constructor and not write keyword[function before it]]
  Writemsg() {
    return `Your name ${this.u} and your salary Is ${this.s} `;
  }
}

let userOne = new User(100, "Muhamed", 5000);
let userTwo = new User(101, "", 6000);
let userThree = new User(102, "Nor", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.Writemsg());
// console.log(userOne.msg);//Native output return the function code
// console.log(userOne.Writemsg);//Native output return the function code
console.log("#".repeat(20));

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg());
console.log(userTwo.Writemsg());

console.log("#".repeat(20));
console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);
console.log(userThree.msg());
console.log(userThree.Writemsg());
*/
/* 151-[OOP] Update_Properties_And_Built_In_Constructors
EX:
class User {
  constructor(id, userName, salary) {
    this.i = id; //this return about the new object that will create it
    this.u = userName;
    this.s = salary;
  }
  updatName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Muhamed", 5000);
let userTwo = new User(101, "Elna", 6000);
let userThree = new User(102, "Nor", 7000);

// console.log(userOne.i);
console.log(userOne.u);
userOne.updatName("Tark"); // method that will doing update to the userName
console.log(userOne.u);
// console.log(userOne.s);

// let str1 = "Muhemed";
// let str2 = new String("Muhamed");

// console.log(typeof str1); //string
// console.log(typeof str2); //object
// console.log(typeof String); //function

// console.log(str1 instanceof String); //false
// console.log(str2 instanceof String); //true

// console.log(str1.constructor === String); //true because he use the [String constructor] [بطريقة غير صريحة]
// console.log(str2.constructor === String); //true because he use the [String constructor] [بطريقة صريحة]
let num1 = 100;
let num2 = new Number(200);

console.log(typeof num1); //number
console.log(typeof num2); //object
console.log(typeof Number); //function

console.log(num1 instanceof Number); //false
console.log(num2 instanceof Number); //true

console.log(num1.constructor === Number); //true because he use the [Number constructor] [بطريقة غير صريحة]
console.log(num2.constructor === Number); //true because he use the [Number constructor] [بطريقة صريحة]
*/
/* 152-[OOP] Class_Static_Properties_And_Methods
  ->[class static properties and Methods ]
    -it's meaning that only the class can access about it 
    -Any constructore can't Access about 
EX:
    class User {
    static count = 0;
    constructor(id, userName, salary) {
      this.i = id; //this return about the new object that will create it
      this.u = userName;
      this.s = salary;
      User.count++; //meaning count all created Members
    }
    static sayhello() {
      return `Hello Muhamed`;
    }
    static countOfNewMember() {
      return `${this.count} Member Created`; //you should write this.count
    }
  }
  
  let userOne = new User(100, "Muhamed", 5000);
  let userTwo = new User(101, "Elna", 6000);
  let userThree = new User(102, "Nor", 7000);
  
  console.log(userOne.u);
  console.log(userTwo.u);
  //Properties
  // console.log(userOne.count); //0 can access about it [before set keyword static]
  // console.log(User.count); //undefined can't access about it because it's not static [before set keyword static]
  // console.log(userOne.count); //undefined can't access about it [After set keyword static]
  //console.log(User.count); //0 can access about it because it static [After set keyword static]
  //Methods
  // console.log(userOne.sayhello()); //'Hello Muhamed' can access about it [before set keyword static]
  // console.log(User.sayhello()); //Error can't access about it because it's not static [before set keyword static]
  // console.log(userOne.sayhello()); //Error can't access about it [After set keyword static]
  console.log(User.sayhello()); //'Hello Muhamed' can access about it because it static [After set keyword static]
  console.log(User.countOfNewMember());
*/
/* 153-[OOP] Class_Inheritance 
EX:
//parent Class
class User {
  constructor(id, userName) {
    this.i = id;
    this.u = userName;
  }
  sayhello() {
    return `Hello ${this.u}`;
  }
}
//Dervided Class
class Admin extends User {
  constructor(id, userName, permission) {
    super(id, userName);
    this.p = permission;
  }
}
//childhead
class SuperMan extends Admin {
  constructor(id, userName, permission, ability) {
    super(id, userName, permission);
    this.a = ability;
  }
}

let adminOne = new Admin(100, "Muhamed", 1);
let adminTwo = new Admin(101, "Elna", 2);
let adminThree = new Admin(102, "Nor", 3);

let SuperOne = new SuperMan(100, "Muhamed", 1, 90);
let SuperTwo = new SuperMan(101, "Elna", 2);
let SuperThree = new SuperMan(102, "Nor", 3);

console.log(adminOne.u);//muhamed
console.log(adminOne.i);//100
console.log(adminOne.sayhello());//hello uhamed
console.log(SuperOne.a);//90
*/
/* 154-[OOP] Class_Encapsulation
  --Class fields are public by default.
  --Guards The data Against Illegal Access[تحميك من الدخول الغير امن]
  --Helps To Achive The Target without Revealing[اكتشاف] it's Complex Details
  --Will reduce Human Errors
  --Make The APP More Flexable and Managable.
  --Simplifies the App.
EX:
    class User {
    //Private Properties
    #s; //you should write the private property by this Way
    constructor(id, userName, esalary) {
      this.i = id;
      this.u = userName;
      this.#s = esalary; //#s You should declared it before using it and you can access about
      //it out your class so you should using it insidefunction in the class
    }
    getsalary() {
      return parseInt(this.#s);
    }
  }
  
  class Admin extends User {
    constructor(id, userName, esalary, error) {
      super(id, userName, esalary);
      this.er = error;
    }
    getNemSalary() {
      return this.getsalary() * 0.5;
    }
  }
  
  let userOne = new User(100, "Muhamed", 5000);
  let AdminTwo = new Admin(101, "Elna", 6000, 404);
  let userThree = new User(102, "Nor", 7000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  // console.log(userOne.s);//Undefined
  console.log(userOne.getsalary() * 0.3); //1500 by this method you can
  //access about this property[#s] and you Can't Know an Details About it because it's Encapsolated
  console.log("################");
  console.log(AdminTwo.i);
  console.log(AdminTwo.u);
  console.log(AdminTwo.er);
  // console.log(AdminTwo.s);////Undefined
  console.log(AdminTwo.getsalary() * 0.3); //1800 by this method you can
  //access about this property[#s] and you Can't Know an Details About it because it's Encapsolated
  console.log(AdminTwo.getNemSalary());
*/
/* 155-[OOP] [Prototype] Introduction
  --Prototype it's meaning the inhertance of the all Propeties from the parent Class 
  whene doing an Object from it and you Can access all properties from it

*/
/* 156-[OOP] [Prototype] Add_To_Prototype_Chain_And_Extend_Constructors_Features 
EX:
class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.u = userName;
    this.s = salary;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Muhamed", 5000);
let userTwo = new User(101, "Elna", 6000, 404);
let userThree = new User(102, "Nor", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne);
// console.log(userOne.sayHello());

let str = "Muhamed";

console.log(User.prototype);
console.log(String.prototype);
//[Constructer Object]You Can Create a prototype to your self and can yous it in any place As A object
User.prototype.sayWelcome = function () {
  return `welcome ${this.u}`;
};
//[constructor Object] this will created as object and you can use it in any  place you Want
Object.prototype.love = " You Can Do IT Go And Don't Stop";
//[constructor String] will Add Dot After And Befor the String that will give it
String.prototype.AddDotAfterAndBeforIt = function (val) {
  return `.${this}.`;
};

let MyString = new String("Muddcbsjd");
console.log(String.prototype);
*/
/* 157-[OOP] Object_Meta_Data_And_Descriptor_Part_1
  ->Meta Data And Descriptor:
    --Writable =>[default False] Meaning you Can write About it if [True] if [false ] you Can't Write About it 
    --enumerable =>[default False]meaning any thinging this Object have looping don't Show  but Don't delet me  
    --Configurable =>in case [true] You Can Do update about it if [false] you Cant Do any Update  
EX:
    const myObject = {
    a: 1,
    b: 2,
  };
  //You Can Add Any properties by this Way
  Object.defineProperty(myObject, "c", {
    writable: true, //default [False ] You can't do update About it if false
    enumerable: true, //default [False ] if you doing looping you can't see it if [false]
    // configurable: true, //default [False ] you Can Do any update to this property  in this Case
    configurable: false, //default [False ] you Can't Do any update to this property in this Cas
    value: 3,
  });
  
  //if They identical and parent configurable false will not happend any thing
  //if They deferent and parent configurable false will  return[Cannot redefine property: c]
  Object.defineProperty(myObject, "c", {
    writable: true, //default [False ] You can't do update About it if false
    enumerable: true, //default [False ] if you doing looping you can't see it if [false]
    configurable: true, //[Cannot redefine property: c]
    // configurable: false, //default [False ] you Can't Do any update to this property in this Cas
    value: 3,
  });
  
  console.log(delete myObject.c); //true if the [Configurable true] or false if confi[false]
  // Note This [for in]  Loop you using in the object
  for (let properity in myObject) {
    console.log(properity + " => " + myObject[properity]);
  }
  myObject.c = 100;
  console.log(myObject);
  
  //for of
  // const list = ["a", "b", "c"];
  // for (const value of list) {
  //   console.log(value); //value
  //   // console.log(); //value
  // }

*/
/* 158-[OOP] Object_Meta_Data_And_Descriptor_Part_2 
EX:
const myObject = {
  a: 1,
  b: 2,
};

//you Can Add More One properties  Note any descriptor you will not Write it Will be False
//for Add more properties
Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});
console.log(myObject);
//for Knowing the descripor for one Property
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
//{value: 4, writable: false, enumerable: false, configurable: true}

////for Knowing the descripor for More Properties
console.log(Object.getOwnPropertyDescriptors(myObject));
// a: {value: 1, writable: true, enumerable: true, configurable: true}
// b:{value: 2, writable: true, enumerable: true, configurable: true}
// c: {value: 3, writable: false, enumerable: false, configurable: true}
// d:{value: 4, writable: false, enumerable: false, configurable: true}
// e:{value: 5, writable: false, enumerable: false, configurable: true}
*/
/* 159-[Date and Time] Date_And_Time_Introduction
  -Data Constractor
  -Static Methods
       -Date.now()//return the Time with millsecond
  
  -to track time you need to starting point[1 jan 1970 ]
EX: 
  let NowTime = new Date();
  console.log(NowTime);
  
  console.log(Date.now());
  
  let second = Date.now() / 1000; //1000millsecond =1 second
  console.log(`The Second ${second}`); //Number of seconds
  let minute = second / 60;
  console.log(`the Minute ${minute}`); //Number of Minute
  let houre = minute / 60;
  console.log(`the Houres ${houre}`); //Number of Houres
  let days = houre / 24;
  console.log(`the Days ${days}`); //Number of Days
  let years = days / 365;
  console.log(`the Years ${years}`); //Number of Years
  

 */
/* 160-[Date and Time] Get_Date_And_Time 
  --Date And Time
    -getTime() -> return the time with millisecond 
    -getDate() -> Day of the Month
EX:
  let dateNow = new Date();
  console.log(dateNow); //return date and time
  let myBirthDay = new Date("feb 2, 1999 ");
  let datediff = dateNow - myBirthDay;
  console.log(datediff / 1000 / 60 / 60 / 24 / 365); //23
  console.log(dateNow.getTime());
  console.log(dateNow.getDate()); //21 of the month january
  console.log(dateNow.getFullYear()); //2023
  console.log(dateNow.getMonth()); //0 because this method start from index 0
  //Meaning Count of months from index zero
  
  console.log(dateNow.getDay()); //6 it's start from sunday with index 0
  console.log(dateNow.getHours()); //23 the time [Houres] that you in it now
  console.log(dateNow.getMinutes()); //1 the time[minutes] that you in it now
  console.log(dateNow.getSeconds()); //16 the time [seconds] that you in it now
*/
/* 161-[Date and Time] Set_Date_And_Time 
  --setTime(Milliseconds)
  --setDate()=>Day of the Month [Negative and Positive]
      ->if negative return to the priviose month 
      ->if More 31 take from the next month
  --SetFullYear(year,Month[0-11]optional,day[1-31]optional)
  --setMonth(month[0-11],day=>optional[1-31])[negative and Positive]
  --sethours[hourse[0-23],minte[0-59],seconds[0-59],millisecond[0-999]]
  --setmintes[minte[0-59],seconds[0-59],millisecond[0-999]]
  --setseconds[seconds[0-59],millisecond[0-999]]
EX:
  let dateNow = new Date();
  console.log(dateNow); //return date and time
  console.log("#".repeat(60));
  // dateNow.setTime(1000);//Thu Jan 01 1970 02:00:01
  // console.log(dateNow); //return date and time
  // console.log("#".repeat(60));
  
  // dateNow.setDate(35); //feb 4
  // console.log(dateNow);
  // console.log("#".repeat(60));
  dateNow.setFullYear(2023, -2, 2); //
  console.log(dateNow);
  console.log("#".repeat(60));
*/
/* 162-[Date and Time] Formatting_Date_And_Time
    --new Date(time stampa)
    --new Date(Date String)
    --new Date(Numirc Value)
    Formate:
    Note in string you can  start month and day with index[1]
    but in numiric you should start with [0]
      ->"feb 2 1999"
      ->"2/26/1999"//M/D/y
      ->"1999-2-26"=>Iso international stander //y/m/d
      ->"1999-2"// y/m
      ->"99" //y
      ->1999,1,26,2,10,0 //Y/M/D/Time H/M/S [Note Month and day Start From index 0 in numirc name ]
      ->1999,1,26
      ->"1999-1-26T06:10:00Z" [T time ][Z meaning the TimeZone]
  --You can read Date From A String 
    ->Date.parse("String")
EX:
    console.log(Date.parse("feb 2 1999")); //millisecond    
    let date1 = new Date("feb 2 1999");
    console.log(date1);
    console.log("@".repeat(60));
    let date2 = new Date("2/26/1999");
    console.log(date2);
    console.log("@".repeat(60));
    let date3 = new Date("1999-2");
    console.log(date3);
    console.log("@".repeat(60));
    let date4 = new Date("99");
    console.log(date4);
    console.log("@".repeat(60));
    let date5 = new Date(1999, 1, 26, 2, 10, 0);
    console.log(date5);
    console.log("@".repeat(60));
    let date6 = new Date(1999, 1, 26);
    console.log(date6);
    console.log("@".repeat(60));
    let date7 = new Date("1999-2-26T06:10:00Z"); //there are Aprblem
    console.log(date7);
      */
/* 163-[Date and Time] Tracking_Operations_Time
  --Track Operation Time 
EX:
  //Start Time
  let start = new Date();
  //operation
  for (let i = 0; i <= 10000; i++) {
    // document.write(`<div>${i}</di>`)
    let dive = document.createElement("div");
    dive.appendChild(document.createTextNode(i));
    document.body.appendChild(dive);
  }
  //End Time
  let end = new Date();
  let durationtime = end - start; //millisecond
  console.log(durationtime);
  console.log(performance.now());
  console.log(performance.mark(durationtime));
  search :
  performance.now()
  performance.mark()
*/
/* 164-[Generator] Function_Introduction
  --Generators :
    ->generator function [Run] it's code [whene Required]
    ->generator function return a special Object[Generator Object]
    ->Generator Are Iterable [meaning You can do loop about it] 
  --syntax:
      ->function* generatorName(){
        //using keyWord yeild[لعملية الانتاج]
        yeild num;
        yeild num;
        yeild num;
      }
EX:
  function* GenerteNumber() {
  yield 1;
  console.log(`welcome in Yield 1`);
  yield 2;
  yield 3;
  yield 4;
}

let generator = GenerteNumber();

console.log(typeof generator); //object
console.log(generator);
// console.log(generator.next().value); // 1
// console.log(generator.next().done); // false meaning the Are value aftre it
console.log(generator.next()); //{value: 1, done: false}
console.log(generator.next()); //{value: 2, done: false}
// console.log(generator.next()); //{value: 3, done: false}
// console.log(generator.next()); //{value: 4, done: false}
// console.log(generator.next()); //{value: undefined, done: true}// As not Found
// console.log(generator.next()); //{value: undefined, done: true}// As not Found

//Note in this Case will return Values AS You are Calling function directly
for (let value of GenerteNumber()) {
  console.log(value);
}
//if you are Calling all product in above will not return any thing
//Note in this Case will return Yeild 4 becuase We aren't calling it
for (let value of generator) {
  console.log(`the Value that we don't product it is : ${value}`);//3,4 As we Don't product it
}

*/
/* 165-[Generator] Delegate_Generator_Function 
EX:
function* GenerteNumber() {
  yield 1;
  yield 2;
  yield 3;
}
function* GenerteLetter() {
  yield "A";
  yield "B";
  yield "C";
}
function* GenerteAll() {
  yield* GenerteNumber();
  yield* GenerteLetter();
  yield 3;
  yield* [4, 5, 6]; //if you don't set [*] will return all Array in one feild so you should set [*]
}

let generator = GenerteAll();
console.log(generator.next()); //{value: 1, done: false}
console.log(generator.next()); //{value: 2, done: false}
console.log(generator.next()); //{value: 3, done: false}
console.log(generator.next()); //{value: 'A', done: false}
console.log(generator.next()); //{value: 'B', done: false}
console.log(generator.next()); //{value: 'C', done: false}
console.log(generator.return("You will stop the generator")); //if you Write retun will stop the iteratoion and can't see any thing after that
//All after this  will return undefine
console.log(generator.next()); //{value: 3, done: false}
console.log(generator.next()); //{value: 4, done: false}
console.log(generator.next()); //{value: 5, done: false}
console.log(generator.next()); //{value: 6, done: false}
console.log(generator.next()); //{value: undefine, done: true}
*/
/* 166-[Generator] Generate_Infinite_Numbers 
    --Generate:
        ->Infinite Numbers:but will show if you need it only
        ->use return inside generators 
EX:
  function* GenerateInfiniteNumber() {
  let index = 0;
  while (true) {
    //Note don't do any thing to your device beacause its yeiling whene you need it only
    yield index++;
  }
}
let generator = GenerateInfiniteNumber();
console.log(generator.next().value);
//will make device stop
//for (let value of generator) {
// console.log(generator.next().value);
// }
*/
/* 167-[Modules Import and Export] Modules_Import_And_Export
    --it's using to can import[استراد] and Export[تصدير] any thing you want from page to anothe
    --you should write this in page of html[type="module"]
      <script src="test.js" type="module"></script>
      <script src="app.js" type="module"></script>
EX:
  // you Can do Export by two Way
  //1- one by one
  // export let a = 6;
  // export let arr = [1, 23, 3, 4];
  // export function sayHello() {
  //   return `Hello in the Import page`;
  // }
  //2- All Together
  let a = 6;
  let arr = [1, 23, 3, 4];
  function sayHello() {
    return `Hello in the Import page`;
  }
  export { a, arr, sayHello };

  //in Import Page [app,js]
  // //Note You can use [Alias] by it you Can change the name of import modules
  // //by using [oldName as newName]
  // import { a, arr, sayHello as say } from "./test.js";
  // console.log(a);
  // console.log(arr);
  // console.log(say());
 */
/* 168-[Modules Import and Export] Named_vs_Default_Export_And_Import_All 
  --Export Alias 
  --Named Export
  --default Export -> You can call it by [any name]
    ->it may be anoniumuse function 
EX:
  //2- All Together
  let a = 6;
  let arr = [1, 23, 3, 4];
  function sayHello() {
    return `Hello in the Import page`;
  }
  //Export Alias [arr as array] you should calling it by [Alias Name only in the import page]
  export { a, arr as array, sayHello };
  //[export default] Whene you import it you  can calling it with any name
  //Note You can't do [export default] two Once only one
  export default function sayWhy() {
    return "Why You Do this";
  }
  //Error
  // export default function sayWhen() {
  //   return "when You Do this";
  // }
*/
/* 169-[JSON] What_Is_JSON 
  -JSON=>JavaScript Object Notation
  -JSON formationg for sharing Data bteween server and Client
  -JSON derived [مشتقه]Form JS
  -JSON is alternative[بديل] for the XML and Extention .json

  -You Can Convert JSON Object to JS Object

  -------JSON------------VS--XML
  -Text Based on Format    -MarkUp Language 
  -lightWhite              -heavier   
  -Dosen't use Tage        -Used Tages
  -shorter                 -Note shoter
  -Can use Array           -Cann't use Array
  -Not Support Comments    -Support Comment
*/
/* 170-[JSON] JSON_Syntax_And_Compare_With_JS_Object 
If you Want to test it Go to Page for Testing JSON
[https://jsoneditoronline.org/#left=local.cixaqe&right=local.gayofo]

--Available Data type
    -String
    -Number
    -Object
    -Array
    -boolean Value
    -Null
  --Syntax:
    -Data Add inside curly Braces{}
    -Data added with Key :value
    -key should write it between " "
    -Data seperated By Comma [,]
    -Square Brackites for Array
    -Curly Braces for the Object
    -Comments are not permitted in JSON.
EX:Write in file JSON
{
  "name": "Muhemed",
  "age": 23,
  "Countery": {
    "EG": "Egypt",
    "KsA": "Riyde"
  },
  "array": [1, 2, 3, 4, 5],
  "availabel": true,
  "Null": null
}

*/
/* 171-[JSON] [API] What_Is_API 
    [API]=>Application Programming InterFace
    --ApI OverView
    --Tools To Test API
    --preview Githup API 
*/
/* 172-[JSON] [API] Parse_And_Stringify 
    --JSON.parse(jSON object)=>Convert Text To JS Object
    --JSON.stringify(JS object)=>Convert JS Object TO JSON Object
EX:
  let myJsonObjectFromServer = '{"UserName":"Muhamed","Age":23}';
  console.log(typeof myJsonObjectFromServer); //string
  console.log(myJsonObjectFromServer); //{"UserName":"Muhamed","Age":23}
  
  //doing Convert to JS Object from JSON Object
  let myJSObject = JSON.parse(myJsonObjectFromServer);
  console.log(typeof myJSObject); //Object
  console.log(myJSObject); //{UserName: 'Muhamed', Age: 23}
  
  //doing Update to myJSObject
  myJSObject["UserName"] = "ELnayed";
  myJSObject["Age"] = 40;
  console.log(myJSObject); //{UserName: 'ELnayed', Age: 40}
  
  //doing Convert to JSON Object From JS Object
  let myJsonObjectToServer = JSON.stringify(myJSObject);
  console.log(typeof myJsonObjectToServer); //string
  console.log(myJsonObjectToServer); //{"UserName":"ELnayed","Age":40}
*/
/* 173-[JSON] [API] Asynchronous_vs_Synchronous_Programming
  -To Understand Ajax,Fetch,Promises
  -Asynchronous[الغيرالمتزامن] Vs synchronous[المتزامن] Programming
  --synchronous:
    ->Operations Run in sequance
    ->Each Operation Must wait for the Previous One To Complet
    ->Story From live[take A tecket]
  --Asynchronous:
    ->Operations Run in Parallel(توازي)[in the Same Time]
    ->This Meaning that Operation Can Occur While Anothor One is still being Processed
    ->Story From live[Resturant]
  --search
    -single Thread
    -
EX:  
  //synchronous:
  // console.log(1);
  // console.log(2);
  // alert("Operation");
  // console.log(3);
  
  //Asynchronous:
  console.log(1);
  console.log(2);
  setTimeout(() => {
    console.log("Yuor Name is Muhamed");
  }, 3000); //will occure after//console.log(3);
  console.log(3);
*/
/* 174-[JSON] [API] Call_Stack[LIFO]And_Web_API
  --Call Satck || Stack Trace
    ->JS Engine using a Call Stack To Manage Execution Context
    ->when Function Called it Add to the stack
    ->when Function Excuted[تمت] it Removed From the stack
    -After Function is Finished Executing [th interpreter][Compiler] start From last point
    -Call Stack Work with Mechanism [lIFO] last In First Out
    -Code execution is synchronous.
    -Call Stack detetct Web API And leaved it to the Browser to Handle it

  --[Web API] work with [DOM ,Settimeout(),....]
    they don't Work untill end All OPeration end.and work after that
    -Method Available from the Environment =>Browser 
    // web API stop this Operation untill all operations done
    setTimeout(() => {
      console.log("any operation");
    }, 0);
    // let divs = document.createElement("div");
    function one() {
      console.log("One");
    }
    function two() {
      one();
      console.log("Two");
    }
    function three() {
      two();
      console.log("Three");
    }
    three();
    console.log("##############");
    console.log("One");
    console.log("Two");
    console.log("Three");
*/
/* 175-[JSON] [API] Event_Loop_And_Callback_Queue 
    -to understan Ajax fetch promisies
    
    ->Event Loop +Callback queue
    ->Story:
     --JS is a [Single Thread language] All Operations Executed in single thread.
     --[Call Stack] track(تتبع نظام ) ALL calls[LIFO]
     --every function Done it's [Poped out]
     --when call Asynchronous function it sent to browser API[Web ApI]
     --Asynchronous function like[setTimeout] Start it's OWn [Thread]
     --Browser[Web] ApI Act As a second thread
     --[Web API] finshing Waiting and send back the Function for Processing
     --Browser API Add The [Callback(function)] to the Callback Queue
     --[Event Loop] wait for [Call Stack] To be Empty.
     --[Event Loop] get callback from Callback queue and Add it To Call Stack
     --[Callback] Follow the Mechanism of [FIFO]"First in first out" rule
EX:
  console.log(1);
  setTimeout(() => {
    console.log(3);
  }, 3000);
  setTimeout(() => {
    console.log(4);
  }, 0);
  console.log(2);

*/
/* 176-[JSON] [API] What_Is_AJAX_And_Network_Information [site:HTTP Response Status Code]
    [site: developer mozilla.org] 
    ->AJAX=>Asynchronous JS And XML
    ->Approach use many technologies together[HTML,CSS,JS,DOM]
    ->It's using "XMlHttpRequest" Object to Interact with the Server
    ->you can fetch data or send data without page refresh.
    ->EX:
      --Youtube studio
      --Google Drive

    ->Test New XMLHttpRequest()
      --request and response
      --Satus Code
EX:
  let req = new XMLHttpRequest();
  console.log(req);
*/
/* 177-[JSON] [API] Request_And_Response_From_Real_API
  ->(Ready State) => status of the request:
    --[0]Request Not Initializeed
    --[1]Server Connection Established
    --[2]request received
    --[3]Processing request
    --[4]request is finished and response is ready
  ->(Status):
    --[200]Response Is Successfuly
    --[404]Not Found Web API
EX:
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.githup.com/users/elzerowebschool/repos");
    myRequest.send();
    console.log(myRequest);
    myRequest.onreadystatechange = function () {
      console.log(myRequest.readyState);
      console.log(myRequest.status);
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };
*/
/* 178- [JSON] [API] Loop_On_Data*/
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.githup.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);
myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
