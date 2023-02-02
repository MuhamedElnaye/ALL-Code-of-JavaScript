//=>write (windows)in the console of the browser  to can see all functions you want.
/* 005-you should write this to can put the (Js page in the head)
    -Wait the widow to load 
    window.onload=function() {
        document.querySelector("h3").style.color="red";
    };
    OR you can put it in the end of the [HTML page] that is the (best way)*/
/* 006-comments
    //single line
    block of lines

*/
/* 007-Output to screen 
    1-window.alert("Hello to my JS file"); [it's don't using as stop any thing after them]
    2-document.write("<h3>Hell in my page <span>Muhamed</span></h3>");
    3-console.log("Hello in Console"); using to can print some thing in console
*/
/* 008-Console [Methods] And [Styling] And [Web [API (application programming interface) ]]
console:Method 
    -log console.log();
    -error console.error();
    -table:
        console.table();//it's using to can do table for any arrey you want
        EX: console.table([ "muhamed" ,"El-nayed" , "tarek"]);
console:Styling
    - [%c] it's using to specifiy  words that you want to do styling about it  
        EX:
        console.log("hello in my %ctest %cpage","color:green; font-size:40px;","color:blue; font-size:40px;")
Web [API (application programming interface) ] :note that the the console not in JS
                                                it's in [Web API]
*/
/* 009-What is [ECMA] Script 
    -ES6 [Ecma script 6] meaning all programming language likely.to make language easer 
*/
/* 010-Data types and typeof operators
    -String
        console.log(typeof("muhemed"));
        console.log(typeof "muhemed"); we can write it without pracktes 
    -Number
        console.log(typeof(400));
        console.log(typeof(400.33));
    -Arrey =>Object
        console.log(typeof([1,4,5,6]));
        console.log(typeof(["dd",'ee',"err"]));
    -Object
        console.log(typeof({name:"muhemed",Age:16,countery:"Eg" }));
    -Boolean
        console.log(typeof(true));
    -Undefined
        console.log(typeof undefined);
    -Null =>object this a [bug] in JS
        console.log(typeof null);
    
 */
/* 011-Variables introduction 
    - syntax[keyword(var) | variable name | assignment operator |variable value]
    - you can concatenat two variable togither
    -Note any [ID] in HTML page (dealing with it as vairable)
    var user="muhamed" ,
        age=24;
    console.log("your name is  : "+user +"and your Age is: " +age);
    console.log("your name is  : "+user +"and your Age is: " +age);
    console.log("your name is  : "+user +"and your Age is: " +age);
    //(muh) is a ID from HTML page
    muh.innerHTML="Al-nayed";
*/
/* 012-Identifiers name convention & rules 
    HOw to write the variable and it's rules
*/
/* 013-Var,_Let,_Const_Compare 
    ->var:
        -Redeclare(Yes): 
            meaning rewrite the same variable name with another value 
            in case [var] don't give you an [error]
            var user=10;
            var user=20;
            console.log(user);//20
        
        -Access before declare(undefine don't give you any data about error)
        -Variable Scope drama()
            in case of [var] it save the variable in the window as an object
        -Block or Function Scope :
            block Scope [meaning onle one block like onle if]
            function Scope [meaning function continue some of [if ,for ..... ] ]
    ->let:
        -Redeclare(No)
            in case [let]  give you an [error] and you can't complete your product
            let user=12;
            let user=14; don't accept this and [out error]

        -Access before declare(give you an explantion for this error)
        -Variable Scope drama()
            in case of [let] it don't save the variable in the window as an object
        -Block or Function Scope 
            block Scope [meaning onle one block like onle if]
            function Scope [meaning function continue some of [if ,for ..... ] ]
    ->const:
        -Redeclare(No)
            in case [const]  give you an [error] and you can't complete your product
            const user=12;
            const user=14; don't accept this and out error

        -Access before declare()
        -Variable Scope drama()
            in case of [const] it don't save the variable in the window as an object
        -Block or Function Scope 
            block Scope [meaning onle one block like onle if]
            function Scope [meaning function continue some of [if ,for ..... ] ]

*/
/* 014- \' or \" [from first or last] Escape + line  continue 
let aabbkscmlmswcl=112;
console.log( "web \"school\" ");
console.log( "web \'school\' ");
console.log( "web \'school\  \
 number \
 two");//to can write the same string in more one line her not in the console
console.log( "web \\school\\ ");
console.log( "web \\school\\ \n or any \nstudent ");
//to can write the same string in more one line  in the console
*/
/* 015-Concatenation
let a="we love";
let b="javaScript ";
document.write(a+" "+b);
console.log(a,b)// in console
*/
/* 016-Template_Literals[ `` ]_Template_Strings [""] 
        -meaning concatenation in the [ES6] 
        let a="we love";
        let b="javaScript ";
        let c="And ";
        let d="programming ";
        let markup=` 
        <div>
            <div class="child">
                <h3>Our test page</h3>
                <p> my name is muhamed</p>  
                <p>${b}</p>  
                <p>${d}</p>  
            </div>
        </div>
        `;
        document.write(markup);
        //you should write space by [" "] and [\n] to go to another line  
        console.log(a + " "+ b+ "\n "+ c+ "\'\'  \"\"  "+ d)
        //concatenation in [ES6]
        //you shouldn't write space[" "] and [Enter] to go to another line  (\\ to write one)
        console.log(`${a} ''  ""  \\ ${b} 
         ${c}  ${d}`);
*/
/* 017-Variable_And_Concatenation_Challenge [codepen.io]
let title_name=" Hello Elzero" ,description_of_title="Elzero Web School" , date="25/10" ;
let var_with_div=`
<div class="card"> 
    <h3>our language in Header ${title_name}</h3>
    <p>our paragraph ${description_of_title}</p>
    <span>${date}</span>
</div>
`;
document.write(var_with_div.repeat(4));
document.write("<hr>")

document.write(var_with_div)
document.write("<hr>")

document.write(var_with_div)
document.write("<hr>")

document.write(var_with_div)
document.write("<hr>")
*/
/* 018- Arithmetic_Operators    
    operators:
    -[+] addition
    -[-] subtraction
    -[*] multiblication
    -[/] division
    -[**] Exponentiation(الاس)
    -[%] modulus(division remainder (باقي القسمة))
    -[++] Increment
        [pos (p++)] print the old value and save the new value
        [pre (++p)] print the new value
    -[--] decrement:
        [pos (p--)] print the old value and save the new value
        [pre (--p)] print the new value
        let a=10 +"mjdkejdke"
        let b=10 - "mjdkejdke" //NAN[Not a number]
        console.log(typeof(a));//string
        console.log(typeof(b));//number
        console.log(b);//NAN
        console.log(10+20);
        console.log(10-20);
        console.log(10*20);
        console.log(10/20);
        console.log(2**4);
        console.log(2%4);// if 2 less than 4 the remender is 2
        console.log(4%2);//remender is [0]
        console.log(5%2);//remender is [1]
        let bb=3;
        console.log(bb++);
        console.log(bb);
        console.log("<hr>");
        console.log(++bb);
        console.log(bb);
*/
/* 019-Unary_Plus_And_Negation_Operators 
    -[+] Unary Plus (return number  if it's not number)
    -[-] Unary negation (return number  if it's not number +negates it)

    console.log(+100);//number
    console.log(+"100");//number
    console.log(+"-100");//number
    console.log(+"muhamed");//NaN
    console.log(+100.15);//number
    console.log(+0Xff);//[hexadecimal]number[255]
    console.log(+null);//0
    console.log(+false);//0
    console.log(+true);//1
    
    console.log(-100);//number[-100]
    console.log(-"100");//number[-100]
    console.log(-"-100");//number[100]
    console.log(-"muhamed");//NaN
    console.log(-100.15);//number[-100.15]
    console.log(-0Xff);//[hexadecimal]number[-255]
    console.log(-null);//0
    console.log(-false);//0
    console.log(-true);//-1
    console.log(Number("100")); //convert the string to number 
*/
/* 020-Type_Coercion [type casting]
    -[+]
    -[-]
    -["" - 2]
    -[false - true]
    let a=20;
    let b="10";
    let c=true;
    let v=false;
    console.log(b+a);//1020
    console.log(+b+a);//30
    console.log(-b+a);//10
    console.log(""-a);//[""=0] [-20]
    console.log(+""+a);//[""=0] [20]
    console.log(Number(""));//0
    console.log(false+true);//1
    console.log(b+a+c);//1020true
    console.log(+b+a+c);//31
*/
/* 021-Assingment operators 
let a=20;
a=a+10;
console.log(a);//30
a+=10;//= [a=a+10;]
a-=5;
console.log(a);//40
*/
/* 022-Operators_Challenges 

//  Challenge 1 
// // NOte you should run every task
// let a=10;
// let b="20";
// let c=80;
// let task1=++a + +b++ + +c++ - +a++
// console.log("challenge 1 task1  = "+task1) ;//100
 
// [++a]:
//     value=11
//     Explain:pre increament
// [+] => addition operator
// [+b++] 
//     value=20
//     Explain:unary_plus and pos_increament 
// [+] =>addition operator
// [+c++] 
//     value=80
//     Explain:unary plus and pos increament
// [-]=>subtraction operator
// [+a++]
//     value=11
//     Explain:unary plus and pos increament
// 

// // let task2= ++a + -b  +  +c++ - -a++  +  +a;
// // console.log("challenge 1 task2  = "+task2) ;//94


// [++a]
//     value=11
//     Explain:pre increament
// [+] operator
// [-b]  
//     value= -20
//     Explain:unary_nagation
// [+]  operator

// [+c++] 
//     value=80
//     Explain:unary_plus
// [-] operator
// [-a++]  
//     value=-11
//     Explain:unary_nagation
// [+]  operator
// [+a]
//     value=12
//     Explain:unary_plus
// 

// // let task3=--c  +  +b  +  --a  *  +b++  -  +b  *  a  +  --a  -  +true;//97
// // console.log("challenge 1 task3  = "+task3) ;//97

// [--c]
//     value=79
//     Explain:pre decreament
// [+]  = operator
// [+b] 
//     value=20
//     Explain:unary_plus
// [+]  operator
// [--a]  
//     value=9
//     Explain:pre decreament
// [*] operator 
    
// [+b++]  
//     value=20
//     Explain:unary_plus and pos increament
// [-]  operator
// [+b]  
//     value=21
//     Explain:unary plus
// [*]  operator
// [a] 
//     value=9
//     Explain:
// [+]  operator
// [--a] 
//     value=8
//     Explain:pre_decreament

// [-]  operator

// [+true]
//     value=1
//     Explain:unary_plus
// 
//  Challenge 2 
// let d="-100";
// let e="20";
// let f=30;
// let g=true;
// let task4=-d * +e ;//2000
// console.log("challenge 2 task4  = "+task4) ;//2000

 
// [-d]
//     value=100
//     explain:unary_negation
// [*] operator

// [+e]
//     value=20
//     explain:unary_plus
// 
// let task5=-d - f + -d + true + true + true;//173
// console.log("challenge 2 task5  =  "+task5) ;//173

// [-d] 
//     value=100
//     explain:unary_nagation
// [-] operator
// [f] 
//     value=30
//     explain:
// [+] operator
// [-d]
//     value=100
//     explain:unary_nagation
// [+] operator
// [true] 
//     value=1
//     explain:
// [+] operator
// [true] 
//     value=1
// [+] operator
// [true]
//     value=1
*/
/* 023-number
    -Note all number in JS saved as [double precision]
    -syntactic suger "_"[1_000_000]
    -[e] ex:(1e6) meaning 1 and after them [6 zero]1000000
    -** [10**6]=1000000  
    -with decimal=10000.00000
EX:
console.log(1000000);
//1000000
    console.log(1_000_000); //1000000
    console.log(1e6); //1000000
    console.log(10 ** 6); //1000000
    console.log(1000000.0); //1000000
    console.log(Number.MAX_SAFE_INTEGER);the height integer number in js 
    
    console.log(Number.MAX_VALUE);
    console.log(Number.MAX_VALUE + 123456789); //don't add any thing as this is a max value

*/
/* 024-Number Methods
    -two dot to call  methods 
        EX:
        console.log((100).toString());
        console.log(100..toString()); to convert it to [string] 
        console.log(100.toString());comeback[string] meaning put number and put  some of divisions
    -toSring() convert number to string
    
    -tofixed()
        You can use it to comeback integer number
        console.log(100.456765434567654.toFixed(2)); meaning comeback[String] from 
        divisions[456765434567654] only toFixed[2] two number 
    -parseInt()
        //some methods that convert string to number
        console.log(Number("100 muhame")); //NAN
        console.log(+"100 muhamed"); //NAN
        console.log(parseInt("100 muhamed")); //100 => it's doing analysing to data and return number onle
        console.log(parseInt("osama 100 muhamed")); //NaN => it's doing analysing to data and return number onle but it shoud in  first only 
        console.log(parseInt("100.444")); //100
    -parseFloat()
        console.log(parseFloat("100.444")); //100.444 comeback only float number
    -isInteger()[ES6] meaning are this number is integer or no
        console.log(Number.isInteger("100")); //false
        console.log(Number.isInteger(100.12345)); //false
        console.log(Number.isInteger(100)); //true
    -isNaN()[ES6]:search about
        console.log(Number.isNaN(100 / "ddvd")); //true It's speaking about the value that [will comeback]
        console.log(Number.isNaN("vvddf" / "dcvdscdc")); //true
        console.log(Number.isNaN("hdwjeghkjcweh" / 12345)); //true
    */
/* 025-Math_Object
    -round()
        console.log(Math.round(99.2)); //99 [تفريب] [comeback integar number]
        console.log(Math.round(99.5)); //100 [تفريب]
    -ceil()    
        console.log(Math.ceil(99.2)); //100 only nearly to the top[سطح] [comeback integar number]
        console.log(Math.ceil(99.7)); //100 
    -floor()
        console.log(Math.floor(99.2)); //99 only nearly to the top[ ارضي] [comeback integar number]
        console.log(Math.floor(99.7)); //99 only nearly to the top[ ارضي]
    -min()the minmam number
        console,log(Math.min(1,3,5,6,7,8));//1
        -max()the height number
        console,log(Math,max(1,3,5,6,7,8));//8
    -pow(number,power)[الاس]
        console,log(Math.pow(2,3));//8
    -random() meaning random number[عشوائية]
        console.log(Math.random());
    -trunc() [ES6] meaning remove divsion number always
        console.log(Math.trunc(88.554)); //88
*/
/* 026-Number_Challenge
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
//smallest number and integar
console.log(Math.round(Math.min(a, b, c, d)));
//usa a and b to [10000]
console.log(Math.pow(a, Math.trunc(d)));
//get integer number "2" from d
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number(d.toFixed(0)));
//use b and d to get value
console.log(Number(Number(Math.trunc(b) / Math.ceil(d)).toFixed(2)).toString()); //string 66.67
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); //67 number

*/
/* 027- string Methods part 1
Note that space with us and count in length any method
    -Access with Index. using to find the index
        console.log(ourname[2]); //h index start from [0] calling number
    -Access with charAt() using to find the index
        console.log(ourname.charAt(2)); //h charAt (postion) start from [0] index calling number
    -length using to count the number of the string 
        console.log(ourname.length);//Note that lenght not a function
    
    -trim() using to remove the space after and before the string
    console.log(ourname.trim()); //muhamed without space remove space from first and end

    -toUpperCase()using to convert all  character to cabetal letter
    console.log(ourname.toUpperCase());

    -toLowerCase()using to convert all  character to small letter
    console.log(ourname.toLowerCase());
    
    -Chain Methods meaning do this method in chain
        console.log(ourname.trim().charAt(2).toUpperCase());//H

    let ourname = "    Muhamed  ";
    console.log(ourname);
    console.log(ourname[2]); //h index start from [0] calling number
    console.log(ourname.charAt(2)); //h charAt (postion) start from [0] index calling number
    console.log(ourname.length); //13 Note that lenght not a function
    
    console.log(ourname.toUpperCase());//MUHAMED
    console.log(ourname.toLowerCase());//muhamed
    */
/* 028- string Methods part 2 
    -indexOf[value(mandatoy اجباري),start(optional اختياري) default 0]
        meaning search about [value] [strat] with from [first] :
        EX:let a = "muhamed elnayed mahfouz ";
            console.log(a.indexOf("elnayed", 7)); // 8 get the index of start from 7
            console.log(a.indexOf("mahfouz")); //16
    -lastindexOf[value(mandatoy اجباري),start(optional اختياري) default length]
        meaning search about [value] [strat] with from [last] :and giv you the index
        EX:
            let a = "muhamed elnayed mahfouz ";
            console.log(a.lastIndexOf("m")); //16 search from the last
            console.log(a.lastIndexOf("a")); //17
    -slice (cuting)[start(mandatoy ),,start(optional) Not include end]
        EX:
        let a = "muhamed elnayed mahfouz ";
         //slice from first
            console.log(a.slice(1)); // all string meaning cut from 1 to the end if you don't write it
            console.log(a.slice(1, 6)); // uhame  cut from index[1] to index[6]
            //note that the slice not include end meaning (d) not with us
            
            //slice from End
            console.log(a.slice(-5)); //hfouz from index [-5] to end
            console.log(a.slice(-5, -3)); //hfouz from index [-5] to end [o] not with us as not include end
                
            
    -repeat (time) [ES6]
        EX:    let a = "muhamed elnayed mahfouz ";

    -split (separator[option],limit[option])
        meaning cut these element and convert and saved it in [array]
        EX:
        //note that he cut to the [end] of the string  if don't limit the end
            let a = "muhamed elnayed mahfouz ";
            console.log(a.split()); //[muha....] get (a) as array
            console.log(a.split("")); //['m','u',.........] get (a) as array meaning cut every letter alone
            console.log(a.split(" ")); //['muhamed','elnayed',....] get (a) as array meaning cut from space [" "]
            let b = "my|name|is|muhamed|elnayed|mahfouz";
            console.log(b.split("|")); //['my','name',....] get (a) as array meaning cut from  ["|"]
            console.log(b.split("|", 3)); //['my', 'name', 'is']
            console.log(b.split("", 5)); //['m', 'y', '|', 'n', 'a']
        EX:  
            
           
            //slice from first
            console.log(a.slice(1)); // all string meaning cut from 1 to the end if you don't write it
            console.log(a.slice(1, 6)); // uhame  cut from index[1] to index[6]
            //note that the slice not include end meaning (d) not with us
            
            //slice from End
            console.log(a.slice(-5)); //hfouz from index [-5] to end
            console.log(a.slice(-5, -3)); //hfouz from index [-5] to end [o] not with us as not include end
            
            
*/
/* 029- string Methods part 3 
    ->substring (start[mandatory],end[option] not include end)
        -start >[biger than] end will swap
        -start < 0[less than 0] it start from 0
        -Use length to get last character 
        EX: let a = "muhamed elnayed mahfouz";
            console.log(a.substring(2)); //hamed elnayed mahfouz LIKE slice
            console.log(a.substring(2, 6)); //hame
            console.log(a.substring(6, 2)); //hame doing swap if start > end
            console.log(a.substring(-6, 2)); //mu  if start(-6) <0 negative meaning [start=index=0]
            console.log(a.length); //23
            console.log(a.substring(a.length - 6, a.length - 3)); //ahf to can use substring from last
    
    ->substr (start[mandatory],characters to extract[number of character])
            -start >=length  = ""
            -negative value start from last
            EX: let a = "muhamed elnayed mahfouz";
                console.log(a.substr(0)); //muhamed elnayed mahfouz all index
                console.log(a.substr(0, 7)); //from 0 index  cut [7 character]
                console.log(a.substr(24, 7)); //get [space ""]
                console.log(a.substr(-3)); //ouz as you don't limit the end
                console.log(a.substr(-7, 5)); //mahfo [-7] is the index from last [5]number of character
    ->includes(value[mandatory] ,start[option] default 0)[ES6]
            -get [true or false]
            EX: let a = "muhamed elnayed mahfouz";
                console.log(a.includes("eln")); //true
                console.log(a.includes("eln", 9)); //False because he start from the [index=9]
    ->startsWith(value[mandatory] ,start[option] default 0)[ES6]
            -meaning are this string start from {"any string"}
            let a = "muhamed elnayed mahfouz";
            console.log(a.startsWith("m")); //true as he start from index 0
            console.log(a.startsWith("m", 2)); //false as he start from index 2 and he don't start with "m"
            console.log(a.startsWith("med", 4)); //true as he start from index 4

    ->endWith(value[mandatory] ,length (option) default full length)[ES6]
            let a = "muhamed elnayed mahfouz";
            console.log(a.endsWith("z")); //true it's dealing with all string
            console.log(a.endsWith("d", 7)); //true are first [7 character (length)] end with
*/
/* 030-string challange
30-string challange
let a = "Elzero web School";
// 1-Output Zero [slice ,CharAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero

// 2-Output 8 H
console.log(a.slice(-4, -3).repeat(8).toUpperCase()); //HHHHHHHH

// 3-Output["Elzero"]
console.log(a.split(" ", 1)); //Elzero

// 4-Output Elzero School
console.log(a.length);
console.log(a.substr(0, 6) + " " + a.substr(-6, 6)); //Elzero School
// 5-Output eLZERO WEB SCHOOl note[fist and last character is small]
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
);
let bb = "my name is muhamed Elnayed what is your name";
console.log(
  bb.charAt(0).toLowerCase() +
    bb.slice(1, bb.length - 1).toUpperCase() +
    bb.charAt(bb.length - 1).toLowerCase()
);

*/
/* 031-Comparison_Operators
-[==] Equal (false or true) it's comparing only the [value] not [data type]
Note that [!] remove one equal from syntax
-[!=] Not Equal (false or true)
    EX:
    console.log(10=="10"); //true
    console.log(-100=="-100"); //true
    console.log(-100!=="-100"); //false
    
-[===] identical (false or true)it's comparing  the [value] and  [data type] together 
-[!==] not identical (false or true)it's comparing  the [value] and  [data type] together
    EX:
    console.log(-100==="-100"); //false
    console.log(-100===-100); //true
    console.log(-100!===-100); //false
    console.log(-100!==="-100"); //rue
-[>] larger than
-[>=] larger than (OR) equal
-[<] smaller than
-[<=] smaller than (OR) equal
-[question interview] How to convert this to true
    console.log(typeof "osama"===typeof "muhamed");//flase 
    
    */
/* 032-logical operators
    -[!] Not
        console.log(true);
        console.log(!true);
        console.log(!(10 == "10"));
    -[&&] And 
         console.log(10 >= "10" && 10 > 8 && 10 > 40); //false
    -[||] OR
        console.log(10 >= "10" || 10 > 8 || 10 > 40); //true
*/
/* 033-If_Conditions
    ->control flow
        -if(condition){
            block of code
    }
EX:
    let price = 100;
    let discount = false;
    // let discount = true;
    let discountAmount = 30;
    // let countery = "Egypt";
    let countery = "syria";
    // let countery = "KSA";
    
    if (discount == true) {
      price -= discountAmount;
    } else if (countery == "Egypt") {
      price -= 40;
    } else if (countery == "syria") {
      price -= 50;
    } else {
      price -= 10;
    }
    console.log(price);
*/
/* 034-Nested_If_Condition
let price = 100;
let discount = false;
// let discount = true;
let discountAmount = 30;
// let countery = "Egypt";
let countery = "syria";
// let countery = "KSA";
let student = true;

if (discount == true) {
  price -= discountAmount;
} else if (countery == "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount - 20;
  }
} else if (countery == "syria") {
  price -= discountAmount + 20;
} else {
  price -= discountAmount - 20;
}
console.log(price);

*/
/* 035-Conditional_Ternary_Operator if [المختصرة]
EX: let theName = "muhamed";
    let theGender = "male";
    let theAge = 30;
    if (theGender === "female") {
    console.log("Mrs");
    } else {
    console.log("Mr");
    }
    //condition ? If true : if False ;
    theGender === "female" ? console.log("Mrs") : console.log("Mr");
    let result = theGender === "female" ? "Mrs" : "Mr";
    document.write(result);
    console.log(`Hello  ${result} ${theName}`);

    //else if by ternary
    theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
    ? console.log("20 to 60")
    : theAge > 60
    ? console.log("larger than 60")
    : console.log("not Known");
*/
/* 036-Nullish_Coalescing_Operator_And_Logical_Or 
    =>logical operator OR [||]calling (pipeline) 
        ->null ,undifine or any falsy value print the value after logical operator
        EX: console.log(`the price is ${price || 200}`);
    =>nullish coalescing operator [ ?? ] meaning don't return value [null or undefine] and 
    retrun the another conditon
    EX: let price = null;
    console.log(`the price is ${price ?? 300}`);in this case the output =300
    EX: let price ;
    console.log(`the price is ${price ?? 300}`);in this case the output =300
    EX: let price = 0;
    console.log(`the price is ${price ?? 300}`);in this case the output =0
    EX: let price = false;
    console.log(`the price is ${price ?? 300}`);in this case the output =false
    let price = true;
    //to know are this value true or false by using instractor (boolean())
    console.log(Boolean(100)); //true
    console.log(Boolean(-100)); //true
    console.log(Boolean(0)); //false
    console.log(Boolean("")); //false
    console.log(Boolean(null)); //false
    
    console.log(`the price is ${price}`); //100 output-> 100
    console.log(`the price is ${price}`); //"" output->space
    console.log(`the price is ${price}`); //0 output-> 0
    console.log(`the price is ${price}`); //nll output-> null
    console.log(`the price is ${price}`); //false output->false
    console.log(`the price is ${price}`); //price output-> undefine
    // meaning if are there value for the price print price or print 200
    console.log(`the price is ${price || 200}`);
    console.log(`the price is ${price ?? 300}`);
*/
/* 037- IF challange 
//write this with ternary if
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a > 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log(">40");
} else {
  console.log("unknown");
}
//1-Answer of the [Ternary IF]
a < 10
  ? console.log(a < 10)
  : a > 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log(">40")
  : console.log("unKnown");

//2-output should be true
let st = "Elzero Web School";
if (typeof st === typeof "34") {
  console.log("good");
}

//3-output should be true [good]
if (typeof st === typeof "w") {
  console.log("good");
}

//4-output should be true [good]
if (typeof st !== "string") {
  console.log("good");
}
//5-output should be true [good]
if (typeof st === typeof (100).toString()) {
  console.log("good");
}
//6-output should be true [good]
if (typeof st === typeof "ElzeroElzero") {
  console.log("good");
}
// console.log((100).toString());
*/
/* 038-Switch_Statement 
    -Note that Expretion should be the same value and the same type
    let a=1;
    switch(Expresion(a)){
        case 1:
            //code Block;
            break;
        case 2:
            //code Block;
            break;
        case 3:
            //code Block;
            break;
        default:
            //code block
    }
    let day = 444;
    switch (day) {
       //if you put it in the first of the switch you should write the [break;]
    //   default:
    //     console.log("unKnown");
    //     break; 
      case 1:
        console.log("saterdey");
        break;
      case 2:
        console.log("sunday");
        break;
      case 3:
      case 4:
        console.log("modey");
        break;
      default: //if all cases don't found
        console.log("unKnown this day");
    }
*/
/* 039-Switch_And_If_Condition_Challenge
//Switch_And_If_Condition_Challenge

let jop = "Manager";
let salary = 0;
//1-convert [IF] TO [Switch]
//1-switch challenge
switch (jop) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}
//2-convert  [Switch] TO [IF]
//2-IF challenge
let holiday = 0;
let money = 0;
if (holiday === 0) {
  money = 5000;
  console.log(`my money is ${Number(money)}`);
} else if (holiday === 1 || holiday === 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holiday === 3) {
  money = 2000;
  console.log(`my money is ${money}`);
} else if (holiday === 4) {
  money = 1000;
  console.log(`my money is ${money}`);
} else if (holiday === 5) {
  money = 500;
  console.log(`my money is ${money}`);
} else {
  money = 0;
  console.log(`my money is ${money}`);
}

*/
/* 040-Array_Big_Introduction
    -create array[two methods] new array () +[]
    -Access array elements
    -nested Arrays
    -change arrays elements
    -check for array(Array.isArray(array_name))
    let myName = ["muhamed", "Elnayed", "Mahfouz"];
    console.log(`Hello ${myName[0]}`); //muhamed
    console.log(`Hello ${myName[1]}`); //Elnayed
    console.log(`Hello ${myName[1][2]}`); //n the element of index[1] and the carachter of index[2]
    //nested array
    let myName2 = ["muhamed", "Elnayed", "Mahfouz", ["eslam", "tarek"]];
    console.log(`Hello ${myName2[3][1]}`); //tarek
    console.log(`Hello ${myName2[3][1][3]}`); //e
    
    //change arrays elements
    console.log(myName); //['muhamed', 'Elnayed', 'mahfouz']
    myName[2] = "nour";
    console.log(myName); //['muhamed', 'Elnayed', 'nour']
    //Note you can change element with array or reverse
    console.log(myName2);
    myName2[3] = ["nour", "Gamal", "camal"];
    console.log(myName2);
    //-check for array(Array.isArray(array_name))
    
    console.log(Array.isArray(myName)); //true [isArray give you true or false]
*/
/* 041-Using_Length_With_Array
    -By length you can :
        ->knowing the length of the array
        ->Add  elements in array
        ->updata elements in array
        ->delete elements in array  
        EX:    let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa"];
            console.log(myFrinds.length);
            // myFrinds[myFrinds.length] = "jjj";//add value after end of the value
            myFrinds[myFrinds.length - 1] = "kkk"; //delete or updata the  last value or any value from the array
            
            myFrinds.length = 3; //meaning make number of array 3 element only
            
            console.log(myFrinds);

*/
/* 042-Add_And_Remove_From_Array 
    ->Array methods
     -unshift("items 1 that you want to add it","item2",....) using to [Add] element to the [first] of the array.
     -push("item1","item2",...)using to [Add] element to the [End] of the array.
    -shift() using  to [Remove] elemnt from [first] of the array
    -pop() using  to [Remove] elemnt from [End] of the array
    EX:  
        let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa"];
        console.log(myFrinds);
        //unshift
        myFrinds.unshift("fouad", "gamal", 3); //Add items from the frist
        console.log(myFrinds);
        //push
        myFrinds.push("foua", "amal"); //add items from the end
        console.log(myFrinds);
        //shift
        let first = myFrinds.shift();
        console.log(myFrinds);
        console.log(`my first name is :${first}`);//fouad
        //pop
        let last = myFrinds.pop();
        console.log(myFrinds);
        console.log(`my last name is :${last}`);//amal
*/
/* 043-Searching_Array
    -->Array methods [Search]
        -indexOf(search element,From index[option]) 
        -lastIndexOf(search element,From index[option]) 
        -includes(ValueToFind,fromIndex(option))[ES7] return [true or false]
    =>note if the value that you search about it  not founde will return [-1]
    let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa", "Ali"];
    console.log(myFrinds);
    //indexOf(the element that you want to search about it,the place that will start form it to search)
    console.log(myFrinds.indexOf("Ali")); //2
    console.log(myFrinds.indexOf("Ali", 1)); //5 [3] mening the start place if don't found he start from frist[index]
    
    //lastIndexOf(the element that you want to search about [from last to frist] it,the place that will start form it to search)
    console.log(myFrinds.lastIndexOf("Ali")); //5
    console.log(myFrinds.lastIndexOf("Ali", 3)); //2 AS HE start from last to first
    console.log(myFrinds.lastIndexOf("Ali", -3)); //2 start from (gamal) to (muhamed)AS HE start from last to first
    //include (the Value you want to find,start from [index])
    console.log(myFrinds.includes("Ali")); //true
    console.log(myFrinds.includes("abd", 2)); //false
    
    if (myFrinds.indexOf("abcd") === -1) {
      console.log("Not found");
    }
*/
/* 044-Sorting_Arrays[الترتيب]
    ->Array Methods[sort]
         -sorting[1,2,3,4,5,6,7,8,9],[a,b,c,d,....][في الارقام ملهش دعوه من الكبير بيرتب حسب]
         -reverse(عكس)using to reverse the element of the array 
         
         let myFrinds = [
           10,
           -10,
           -20,
           "15",
           "20",
           30,
           20,
           "muhamed",
           5,
           13,
           9,
           50,
           40,
           "abd",
           "Ali",
           "gamal",
           "mustafa",
           "Ali",
         ];
         console.log(myFrinds);
         //[10, -10, -20, '15', '20', 30, 20, 'muhamed', 5, 13, 9, 50, 40, 'abd', 'Ali', 'gamal', 'mustafa', 'Ali']
         console.log(myFrinds.reverse()); //befor doing sorting
         //['Ali', 'mustafa', 'gamal', 'Ali', 'abd', 40, 50, 9, 13, 5, 'muhamed', 20, 30, '20', '15', -20, -10, 10]
         console.log(myFrinds.sort());
         //[-10, -20, 10, 13, '15', '20', 20, 30, 40, 5, 50, 9, 'Ali', 'Ali', 'abd', 'gamal', 'muhamed', 'mustafa']
         console.log(myFrinds.reverse()); // after doing sorting
         // ['mustafa', 'muhamed', 'gamal', 'abd', 'Ali', 'Ali', 9, 50, 5, 40, 30, 20, '20', '15', 13, 10, -20, -10]
         */
/* 045-Slicing_Array
-Note [slice()] doing a new array
    ->slice (start[option](from first) ,end[option]not include end)
        -slic() without any value return [all Array]
        -if start  undefined [slice] start from index[0]
        -negative number start from [end]
        -return a new array 
        EX:
            //return all array
            let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa", "Ali"];
            console.log(myFrinds.slice()); //['muhamed', 'abd', 'Ali', 'gamal', 'mustafa', 'Ali']
            console.log(myFrinds.slice(1)); //['abd', 'Ali', 'gamal', 'mustafa', 'Ali'] meaning start from index[1]
            console.log(myFrinds.slice(1, 3)); //['abd', 'Ali'] meaning start from index[1] and [3] note [Not include end (3)]
            console.log(myFrinds.slice(-3)); //[ 'gamal', 'mustafa', 'Ali'] meaning start from index[-3] to the end of array
            console.log(myFrinds.slice(-3, -2)); //[ 'gamal'] meaning start from index[-3] to idex[-2]not include the end
            console.log(myFrinds.slice(1, -2)); //["abd", "Ali", "gamal"] meaning start from index[1] to idex [-2] not include the end
    
    ->splice()using to [add or delet from the array]:
        -Note in this function will doing a [change] in array
        -splice(start[mandatory],deletcount[option][0 for no remove],the items to add[optionn] )
        EX:
            let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa", "Ali"];
            //splice(index that you want to start from it ,number of the element that you want to delet it,value you  want to add it)
            // let ooo = myFrinds.splice(0, 0, "jjj", "kkk");
            // console.log(myFrinds);//['jjj', 'kkk', 'muhamed', 'abd', 'Ali', 'gamal', 'mustafa', 'Ali']
            // myFrinds.splice(0, 2, "jjj", "kkk");
            // console.log(myFrinds); //['jjj', 'kkk', 'Ali', 'gamal', 'mustafa', 'Ali']
            myFrinds.splice(2, 2, "omer", "tark");
            console.log(myFrinds); //['muhamed', 'abd', 'omer', 'tark', 'mustafa', 'Ali']
*/
/* 046-Joining_Arrays
        -Array methods [Join]
            -concat(array,array) ->Note return a New array and don't do change in the main array  
            -join(separator[العلامة الي هتفصل بين العناصر]) if don't found will put[,] 
            EX:
                let myFrinds = ["muhamed", "abd", "Ali", "gamal", "mustafa"];
                let muh = [1, 23, 4, 5, 6, 6];
                let mmm = ["K", "M", "H"];
                
                // let allff = myFrinds.concat(muh, mmm, "cskjksjcxsk", [333, 545555]);
                //['muhamed', 'abd', 'Ali', 'gamal', 'mustafa', 1, 23, 4, 5, 6, 6, 'K', 'M', 'H', 'cskjksjcxsk', 333, 545555]
                let allff = myFrinds.concat(muh, mmm);
                console.log(allff.join()); // set [,] between element
                //muhamed,abd,Ali,gamal,mustafa,1,23,4,5,6,6,K,M,H
                console.log(allff.join("")); //don't put any thing between element
                //muhamedabdAligamalmustafa1234566KMH
                console.log(allff.join("|")); // set [|] between element
                //muhamed | abd | Ali | gamal | mustafa | 1 | 23 | 4 | 5 | 6 | 6 | K | M | H;
                console.log(allff.join("@")); // set [@] between element
                //muhamed@abd@Ali@gamal@mustafa@1@23@4@5@6@6@K@M@H
                console.log(allff.join("@").toUpperCase()); // to insure that you dealing with string
                //MUHAMED@ABD@ALI@GAMAL@MUSTAFA@1@23@4@5@6@6@K@M@H
*/
/* 047-Array_Challenge
let zero = 0;
let counter = 3;
let my = ["Ahamed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my.slice(zero, my.length + 1 - counter).reverse()); //['Osama', 'Elham', 'Mazero', 'Ahamed']
console.log(my.slice(my.length - 2 - counter, my.length - counter).reverse()); //['Elham', 'Mazero']
console.log(my[2].slice(zero, my.length - 1 - counter) + my[1].slice(2)); //Elzero
console.log(
  my[1].slice(my.length + 1 - counter, my.length + 2 - counter) +
    my[1].slice(my.length + 2 - counter).toUpperCase()
); //rO
 */
/* 048-Loop_-_For_And_Concept_Of_Loop
 for (let i=0;i<10;i++)
 {    console.log(i)}
 */
/* 049-Looping_On_Sequences 
let myFrinds = ["muhamed", "Ali", "Nor", "Gamal", 1, 2, 43, 5, 6, 7, "amal"];
let onlyNames = [];
 for (let i = 0; i < myFrinds.length; i++) {
  console.log(`my friends index ${i} is ${myFrinds[i]}`);
}
 
for (let i = 0; i < myFrinds.length; i++) {
  if (typeof myFrinds[i] === "string") {
    onlyNames.push(myFrinds[i]);
    console.log(onlyNames);
  }
}
console.log(onlyNames);
*/
/* 050-nested loop 
let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
let colors = ["red", "green", "yello", "blue"];
let models = ["2022", "2023"];

for (let i = 0; i < product.length; i++) {
    console.log("#".repeat(15));
  console.log(`# ${product[i]}`);
  console.log("#".repeat(15));
  console.log("Colors : ");
  for (let l = 0; l < colors.length; l++) {
    console.log(`- ${colors[l]}`);
  }
  console.log("#".repeat(15));
  console.log("Models : ");
  for (let j = 0; j < models.length; j++) {
      console.log(`-> ${models[j]}`);
    }
}
*/
/* 051-Loop_Control->_Break,_Continue,_Label
    -Break it's using to stop the loop
    -Continue : it's using to don't import with this value and contiue 
    -Label[identifire] it's using to can control in the[parent loop] when you in the[child loop] 
    EX:
        let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
        let colors = ["red", "green", "yello", "blue"];
        //mainloop calling label using in case you want to contorl with the parent from the child
        mainloop: for (let i = 0; i < product.length; i++) {
        if (typeof product[i] === "number") {
            continue;}
        console.log(product[i]); //not you should write it before the if to print the last value in the condtion
        childloop: for (let j = 0; j < colors.length; j++) {
            console.log(` -  ${colors[j]}`);
            if (colors[j] === "yello") {
            break mainloop; //the [mainloop] will stop after finding [colors yello]
            }
        }
        }
*/
/* 052-Loop_-_For_Advanced_Example
let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
let colors = ["red", "green", "yello", "blue"];
let i = 0;
for (;;) {
  //   i++; //if you put it here you will start from index [1] out ["mouse","kesa",.....]
  console.log(product[i]);
  i++; //you should write it here after the print to start from the first of the array["keboard","mouse","kesa",.....]
  if (i === product.length) break;
}
 */
/* 053-loop Practice_[Advanced]-_Add_Products_To_Page
    EX: let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
        let colors = ["red", "green", "blue"];
        let Count_Of_product = 3;
        document.write(`<h2>show the count of product ${Count_Of_product} </h2>`);

        for (let i = 0; i < Count_Of_product; i++) {
        document.write(`<div>`);
        document.write(`<h3>=> [${i + 1}] ${product[i]}</h3>`);
        document.write(`</div>`);
        for (let j = 0; j < colors.length; j++) {
            document.write(`<p>${colors[j]}</p>`);
        }
        document.write(`<p>${colors.join("  |  ")}</p>`);
        }

*/
/* 054-loop While
        1-variable
        2-while(condition){
            block of code 
            3-increament or any thong you want
        }
        EX:
            let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
            let colors = ["red", "green", "blue"];
            let index = 0;
            while (index < product.length) {
            console.log(product[index]);
            index++;
            }

*/
/* 055-loop DO While
        in DO while the first stp will happend in all cases
        Ex:    
            let product = ["keyboard", "mouse", "kesa", "loader", "kanal", "moniter"];
            let i = 0;
            while (false) {
            console.log(i); //will not print any thing
            i++;
            }
            console.log(i); //0
            console.log("#".repeat(10)); //meaning repeat the #
            do {
            console.log(i); //will do first step and break
            i++;
            } while (false);
            console.log(i); //1
*/
/* 056-Loop_-_Challenge 

//056-Loop Challenge
//my work 
let myAdmins = ["Ahamed", "Osama", "sayed", "stop", "muhamed"];
let myEmployees = [
  "Amged",
  "Ameer",
  "Amany",
  "Omer",
  "Othman",
  "samia",
  "sra",
  "Omran",
  "Ooooooo",
];
document.write(`<div>WE Have X  Admins</div>`);
document.write(`<div>WE Have ${myAdmins.indexOf("stop")}  Admins</div> <hr>`);
for (let i = 0; i < myAdmins.length; i++) {
  let count = 1;
  document.write(`<div>`);
  if (myAdmins[i] === "stop") {
    break;
  }
  document.write(`The Admin For Team ${i + 1}  Is   ${myAdmins[i]} `);
  document.write(`<h2>Team Members : </h2>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
      document.write(`<p>  ${count} - ${myEmployees[j]}<p> `);
      count++;
    } else {
      continue;
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}
//Elzero work
// let myAdmins = ["Ahamed", "Osama", "sayed", "stop", "muhamed"];
// let myEmployees = [
//   "Amged",
//   "Ameer",
//   "Amany",
//   "Omer",
//   "Othman",
//   "samia",
//   "sara",
// ];
// if (myAdmins.indexOf("stop") !== -1) {
//   myAdmins.length = myAdmins.indexOf("stop");
// }
// document.write(`<div>WE Have X  Admins</div>`);
// document.write(`<div>WE Have ${myAdmins.length}  Admins</div> <hr>`);
// for (let i = 0; i < myAdmins.length; i++) {
//   let counter = 1;
//   if (myAdmins[i] === "stop") {
//     break;
//   }
//   document.write(`<div>`);
//   document.write(`<h3>The Admin For Team ${i + 1}  Is   ${myAdmins[i]} <h3>`);
//   document.write(`<h2>Team Members : </h2>`);
//   let firstchar = myAdmins[i].charAt(0);
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (firstchar !== myEmployees[j].charAt(0)) {
//       continue;
//     }
//     document.write(`<p>  ${counter} - ${myEmployees[j]}<p> `);
//     counter++;
//   }
//   document.write(`<hr>`);
// }
// console.log(myAdmins.length);

*/
/* 057-Function_Intro_And_Basic_Usage 
    EX:
        function sayhello(userName) {
        console.log(`Hello  ${userName}`);
        }
        sayhello("muhamed");
        sayhello("Ali");
        sayhello("gamal");
        sayhello("Jalal");


*/
/* 058-Function_Advanced_Examples 
    EX:
            function sayhello(start, end, exclude) {
          for (let i = start; i <= end; i++) {
            if (i === exclude) {
              continue;
            }
            console.log(`${i}`);
          }
        }
        sayhello(1999, 2023, 2022);

*/
/* 059-Function_Return_And_Use_Cases 
        -Return
        -Automatic semicolon insertion[no line terimenator allod]
          EX:
          retrun //will insert [;] automatic
            nm1+num2
        -interrupttion
EX:
  function sayhello(start, end) {
    for (let i = start; i <= end; i++) {
      if (i === 15) {
        return `interabted`;
      }
      console.log(`${i}`);
    }
  }
  sayhello(10, 20);
        */
/* 060-Function_Default_Parameters
      ->Default function parameter it's doing with three method
        1-with using condtion
        2-variableName =variableName || "value of the default parameter if case not found"
        3-by using[ES6] by writing it in the function
         EX: function sayHello(username="not found",age ="NOt Known")
EX:
         function sayHello(username = "Not Found", age = "Unequal") {
  //1- if (age === undefined) {
    //   age = "UnKnown";
    // }
    //2-age = age || "unknown";
    return `Hello ${username} Your Age is ${age} `;
  }
  console.log(sayHello());

 */
/* 061-Function_Rest_Parameters
    -Reset parametar =>using in case you don't Know the number of parametares 
      the way of writing is [trible (dot) + the name of parameter ]
      EX :
        function sayhello(...number)  
    -Note the rest parameter [Only one Alllowed ]meaning put only once 
       EX: function sayHello(...number,...number) {}//that is error
       
    -Must be the last element;
EX:
    function sayHello(...number) {
    // console.log(typeof number); //Object
    // console.log(Array.isArray(number));//it's using in case you want to know are this thing array or not [true  , false ]
    let result = 0;
    for (let i = 0; i < number.length; i++) {
      result += number[i];
    }
    return `the collectionof numbares is [${result}] `;
  }
  console.log(sayHello(10, 20, 30, 80, 50));
*/
/* 062-Function_Ultimate_Practice
EX:
function showInfo(us = "un", ag = "un", rt = 0, show = "yes", ...sk) {
  document.write(`<div`);
  document.write(`<h3>Your name is : "  ${us}  "</h3>`);
  document.write(`<p>Your Age  is : [  ${ag}  ]</p>`);
  document.write(`<p>Your Hour Rate  is : [ $ ${rt}  ]</p>`);

  if (show === "yes") {
    if (sk.length > 0) {
      // document.write(`<p>your skills : ${sk.join("|")}</p>`);
      document.write(`<p>your skills :</p>`);
      for (let i = 0; i < sk.length; i++) {
        document.write(`<p>&nbsp&nbsp- "${sk[i]}"</p>`);
        // document.write(`<br>`);
      }
    } else {
      document.write(`<p>your skills : No Skilles</p>`);
    }
  } else {
    document.write(`<p>You Don't Have any skilles</p>`);
  }
  document.write(`</div`);
}
document.write(showInfo("muhamed", 24, 20, "yes", "HTML", "CSS", "JS"));

*/
/* 063-Random_Arguments_Function_Challenge
function showDetails(name, age, status) {
  let strinG, numbeR, booleaN;
  typeof name === "string"
    ? (strinG = name)
    : typeof age === "string"
    ? (strinG = age)
    : (strinG = status);
  typeof age === "number"
    ? (numbeR = age)
    : typeof name === "number"
    ? (numbeR = name)
    : (numbeR = status);
  typeof status === "boolean"
    ? (booleaN = status)
    : age === "boolean"
    ? (booleaN = age)
    : (booleaN = name);

  return `<h3>Hello ${strinG} , Your age is : ${numbeR} ,${
    booleaN ? "Are" : "Are not "
  } available for  hire</h3>
  `;
}
document.write(showDetails("muhemed", 23, false));
document.write(`<br>`);
document.write(showDetails(13, "muhamed", true));
*/
/* 064-Anonymous_Function_And_Practice
-Note if you set the normal function in any where it will work
but the anonymous function don't work else after intialize the function 
    -Anonymous_Function(الدوال مجهولة الهوية)
    it's using whene doing buttons
     it's meaning you can use it without [the name]  by seting it in [varaible]
     EX:
     let calc=function(num1,num2){
      return num1+num2;
     }
  ==>let calc=function calccc(num1,num2){//you can 
    write the name of function but you cann't use it and it's write to can accsess the error 
    and knowing his place
      return num1+num2;
     }
     console.log(calc(10,15));
EX:
     let calc = function mu(n1, n2) {
       return n1 + n2;
     };
     console.log(calc(3, 6));
     function sayHowAreYou() {
       document.write("How Are You  Muhemed");
     }
     document.getElementById("show").onclick = function () {
       console.log("show");
     };
     document.getElementById("show").onclick = sayHowAreYou();
     //
     //it's using to do any action in any time you determinat it
     setTimeout(function () {
       document.write("Good Morning"); //setTimeout arguement [function]
     }, 3000);
*/
/* 065-Return_Nested_Function
//EX : 1
    -Function inside  function
     -return function

     function sayhello(fname, lname) {
       let message = "Hello";
       function concat() {
         message = `${message} ${fname} ${lname}`;
       }
       concat();
       return message;
     }
     console.log(sayhello("muheme", "Elnayed")); 
     //EX: 2
     
     function sayhello(fname, lname) {
       let message = "Hello";
       function concat() {
         return `${message} ${fname} ${lname}`;//chang to return to comback as a value 
       }
     
       return concat(); // return the function as a value
     }
     console.log(sayhello("muheme", "Elnayed"));
     
     // EX : 3
     
     function sayhello(fname, lname) {
       let message = "Hello";
       function concat() {
         function getFullName() {
           return `${fname} ${lname}`;
         }
         return `${message} ${getFullName()}`; //chang to return to comback as a value
       }
     
       return concat(); // return the function as a value
     }
     console.log(sayhello("muheme", "Elnayed"));
*/
/* 066-Arrow_Function_Syntax
     ->Arrow function=>using  in case you are using [onle one statment] important
     ->syntax
        -delete [keyward (function)]
        -delet [keyword (return)]
        the way of writing [()=>process ] OR [ _=>process  ( _ undeerscore)]
          Ex:
              let print = () => 20;
              let print = _ => 20;
              console.log(print());// output the same 
    ->Adding parametars 
     Note in case you have onle one parameter you can delete two practice ()
     EX:
        let print = num => 20;

        let print = (num1,num2) => 20; in this case you can't delet the practice as there are
         two parameter
         // let print = () => 20;
         // let print = () => 20;
         // let print = function (num) {
         //   return 20;
         // };
         let print = (num1, num2) => num1 + num2;
         
         console.log(print(100, 90));

*/
/* 067-Scope_-_Global_And_Local
     scope meaning How to control the variable in [Global or Local variable]  
     Note  in case of run the [pointer] start with local scope that he in it 
EX:  
  var a = 1;
  let b = 2;
  function showText() {
    var a = 10;
    let b = 90;
    console.log(`your scope funcontion is ${a} `); //  10 not 1
    console.log(`your scope funcontion is ${b} `); //  90 not 2
  }
  showText();
     
*/
/* 068-Scope_-_Block
    scope_block like (For ,switch ,if)
  ->Note [var] not block of scope  => meaning you can use it in the out or inside
   the block as a same
    EX:
      var a=1;
      var b=2;
      if (1===1){
      a=20
      }
      console,log(a);//20  not 1 because var not block scope[ don't respect the scope]  
EX:
  var a = 1;
  var b = 2;
  if (1 === 1) {
    console.log(`this is the local scope ${a}`);
    // let a = 20;in this case will give you error if it come after the print
    //if deleted will take the value from the global scope
  }
  console.log(`this is the local scope ${a}`);


*/
/* 069-Scope_-_Lexical_(Static)
  lexical scope meaning you can't use variable from child in parent

->search :
    -Excution context
    -lexical Environment
*/
/* 070-Arrow_Function_Challenge
let result = 0;
///...name is the rest parameters he is an [array]
let names = function (...name) {
  for (let i = 0; i < name.length; i++) {
    // result = name[i];
    return `String  [${name[i]}] =>Done ! `;
    console.log(`String  [${name[i]}] =>Done ! `);
  }
};
// console.log(names("Osama", "Muhamed", "Ali", "Ibrahim"));

//###################################################################

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

const namess = (...allNames) =>
  "String " +
  (() => {
    let answer = "";
    for (let word of allNames) {
      answer += `[${word}], `;
    }
    return answer.slice(+false, answer.length - (true + true));
  })() +
  " => Done !";

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// Another Solution With Higher Order Functions: -

// const names = (...all) =>
//   "String " +
//   all.reduce(
//     (acc, cur, i) =>
//       i != all.length - 1 ? `${acc}[${cur}], ` : `${acc}[${cur}] `,
//     ""
//   ) +
//   "=> Done !";


// * ================================ * 

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// Arrow Function
let calc = (one, two, ...nums) => one + two + nums[+false][+true];

// Regular Syntax

// function calc(one, two, ...nums) {
//   return one + two + nums[+false][+true];
// }

console.log(calc(10, myNumbers[+false], myNumbers)); // 80

 */
/* 071-Higher_Order_Functions_-_Map
   -is a function that accept function as a parameter and/or return a function
   ->map:
    -syntax map(callbackfunction(element ,index[option] ,array[option]){},thisargument)
        -element->the current element being processed in the array[the element]that I dealing with it in the same time
        -index  ->the index of the current element being processed in the array
        -Array  ->the current array
      -it's a method accept a new array.
    -Note the map return a new  array [important]
    -Examples:
      -Anonimace function
      -named function
  EX:
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      newArray.push(myArray[i] + myArray[i]);
    }
    console.log(newArray);
    // let tesMap = myArray.map(function (element, index, arr) {
    //   // console.log(`the current element : ${element}`); //the element of the current element
    //   // console.log(`the current index : ${index}`); //the index of the current element
    //   // console.log(`Arrey : ${arr}`); //myArray
    //   // console.log(`This Argument : ${this}`); //
    //   return element + element;
    // }, 10);
    
    //Arrow function
    // let tesMap = myArray.map((element) => element + element);
    let tesMap = myArray.map((e) => e + e); //another way
    console.log(tesMap);
    
    function add(ele) {
      return ele + ele;
    }
    let ff = myArray.map(add);
    console.log(`the addition function ${ff}`);
    console.log(ff);
*/
/* 072-Higher_Order_Functions_-_Map_Practice
let swCasing = "MUhameD";
//note using split to convert the string to array
// let swcc = swCasing
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(swcc);

//Arrow function
let swcc = swCasing
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");
console.log(swcc);
//###########################################################################
let convertNumber = [1, -2, 4, -5, -6, 7, -9];
// let convreNum = convertNumber.map(function (ele) {
//   // return ele === +ele ? -ele : ele;
//   return -ele;
// });
// console.log(convreNum);

// let ignorNumber = "MUH12AM34ED";
// let ignum = ignorNumber
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ignum);

//Arrow Function
let convreNum = convertNumber.map((ele) => -ele);
console.log(convreNum);

// let ignorNumber = "MUH12AM34ED";
// let ignum = ignorNumber
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ignum);
let ignorNumber = "MUH12AM34ED";
let ignum = ignorNumber
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(ignum);
*/
/* 073-Higher_Order_Functions_-_Filter 
Note :
      IN [map] doing action with it 
      IN  [filter] doning filteration for the element that you od test for it

    filter =>using to comeback the element that pass the test
        -create a new array with all element that pass from the test implemented by the function

    -syntax filter(callbackfunction(element ,index[option] ,array[option]){},thisargument)
        -element->the current element being processed in the array[the element]that I dealing with it in the same time
        -index  ->the index of the current element being processed in the array
        -Array  ->the current array
        -it's a method accept a new array.
   -Note the filter return a new  array [important]
  -Examples:
      -Anonimace function
      -named function
EX:
  let friends = ["Muhemed", "Ali", "Amir", "Gamal", "Mustafa", "Mahmoud"];
  //search about element that start   with "M"
  let frindfileter = friends.filter(function (ele) {
    //startWith function that used to search about any thing you want
    return ele.startsWith("M");
  });
  console.log(frindfileter);
  //search about even the element
  let number = [1, 23, 4, 5, 6, 6, 7, 8, 11, 22];
  // Arrow function
  let numfileven = number.filter((ele) => ele % 2 === 0);
  let numfilodd = number.filter((ele) => ele % 2 !== 0);
  // let numfil = number.filter(function (ele) {
  //   return ele % 2 === 0;
  // });
  
  console.log(numfileven);
  console.log(numfilodd);

*/
/* 074-Higher_Order_Functions_-_Filter_Practice
EX:
    let sentece = "I love Foood code too playing much";
    let sentecefilter = sentece
      .split(" ")
      .filter(function (ele) {
        return ele.length <= 4;
      })
      .join(" ");

    console.log(sentecefilter);

//Map and Filtering together
    let fM = "A13BS2ZX";
    let fm = fM
      .split("")
      .filter(function (ele) {
        return !isNaN(parseInt(ele));
      })
      .map(function (ele) {
        return ele * ele;
      })
      .join("");

    console.log(fm);


*/
/* 075-Higher_Order_Functions_-_Reduce
      -method executes a reduce function on each element of the array resulting 
      in a single output value .  
      -syntax:
          reduce(callbackfunc(Acumalator,current value,index of current va,array){},intial value of the array)
           -Accumulator[المخزن]=>he accumulated[يخزن] value
           -current=>the currnt element being processed in the array
           -index :is the index of the current vslue
           -Array is the current array
           -intial value is the value that the accumulator start from 
            if note found the reduce will start from index 0 of the array
EX:
  let num = [10, 20, 15, 30];
  let numReduce = num.reduce(function (acc, current, index, arr) {
    console.log(`the accum : ${acc}`);
    console.log(`the current : ${current}`);
    console.log(`the index of the current value  : ${index}`);
    console.log(`Array :  ${arr}`);
    console.log(`${acc + current}`);
    console.log("###########################");
    return acc + current;
  }, 5); //5 meaing the intial value that will start from is it [5 like you set an element in the array]
  
  
  console.log(numReduce);
*/
/* 076-Higher_Order_Functions_-_Reduce_Practice
EX:
let bigs = ["bla", "propagande", "lll", "other", "information_of", "your_name"];
let biglett = bigs.reduce(function (acc, current) {
  console.log(`the accumulator is : ${acc}`);
  console.log(`the current value is : ${current}`);
  console.log(
    ` the bigist value is :  ${acc.length > current.length ? acc : current}`
  );
  console.log("#".repeat(15));

  return acc.length > current.length ? acc : current;
});
console.log(biglett);

let remChar = ["M", "#", "#", "U", "H", "@", "A", "M", "E", "@", "D"];
let findname = remChar
  .filter(function (ele) {
    return !ele.startsWith("@") && !ele.startsWith("#");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(findname.toLowerCase());
*/
/* 077-Higher_Order_Functions_-_ForEach_And_Practice
      -forEach:it's like the map but [it's not generate a new array]
      ->Note doesn't return any thing [undefined]
      ->break will not break the loop
      -syntax map(callbackfunction(element ,index[option] ,array[option]){},thisargument)
        -element->the current element being processed in the array[the element]that I dealing with it in the same time
        -index  ->the index of the current element being processed in the array
        -Array  ->the current array
EX:
        let alllis = document.querySelectorAll("ul li");
let alldivs = document.querySelectorAll(".content div");
alllis.forEach(function (ele) {
  ele.onclick = function () {
    // remove the class active from all elements
    alllis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //add element to this onclick onle
    this.classList.add("active");
    //if he click on any li the divs will hiden
    alldivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
*/
/* 078-Higher_Order_Functions_-_Challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,s,c,h,o,o,l,2,0,z";
let solution = myString
  .split(",")
  .filter(function (element) {
    return isNaN(parseInt(element)) ? element : "";
    //['EE', 'l', 'z', 'e', 'r', 'o', '_', 'W', 'e', 'b', '_', 's', 'c', 'h', 'o', 'o', 'l', 'z']
  })
  .map(function (element) {
    return element != "_" ? element : " ";
    //['EE', 'l', 'z', 'e', 'r', 'o', '', 'W', 'e', 'b', '', 's', 'c', 'h', 'o', 'o', 'l', 'z']
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
    //EElzeroWebschoolz
  });
console.log(solution.slice(1, -1));
//###########################################################

*/
/* 079-Object_-_Introduction
 Object it's contine about propertes and method
    -testing widow opject 
    -Accessing object
EX:
    let user = {
      //propertes
      myName: "Muhamed",
      myAge: 23,
      //Method
      sayHello: function () {
        return `Hello ${this.myName}`;
      },
    };
    console.log(user.sayHello());
*/
/* 080-Dot_Notation_vs_Bracket_Notation
    -to can access about name not identefire you should write it in the bracket notation []
    -note you can write the identfire name with the same way
    -dynamic property name like EX: let myvar="country"
      you can't use the myvar with dot you should use the [breacket notation]  
EX:  
  let myvar = "country";
  let user = {
    name: "muhemed",
    "my age is ": 30, //not identfire name to can call it you should write it in the[]
    100: "MUHAME",
    country: "Egypt",
  };
  
  console.log(user["my age is "]); //not identfire name
  console.log(user[100]); //not identfire name
  console.log(user.name); //identfire name
  console.log(user["name"]); //identfire name
  console.log(user.country);//egypt 
  console.log(user.myvar);//undefine don't work as not betwean bracket
  console.log(user[myvar]);//will work Note without qutation  

*/
/* 081-Nested_Object_And_Advanced_Trainings
EX:
let Available = true;
let user = {
  name: "muhamed",
  age: "24",
  skill: ["HTML", "CSS", "JS"],
  Available: false,
  address: {
    //nested object
    ksa: "Ryad",
    egypt: {
      //another nested object
      one: "cairo",
      two: "Minia",
    },
  },
  checkdv: function () {
    if (user.Available === true) {
      // if (Available === true) {//come the value from the global scope
      //if you write the available alony he will give you error
      //in this case he search about available in  the global scope
      return `That is good muhamed`;
    } else {
      return `That is Bad`;
    }
  },
};

console.log(user.name); //muhamed
console.log(user.age); //24
console.log(user.skill); //['HTML', 'CSS', 'JS']
console.log(user.skill.join(" | ")); //HTML | CSS | JS
console.log(user.skill[1]); //CSS
console.log(user.Available); //false
console.log(user.address); //all object with nested object
console.log(user.address.ksa); //Ryad
console.log(user.address.egypt); //all object
console.log(user.address.egypt.one); //cairo
console.log(user.address.egypt.two); //Minia
console.log(user.checkdv()); //this is bad  [as Availabe:false ]
*/
/* 082-Create_Object_With_New_Keyword
    syntax
    let use=new object();
EX:
    //way of using keywords [new]
    
    let user = new Object({
      age: 40,
    });
    
    // let user = {age:19};
    //adding propertes to object
    console.log(user);
    user.age = 24; //Note will do update for the age that is in the object
    user.name = "Muhamed";
    //another way to add property or method
    user["age_2"] = 23;
    user["name_2"] = "elnayed";
    user.sayHello = function () {
      return `Hello muhamed`;
    };
    console.log(user.name);
    console.log(user.name_2);
    console.log(user.age);
    console.log(user.age_2);
    console.log(user.sayHello());
*/
/* 083-This_Keyword
    if you write this in the console will comeback the object [window] 
    console.log(this);
    -note the [this] [تعودعلي المالك]
    -[this] inside object method
      ->when a function is called as a method of an object 
        it's [this ] is set to the object the method is calling on
EX:
  console.log(this); //window{}
  console.log(this === window); //true
  varss = 100;
  console.log(window.varss); //100
  console.log(this.varss); //100
  function sayHello() {
    return this;
  }
  console.log(sayHello()); //window
  console.log(sayHello() === window); //true
  //if he click on the button  add it in the console
  document.getElementById("show").onclick = function () {
    console.log(this);
  };
  
  let user = {
    age: 24,
    ageInDays: function () {
      //[this ] meaing the woner of this function is this user and you can write it [user.]or [this]
      console.log(this === user); //true
      console.log(this); // the object
      return this.age * 365;
    },
  };
  console.log(user.age);
  console.log("#".repeat(30));
  console.log(user.ageInDays());
search:
   -strict mode
  */
/* 084-Create_Object_With_[Create_Method]
    -create method :
      syntax:Object,create(Object to use as a prototype)

     -[this] is depend on the object that calling this method not another thing
EX:  
  // let user = {
  //   age: 20,
  //   doubleage: function () {
  //     return user.age * 2;
  //   },
  // };
  let user = {
    age: 20,
    doubleage: function () {
      return this.age * 2;
    },
  };
  console.log(user.age); //20
  console.log(user.doubleage()); //40
  //create using to create  an object that has the specified prototype or that has null prototype.
  let nobj = Object.create({});
  // let nobj = new Object.create({}); //Not equal the let nobj = Object.create({})
  
  nobj.age = 100;
  console.log(nobj); //{age:100}
  let othobj = Object.create(user);
  othobj.age = 30; //not will uppdate the value in object[othobj] and don't doing the function
  //because you write object [user] not [this]
  console.log(othobj);
  console.log(othobj.age);
  console.log(othobj.doubleage());

*/
/* 085-Create_Object_With_[Assign_Method]
  -assign (target || {},any number of object)method
  target:it's using to Copy the values of all of the enumerable
   own properties from one or more [source objects] to a target object.
   Returns the target object.
--shortly->the targete copy all properties from all object and return the target
--Note the target may be space not should be found  
EX:
let obj1 = {
  prop1: 120,
  meth1: function () {
    return this.prop1;
  },
};
let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetobj = {
  prop1: 100,
  prop3: 3,
};

let fullobject = Object.assign(targetobj, obj1, obj2); //copy all properties from[ targetobj and obj1]
//and save theme in the fullobject
//note if  there are two properties have the same name he will copy the fist one in the object1
//shortly take the first one he get it
fullobject.prop5 = 444;
console.log(fullobject);

let newobje = Object.assign({}, obj2, { age: 30, name: "Muhamed" }); //{} meaning target may be space to add about it

console.log(newobje);
*/
/* 086-[DOM] What_Is_[DOM] _And_Select_Elements
  ->DOM=>Document object Model
  ->you can get the element by more way
  // document is an object continue all methed that use to can control all element
EX:
  //1-method of getElementById()
  let my_Id_Element = document.getElementById("my-div");
  console.log(my_Id_Element); //<div id="my-div">My div</div>
  
  //2-method of getElementsByTagName()
  let my_Tag_Elements = document.getElementsByTagName("p"); //return all paragraps in the page[Note the (s) in elements ]
  console.log(my_Tag_Elements); //will return the collection of all paragraphs//HTMLCollection(2) [p, p] an array
  //to can access or get  any one by index EX:
  console.log(my_Tag_Elements[0]);
  //by this ways you can do any thing about the element EX:
  my_Tag_Elements[1].innerHTML = "test"; // meaing make this tag value is "test"
  
  //3-method of getElementsByClassName()
  
  let my_class_element = document.getElementsByClassName("my-span"); //Note that the class not uniqe like the id
  console.log(my_class_element[0]);
  
  //4-method of querySelector()
  
  let querySelectorelement = document.querySelector(".my-span"); //you can write any thing you wnat to write it
  //like class or tage or id or any name you are use it in the HTMl page
  //note if are there more class with the same name [querySelecto()] will return  the first one
  // to can return all you should use querySelectoAll()
  //5-method of querySelectorAll()
  let querySelectorAllelement = document.querySelectorAll(".my-span");
  console.log(querySelectorelement); //first span only
  console.log(querySelectorAllelement); //ALL CLASS with the same neme in array to can access any one by index
  console.log(querySelectorAllelement[1]); //will return the span 2
  
  //you can get the element direct without method EX:
  //title ,links,forms,body and another
  console.log(document.title); //title of the html page
  console.log(document.body); //body of html
  console.log(document.forms); //all forms in html page tocan access by index
  console.log(document.forms[1]); //all forms in html page tocan access by index
  // console.log(document.forms[index].name of the form.value); //all forms in html page tocan access
  // by index and you can change the value in this form
  console.log((document.forms[1].two.value = "My name is Muhemd")); //all forms in html page tocan access by index
  
  console.log(document.links); //all links in the page
  console.log(document.links[0]); //the link with index [0]
  console.log(document.links[1]); //the link with index [1]
  console.log(document.links[1].href); //return the value of the href [https://google.com/]

 */
/* 087-[DOM] Get_Set_Elements_Content_And_Attributes
    -Dom [get and set elements and Attribute and chenge it]
    -innerHtml->return all content of the  tege
        [text ,html tage or any thing found between tage]
    -textContent->return onle all text not another any thing
    -change attribute [Directly] 
    -change attribute [with methods]
      method_attribute.getAttribute(name of attribute that will get)//the attribute will return
      method_attribute.setAttribute(name of attribute that will set,new value)//the attribute will return and the action will habend
    
    search:
  -innertext
EX:
  let myelement = document.querySelector(".JS");
  console.log(myelement.innerHTML); //Javascript <span>Div</span> &lt;span&gt;
  console.log(myelement.textContent); //Javascript Div <span>
  
  myelement.innerHTML = "Text From <span>main.js</span>file"; 
  //HTML tage will appear as a [tage]

  myelement.textContent = "Text From <span>main.js</span>file"; 
  //HTML tage will appear as a [text]
  
  //change attribute [Directly]
  document.images[0].src = "http://Google.com"; //will change the [src]
  document.images[0].alt = "My picture "; //will change the [alt]
  document.images[0].title = "Mypc "; ////will Add the [title ] if not found
  document.images[0].id = "pic "; ////will Add the [ID] if not found
  document.images[0].className = "our_picture "; ////will Add the [Class] if not found ,butif found will update
  
  //change attribute [with methods]
  
  let methattribute = document.querySelector(".link");
  
  console.log(methattribute.getAttribute("href")); //# -> meaing the link
  console.log(methattribute.getAttribute("class")); //link -> the name of the class
  methattribute.setAttribute("class", "newlink"); //change name of the class to [newlink]
  methattribute.setAttribute("href", "http://twitter.com"); //change name of the href to [http://twitter.com]
  methattribute.setAttribute("title", "Muhamed"); //will add title if not found else will update
*/
/* 088-[DOM] Check_Attributes_And_Examples
  ->DOM[check Attributes]
    -Eelement.attribites =>return list[array] of  all attributes found in this element
    -element.hasAttribute
    -element.hasAttributes
    element.removeAttribute
EX:
    console.log(document.getElementsByTagName("p")[0].attributes); //[2]); //return or get all attributes for
    //the first paragarph you should write specify index to get about it attributes[0,1,2]
    let my_att = document.getElementsByTagName("p")[0];
    //hasAttribute and removeAttribute
    if (my_att.hasAttribute("data-src")) {
      console.log(
        `This attribute is Found : data-src:" ${my_att.getAttribute(
          "data-src"
        )}" class: "${my_att.getAttribute("class")}" `
      );
      if (my_att.getAttribute("data-src") === "") {
        // my_att.removeAttribute("data-src"); //if space remove
      } else {
        my_att.setAttribute("data-src", "New_value"); //change his name
      }
    } else {
      console.log(`Not Found`);
    }
    
    //hasAttributes -> return [true or false]
    if (my_att.hasAttributes()) {
      console.log(`Has Attribute : ${my_att.getAttributeNames()}`);
    }
    if (document.getElementsByTagName("div")[0].hasAttributes()) {
      console.log("Has Attribute");
    } else {
      console.log("Don't Has Attribute");
    }
*/
/* 089-[DOM] Create_And_Append_Elements Imoprtant 
    DOM-> create Element
      1-createElement 
      2-createComment
      3-createTextNode
      4-createAttribute
      5-AppendChild
EXs:
  //1-createElement:
  let myElement = document.createElement("div");
  
  //2-createComment:
  let myComment = document.createComment("This My Div");
  
  //3-createTextNode;
  let myText = document.createTextNode("My Name is Muhamed El-Nayed");
  
  //4-createAttribute;
  let my_fut_cl = document.createAttribute("my_future_class"); //create attribute you can use it in the future
  myElement.className = "product";
  myElement.setAttribute("my_def_class", "default_class");
  myElement.setAttributeNode(my_fut_cl); //create attribute you can use it in future
  
  //5-appendChild
  //Append comment to the element
  myElement.appendChild(myComment);
  //Append text to the element [form end of the element]
  myElement.appendChild(myText);
  //Append Element to Body
  document.body.appendChild(myElement);
*/
/* 090-[DOM] Product_With_Title_And_Description_Practice
EX:
//will repeat this 100 once
for (let i = 0; i < 100; i++) {
  let myDiv = document.createElement("div");
  let myh3 = document.createElement("h3");
  let myh3Text = document.createTextNode(`My header text number : ${i + 1}`);
  let myp = document.createElement("p");
  let mypText = document.createTextNode(`My paragraph text number : ${i + 1}`);
  let myhr = document.createElement("hr");
  myDiv.className = "product";
  //add text to h3
  myh3.appendChild(myh3Text);
  //add text to p
  myp.appendChild(mypText);
  //add h3 and p to h3
  myDiv.appendChild(myh3);
  myDiv.appendChild(myp);
  myDiv.appendChild(myhr);
  document.body.appendChild(myDiv);
  // console.log(myDiv);
  // document.body.appendChild(myhr);
}
*/
/* 091-[DOM] Deal_With_Children's 
      -without format on save
      -children-> return all element name that found in the parent
      -childNodes -> return evrey thing in the element [text,element,comment,.. ]
      -firstchild
      -lasttchild
      -firstElementchild
      -lastElementchild
EX:
      let elem=document.querySelector("div");
  console.log(elem.children);//HTMLCollection(2) [p, span] and to can access by index
  console.log(elem.children[0]);//p
  console.log(elem.childNodes);//NodeList(7) [text, p, text, span, text, comment, text] -> 7 becuase there are space between element 
  console.log(elem.childNodes[3]);//<!-- comment -->
  console.log(elem.firstChild)//  " Hello Muhamed" ->first of any thing
  console.log(elem.lastChild)//#text space
  console.log(elem.firstElementChild)//->first element <p>Hell paragraph</p>
  console.log(elem.lastElementChild)//last element<span>Hell span</span>
      */
/* 092-[DOM] Events 
  ->Use Events in HTML
  ->Use Events in JS
    -onclick ->what will happend if click
    -oncontextmenu -> the right click action
    -onmouseenter-> what happend if stoped about the button
    -onmouseleave ->what happend whene mouse leave

    --onload
    --onscroll-> what will happend whene doing scroll zoom [height] 
    --onresize -> what will happend whene doing scroll zoom [width]
    
    -onfocus
    -onblur
    -onsubmit
EX:
    let mybtn = document.getElementById("btn");
    let myfrom = document.querySelector("input");
    // you can do this directly in the html
    mybtn.onclick = function () {
      console.log("YOUR Name is Muhamed ");
    };
    mybtn.oncontextmenu = function () {
      console.log("YOUR Name is Muhamed ");
    };
    mybtn.onmouseenter = function () {
      console.log("YOUR Name is Muhamed ");
    };
    mybtn.onmouseleave = function () {
      console.log("YOUR Name is Muhamed ");
    };
    //count every scroll you do it
    //
    window.onscroll = function () {
      console.log("scroll");
    };
    //
    window.onresize = function () {
      console.log("scroll");
    };
    
    myfrom.onfocus = function () {
      console.log("YOUR Name is Muhamed ");
    };
    
    myfrom.onblur = function () {
      console.log("YOUR Name is Muhamed ");
    };
    myfrom.onsubmit = function () {
      console.log("YOUR Name is Muhamed ");
    };
    */
/* 093-[DOM] Events Validate_Form_And_Prevent_Default  
    -> validation[هل هذه الاشياء مطابقة للمطلوب ] like name number or the gmail
      like [requird in HTML]
EX:
      //in case Validatin data comeplet as a requird
  let userinput = document.querySelector("[name='username']"); // hold the elemnt that his name is [username]
  let ageinput = document.querySelector("[name='age']");
  
  // console.log(userinput); // to sure that you hold the element
  // console.log(ageinput); //to sure that you hold the elementb
  //to can sure that the person write the data as requird[complet the data]
  document.forms[0].onsubmit = function (ev) {
    let uservalid = false;
    let agevalid = false;
  
    // console.log(userinput.value); //to Know the value of the usrerinput
    // console.log(userinput.value.length); //to Know the value length of the usrerinput
  
    //******Condtions that should do if the value of the input true or false
    if (userinput.value !== "" && userinput.value.length <= 10) {
      // console.log("Valid");//to sure that condition is work
      uservalid = true;
      console.log(`Your name is ${userinput.value}`);
    }
    if (ageinput.value !== "") {
      agevalid = true;
      console.log(`Your age is ${ageinput.value}`);
    }
  
    if (uservalid === false || agevalid === false) {
      ev.preventDefault(); //meaing prevent the cation if the element free
    }
  };
  
  document.links[0].onclick = function (event) {
    //event any  name of parameter like[e ,event,nn,k,j,....]
    console.log(event);
    event.preventDefault(); //meaning prevent the default of the  event[don't do Action]
  };
*/
/* 094-[DOM] Event Simulation_-_Click_Focus_Blur
   [DOM] Event simulation :
      -focus
      -onclick
      -onblur ->what will happend when leave this element or the place
EX:      
  let two = document.querySelector(".two");
  let one = document.querySelector(".one");
  //Meaning if the page load focus on the class two
  window.onload = function () {
    two.focus();
  };
  one.onblur = function () {
    document.links[0].click();
  };
*/
/* 095-[DOM] Class_List_Object_And_Methods 
    ->[DOM] Calss list -> using to can [add a new] ,[update] or [remove]  a class for the element
      or search about found class

      -length -> the  length of the list 
      -classlist.contains("className that you want to search about it ")->using to can search about any class you want return [true or false ]
      -classlist.item("index")->return the class of this index
      -classlist.add("class1","class2",....)->add class or more to the element
      -classlist.remove("class1","class2",....)->remove class or mor to the element
      -classlist.toggle ->doing add and remove together [if the class found remove it if not add it to this element]
EX:
  let ele = document.getElementById("my-div");
  console.log(ele.classList); // list of the classes for this element
  //output  DOMTokenList(4) ['one', 'two', 'show', 'test', value: 'one two show test']
  console.log(typeof ele.classList); // Object
  //length
  console.log(ele.classList.length); // 4 class found in this element
  console.log(ele.classList.contains("test")); //true [this class is Not found]
  console.log(ele.classList.item("1")); //two the second index in the element
  console.log(ele.classList.item("3")); //two the second index in the element
  // console.log(ele.classList); //
  ele.onclick = function () {
    ele.classList.add("add-1", "Add-2");
  };
  ele.onclick = function () {
    ele.classList.remove("show", "test");
    ele.classList.remove("show", "wsds"); //if write class found and another not found will remove found one
  };
  ele.onclick = function () {
    ele.classList.toggle("Muhamed");
  };
*/
/* 096-[DOM] CSS_Styling_And_Stylesheets
  ->[DOM] CSS
    --style
    --style.cssText->meaning doing more properties together
    --style.removeProperty("property  name")you can write in two place[inline,stylSheet]
    --style.setProperty("property  name","value of the property",priority)
EX:  
  let ele = document.querySelector("#my-div");
  // console.log(ele);
  
  //[inline]Normal way to add properties to the element[one by one]
  ele.style.color = "red"; //if the properties onle one word
  ele.style.fontWeight = "bold"; //if the properties onle one word
  ele.style.backgroundColor = "blue"; //if the properties two word use the way of camalCase Not the normal way
  
  //override meaning ignor thiselement
  
  //cssText way to add properties to the element[group of properties together]
  ele.style.cssText = "font-weight:bold; color:Green; opacity:50%;";
  
  //[internal][inline]Normal way to add  and remove properties to the element
  ele.style.removeProperty("color"); //will remove the propery of color
  ele.style.setProperty("font-size", "60px", "important");
  
  //[External stylesheet]styleSheet:meaning all stylesheet in our page like [<link rel="stylesheet" href="main.css" />]
  //styleSheets[0]: meaning the first styelsheet in our page
  //cssRules[0]:meaing every class have and have properties[يعني كل كلاس لديك ولديه تنسيقات],[0] the index of the classin stylesheet
  document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
  document.styleSheets[0].cssRules[0].style.setProperty(
    "background-color",
    "blue",
    "important"
  );
*/
/* 097-[DOM] Before,_After,_Prepend,_Append,_Remove 
    -[DOM] Dealing with the element
    -beforeadding[element OR string before it]
    -after adding[element OR string after it]
    -append adding[element OR string  in the (end) of the element ]
    -prepend adding[element OR string in the (first) of the element]
EX:
  let ele = document.getElementById("my-div");
  let creatp = document.createElement("p");
  
  ele.before("Hell 'before' the element form JS"); //adding string before
  ele.after("Hell 'after' the element form JS"); //adding string afetr
  
  ele.before(creatp); //adding element before
  //ele.after(creatp); //adding element after
  //append meaing add in the end of element
  //aprepend meaing add in the first of element
  // ele.append(creatp); //adding element in the end of the element
  ele.prepend(creatp); //adding element in the end of the element
  
  //remove meaning  hiden the element from the page but remove all data about it reverse the display none
  ele.remove(); //hiden this element
    */
/* 098-[DOM] Traversing
    -Traversing ->meaning moving[التنقل بين العناصر] bettween element in[DOM]
    -ele.nextSibling ->meaning the next any this about it directly like[text,comment,element,..]
    -ele.previousSibling ->meaning the privious anything  before it directly like[text,comment,element,..]
    -ele.nextElementSibling ->meaning the next Element [ Onle elements]
    -ele.previousElementSibling ->meaning the privious Element  before it [ Onle elements]
    -ele.parentElement ->to can get the parent of this element
EX:
    let ele = document.querySelector(".two");
    
    console.log(ele.nextSibling); //the comment[the Next]
    console.log(ele.nextElementSibling); //the span three element only[The next Element]
    console.log(ele.previousSibling.remove()); //the comment before it [the Previous] and remove it
    console.log(ele.previousElementSibling); //the span one element only[the Previous Element]
    console.log(ele.parentElement); //return the parent of this element [div]
    
    ele.onclick = function () {
      ele.parentElement.remove();
    };
*/
/* 099-[DOM] Cloning (الاستنساخ)
    -cloneNode(default false) ->using to take copy of the element to another way[without any thing in it ] 
    -cloneNode(true) ->using to take copy of the element to another way[with every thing in it ] 
Note threre are a problem the [class and Id ] will repeat that is wrong
EX:
// let myp = document.querySelector("p").cloneNode(false);//take copy without data in this element
let myp = document.querySelector("p").cloneNode(true); //take copy of all data in this element
console.log(myp); //that show that [myp is the copy of this element][with default to know]
let mydiv = document.querySelector("div");
myp.id = `${myp.id}-clone`; // to change the name of the id or the class in
myp.className = `${myp.className}-clone`; // to change the name of the id or the class in
myp.id = `${myp.id}-clone`; // to change the name of the id or the class in

mydiv.appendChild(myp); //add the element completed[with all element and text in it]
*/
/* 100-[DOM] AddEventListener 
    -AddEventListener IT'S using to add event to your element
    -important -> it's using to can do more one event in the same time about the same element 
    -myp.addEventListener("event[click ,focus ,blur ,..]",function or object)

Very important->Note the best way of using AddEventListener to can add event to the element not found
      in your page and will found when do an action in some time 
EX:  

  let myp = document.querySelector("p");
  //in this case without the AddEventListener function[two] will override about function[one]
  //meaning function [two] will work and [one and three] not work
  myp.onclick = one;
  myp.onclick = three;
  myp.onclick = two;
  function one() {
    console.log("this click on the paragraph 1 ");
  }
  function two() {
    console.log("this click on the paragraph 2 ");
  }
  function three() {
    console.log("this click on the paragraph 3 ");
  }
  //AddEventListener by using it you can do one or more event in the same time
  myp.addEventListener("click", function () {
    console.log("this click on the paragraph AddEventListener");
  });
  myp.addEventListener("click", one);
  myp.addEventListener("click", two);
  myp.addEventListener("click", three);
  // myp.addEventListener("click", "any string");//error as the second parameter accept only [object or function]
  myp.addEventListener("click", function () {
    let myNewP = myp.cloneNode(true);
    myNewP.className = "cloned";
    document.body.appendChild(myNewP);
  });
  //will give you an ###### Error #######
  // let myclone = document.querySelector(".cloned");
  // myclone.onclick = function () {
  //   console.log("that is cloned");
  // };
  
  document.addEventListener("click", function (e) {
    //e rever to the event
    //teget [the element will do action about it]
    //target->Returns the [object] to which event is dispatched[الموجه اليه] (its target)
    //terget using to can arrive to the element that click on it
    if (e.target.className === "cloned") {
      //.className === "cloned"
      console.log("I am cloned");
    }
  });
*/
/* 101-[DOM] Challenge 
document.body.style.cssText =
  "margin:0px; background-color:rgb(236,236,236);font-family:Tahoma,Arial;";

let head1 = document.createElement("header");
head1.className = "website-head";
head1.style.cssText =
  "display:flex; padding:6px; background-color:rgb(255,255,255); justify-content:space-between;align-items:center";

let headdlogo = document.createElement("div");
headdlogo.textContent = "Muhamed El-Nayed";
headdlogo.className = "logo";
headdlogo.title = "web site logo";
headdlogo.style.cssText = "font-size:20px; font-weight:bold;color:green;";

let headul = document.createElement("ul");
headul.className = "menu";

let ulli1 = document.createElement("li");
let ulli2 = document.createElement("li");
let ulli3 = document.createElement("li");
let ulli4 = document.createElement("li");
ulli1.textContent = "Home";
ulli2.textContent = "About";
ulli3.textContent = "Service";
ulli4.textContent = "Contact";
headul.style.cssText = "display:flex; flex-direction:row; list-style:none;";

ulli1.style.cssText = "padding: 0 30px 0 0 !important;";
ulli2.style.cssText = "padding: 0 30px 0 0 !important;";
ulli3.style.cssText = "padding: 0 30px 0 0 !important;";
ulli4.style.cssText = "padding: 0 30px 0 0 !important;";

head1.appendChild(headdlogo);
headul.appendChild(ulli1);
headul.appendChild(ulli2);
headul.appendChild(ulli3);
headul.appendChild(ulli4);
head1.appendChild(headul);
document.body.appendChild(head1);

let contentdiv = document.createElement("div");
contentdiv.className = "content";
contentdiv.style.cssText =
  "display:flex; justify-content:center; font-size:25px;flex-wrap:wrap;padding:20px; gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box;";
for (let i = 0; i < 15; i++) {
  let productdiv = document.createElement("div");
  let productspan = document.createElement("span");
  productspan.textContent = "Product";
  productspan.style.cssText =
    "font-size:30px;color:black;font-weight:normal;display:block;margin-top:10px;margin-bottom:10px;";
  productdiv.className = "product";
  productdiv.textContent = `${i + 1}`;
  productdiv.style.cssText =
    "padding:20px; background-color:white;border:1px solid green;width:calc((100% - 40px) / 3) ;box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:10px;";

  productdiv.appendChild(productspan);
  contentdiv.appendChild(productdiv);
  document.body.appendChild(contentdiv);
}

let foot = document.createElement("footer");
foot.className = "footer";
foot.textContent = "Copyright Muhamed El-Nayed";
foot.style.cssText =
  "background-color:rgb(35,169,110);color:white;text-align:center;font-size:26px;padding:20px;background-attachment: fixed;";

document.body.appendChild(foot);

*/
/* 102-[BOM] What_Is_BOM_
    -[BOM]-> Browser object Model (it's meaning window object)
    -widow object is the browser window
    -Note window object contain the document object[DOM]
    -All Global variables and object and function are members of window object
       --and test console and document
  ->What we can do with Window?
    -open window
    -close window
    -Move window
    -Resize window
    -print document
    -run code after period of time once or more 
    -fully control the URL
    -save data inside browser to use later 
    window.document.title = "Muhamed"; //will change the name of the page
*/
/* 103-[BOM] Alert,_Confirm,_Prompt 
->some method that show to you message in the page
    -Alert(Message)
    -Confirm(Message)->are you want to do this action or no and return [true or false]
    -Prompt(Message,default message)-> using to can write a message in it=>collect data
EX:
    //Note whene you are in the global scope these are the same
    // window.alert("windowtest");
    // this.alert("thistest");//this rever to the window object
    // alert("alerttest");
    // alert("alerttest"); //it stop every thing in your page before respond the message
    // let ConfirmMsg = confirm("Are you sure?");
    // console.log(ConfirmMsg);
    
    // if (ConfirmMsg === true) {
    //   console.log("Your items Deleted");
    // } else {
    //   console.log("Your items Not Deleted");
    // }
    
    let promptMsg = prompt(
      "Waht is your day available",
      "Write day with three character"
    );
    
    console.log(promptMsg);
*/
/* 104-[BOM] setTimeout_and_clearTimeout
    -setTimeout(function you want to call , Timeout ,if the function have argument wite her )
      ->it's using to can call function after any time you want
      ->Notr [Timeout] writing with millsecond[3000=3s,4000=4s,....]
    
      -ClearTimeout (Id of the  setTimeout) ->using to stop the work of the settimeout method
        -to do ClearTimeout you should make [ID -> counter] for the setTimeout 

EX:
        setTimeout(function () {
      console.log("you are her");
    }, 3000); // after 3s will print the message
    function sayhello(user, age) {
      console.log(`craze man"${user} your age is : ${age}"`);
    }
    // setTimeout(sayhello("muhamed"), 2000); //in this case will print direct without timeout
    //you should write in the end of the method
    setTimeout(sayhello, 2000, "Muhamed Elnayed", 24); //after 2s will print the message
    let counter = setTimeout(sayhello, 2000); //calling id
    
    console.log(counter); //1  -> meaing the id =1
    function sayhello() {
      console.log(`your message after doing clear`);
    }
    let btn = document.createElement("button");
    btn.textContent = "Stop ";
    document.body.appendChild(btn);
    btn.onclick = function () {
      //he will stop the setTimeout
      clearTimeout(counter);
    };
*/
/* 105-[BOM] setInterval_and_clearInterval 
    -setInterval ->it's like setTimout and accept everthing like it but do method more one once 
    -clearInterval->it's like Cleartimeout and accept everthing like it but do method more one once

    setinteval-> wait time between calling method 
eX:
  // let counter = setInterval(function () {
  //   console.log(`"message"`);
  // }, 1000); // he will print the message every 1s
  
  // console.log(counter);
  
  let crdiv = document.createElement("div");
  crdiv.textContent = 5;
  let counter = setInterval(creatDown, 1000);
  function creatDown() {
    crdiv.innerHTML -= 1;
    //the counter will stop whene arrive ["0"]
    if (crdiv.innerHTML === "0") {
      clearInterval(counter);
    }
  } //=> will subtract 1 from the element if calling about it
  
  document.body.appendChild(crdiv);
*/
/* 106-[BOM] Window_Location_Object 
  ->location object :
    -href get/set[URL,hash,file,mail]
      --Note the href save the  intere places[meaning the places that i inter to it]
      -- reverse replace()
    -host
    -Protocol 
    -hash(#)
    -some method 
      -reload(doing reload to the page)
      -Replace("URL") it's  using to reblace the currnet URL with another
        -Note it's not save the inter page like [href]
      -assign("URL") it's  using to assign to another  URL like href
EX:
  console.log(location);
  console.log(location.href); //get the link[http://127.0.0.1:5502/index.html]
  
  // let sec1 = document.createElement("div");
  // sec1.textContent = "section One";
  // sec1.id = "sec01";
  // let sec2 = document.createElement("div");
  // sec2.textContent = "section Two";
  // sec2.id = "sec02";
  // location.href = "#sec1";
  // document.body.appendChild(sec1);
  // document.body.appendChild(sec2);
  // console.log(location.host); //return [IP] and [port] -> 127.0.0.1:5502
  // console.log(location.hostname); //return only  [IP] -> 127.0.0.1
  // if you want to change any of them by
  // location.hostname = "123.22.3.4";
  // location.protocol = "https";
  // location.protocol = "https";
  // location.protocol = "https";
  // console.log(location.protocol); //return http:
  console.log(location.hash);
  // console.log(location.reload());//doing reload repeatly
  location.replace("https://google.com"); // don't save intry pages[the page that inter to it ]
  
  location.assign("https://google.com"); // save intry pages[the page that inter to it previus]
      */
/* 107-[BOM] Window_Open_And_Close
    -window.close()->Note Scripts may close only the windows that were [opened by JS] 
    -window.open(URL(opt)  any url you want image or file or url of page , 
    window name or target attr(opt) [_self,_blank],
     win feature (opt)[properties that you want to add to your page] 
     like [width ,height,top ,left])
    search :
    -window.open window features 
EX:
    setTimeout(function () {
    window.open(
      "https://google.com",
      "_blank",
      "width=400,height=400,left=200,top=20"
    );
  }, 2000);
*/
/* 108-[BOM] Window_History_Object 
    -history.length ->all page that you go to it from this page +the current page
    - history.back()->return to the previous page
    - history.forward() -> go to the next page in the history
    - history.go(postion in history)
     --history.go(0) -> meaing do reload ti this page
     --history.go(1 or 2 or 3  ....) -> meaing doing forward()
       --history.go(2)-> go after this two page 
     --history.go(-1,-2,....) -> meaing do back() 
       --history.go(-2)-> go before this two page 

  search:
   -pushstate + replacestate
EX:
   console.log(history);
  // history.back();
  // history.forward();
  history.go(2); //go two page after current page
  history.go(-2); //go two page beforw current page
  history.pushState();
  history.replaceState();
*/
/* 109-[BOM] Scroll,_ScrollTo,_ScrollBy,_Focus,_Print,_Stop
  -window.stop(); -> meaing stop loding of page
  -window.print(); ->print this page
  -window.focus();meaing focus about bage you want 
  -window.scroll(X,Y OR options)//don't work in safary apple 
  -window.scrollTo(X,Y OR options) scroll to specify axis or point if you repeat it will stay in his place
  -window.scrollBy(X,Y OR options) ->meaning scroll about current scroll add about the current place 
    if repeat it will move from his place and add (X+X,Y+Y) 
EX:  
  // let newwind = window.open(
  //   "http://google.com",
  //   "_blank",
  //   "width=400,height=400"
  // );
  // to go to it direct by
  // newwind.focus();
  // window.scroll(200, 300);
  // window.scrollTo(200, 300);
  // window.scrollBy(200, 300);
  //option in scroll
  // window.scrollBy({
  //   left: 300,
  //   top: 500,
  //   behavior: "smooth",
  // });
*/
/* 110-[BOM] Scroll_To_Top_Using_Y_Practice
    -scrollX()=PageXOffset 
      -> return the value of the scrollX horizontal that you do it 
    -scrollY()=PageYOffset 
      -> return the value of the scrolly vertical that you do it
EX:
  console.log(window.scrollX === window.pageXOffset); //true
  console.log(window.scrollY === window.pageYOffset); //true
  
  let btn = document.querySelector("button");
  window.onscroll = function () {
    if (scrollY >= 600) {
      btn.style = "display:block; behavior:smooth;";
      // console.log(`the value of Scrolling Y is : ${window.scrollY}`); //to can Know the value of the scrolling
    } else {
      btn.style = "display:none;";
    }
  };
  // to go to the top of the page  by click in the button
  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
*/
/* 111-[BOM] Local_Storage very important
Note You can dealing with it as Object
  ->local storge :is a property in the window by it can to access about the storage object
     -window.localStorage.setItem(key,value)
     -window.localStorage.getItem(key)
     -RemoveItem(kEY)
     -clear()remove all properties
     -Key(index )using to return the key of this index
Info:
    -if you doing privite tap all data in the localStorge will removed 
    -the localStorage in HTTP and HTTPs is defreant in it
    -No Expiration time =>meaning no time this properties will remove if you don't tell it
EX:
  //[Set way]you can setItem by many way
  window.localStorage.setItem("color", "Green");
  window.localStorage.fontSize = "40px"; //Note in this way dealing  with it by camalCase
  window.localStorage["fontWeight"] = "bold"; //Note in this way dealing  with it by camalCase
  
  //[Get way]you can getItem by many way
  console.log(window.localStorage.getItem("color"));
  console.log(window.localStorage.fontSize); //Note in this way dealing  with it by camalCase
  console.log(window.localStorage["fontWeight"]); //Note in this way dealing  with it by camalCase
  
  //RemoveItem one by one
  // window.localStorage.removeItem("fontWeight"); //fontweight will delet  from the storge
  
  //RemoveItem all by clear
  // window.localStorage.clear();
  
  // set Color in the page
  document.body.style.backgroundColor = window.localStorage.color; // our page color will set green
  
  //key(indx)
  console.log(`the key of index 0 is :${window.localStorage.key(0)}`); //fontSize
  console.log(`the key of index 1 is :${window.localStorage.key(1)}`); //color
  
  console.log(window.localStorage);
  console.log(typeof window.localStorage);
*/
/* 112-[BOM] Local_Storage_Color_Application_Practice
EX:
// window.localStorage.clear();

let lis = document.querySelectorAll("ul li");
let expcolor = document.querySelector(".exp");
// window.localStorage.clear("color");
if (window.localStorage.getItem("color")) {
  // console.log("yes");
  //If there are color in the local storege
  // step[1]
  //change the color of the Div
  expcolor.style.backgroundColor = window.localStorage.getItem("color");
  // step[2] Remove class active from the all
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // step[3]
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
} else {
  console.log("No");
}

// console.log(typeof document.querySelectorAll);

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //using to get the dataset for every li in ul
    // console.log(e.currentTarget.dataset.color);
    //remove active from all element
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    //add active to the currant element
    li.classList.add("active");

    //Add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
  });
});
 */
/* 113-[BOM] Session_Storage_And_Use_Cases 
    -session storege he like localstorge 
        [but he save data in your session only whene you leave will delete this data 
        reverse localstotrage save data along]
      -setItem
      -getItem
      -removeItem
      -clear
      -key
  info:
      -if you open your page in [New tap] ->will remove session
      -if you open your page as [dublicat tap] ->will stay session
      -Note new tap with the same url =new session
EX:
  // window.localStorage.setItem("color", "red");
  // window.sessionStorage.setItem("color", "blue");
  let inputt = document.querySelector(".name");
  inputt.onblur = function () {
    //console.log(this.value); //if you write this onle will return the element
    //this.value will return the value
    window.localStorage.setItem("input-name", this.value);
    window.sessionStorage.setItem("input-name", this.value);
  };
  
  window.onload = () => {
    window.sessionStorage.removeItem("input-name");
  };
    
  */
/* 114-[BOM] Challenge Not Completed
EX:
// [BOM] Challenge
// window.localStorage.clear();

let taskesdiv = document.querySelector(".teskes");
let btnAT = document.querySelector(".add");
let textadd = document.querySelector(".inputt");

console.log(typeof onclick);
btnAT.addEventListener("click", function () {
  window.localStorage.setItem("tasks", textadd.value);
  // console.log(textadd.value);
});

let newTask = document.createElement("div");
// newTask.textContent = textadd.value;
newTask.style.cssText = "background-color:white;width:calc(100% - 40px); ";
let deletbtn = document.createElement("button");
deletbtn.textContent = "Delete";
deletbtn.style.cssText =
  "color:white;background-color: #7a1111;font-weight: bold;margin:5px; padding: 5px;border: 1px solid transparent;border-radius: 5px;text-align: center;width: 100px; ";

newTask.appendChild(deletbtn);
if (textadd.value === "") {
  // console.log("your text is empety");
  btnAT.onclick = function () {
    newTask.textContent = window.localStorage.getItem("tasks");
    taskesdiv.appendChild(newTask);
  };
}
// textadd
*/
/* 115-[Destructuring] Arrays_Part_1
-Is a JS Expression that allows to us to extract date from arreys,
Objects and Maps and set them into new distinct variables
-Destructuring Array 
-if note declare  you should declare it  
EX:
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

let myfri = ["Muhamed", "Ali", "Omer", "Amir"];
// let [a, , , d] = myfri;//in this case will return [muhamed and Amir] only and ignor the anoter value 
// let [a, b, c, d, e] = myfri; //e will return undefined
let [a = "Gamal", b, c, d, e = "Osama"] = myfri; //e will return default value in case note Found
//and [a] will return Gamal in case not found
//Note in this case will update the a,b,c,d with the myfri
//Note if the destructuring less than the element of the array or the objects will return the available value

console.log(a); //Muhamed
console.log(b); //"Ali"
console.log(c); //Omer
console.log(d);
console.log(e);
*/
/* 116-[Destructuring] Arrays_Part_2
EX:
let myfri = ["Muhamed", "Ali", "Omer", ["shady", "Amr", ["Karam", "Gamal"]]];
// console.log(myfri[3][2][1]);

let [, , , [a, , [, b]]] = myfri;

console.log(a); //shady
console.log(b); //gamal
console.log("##############################################");

*/
/* 117-[Destructuring] Arrays_Part_3 [Swap_Variables]
EX:
let book = "video";
let video = "Book";
//Old way to swap you should use a new variable

// let stash = book;//box to save the data in it
// book = video;

// video = stash;

// console.log(book);//book
// console.log(video);//vedio

// swaping by using Destructuring
[book, video] = [video, book];
console.log(book); //book
console.log(video); //video
*/
/* 118-[Destructuring] Objects_Part_1
    Note -> whene using Destructuring in Object using {} and to aviod the assingment  = will used ()  
EX:
  //An Object
  let user = {
    theName: "Muahmed",
    theAge: 24,
    theTitle: "minia",
    theCountery: "Egypt",
  };
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountery = user.theCountery;
  
  ({ theName, theAge, theTitle, theCountery } = user);
  
  console.log(theName);
  console.log(theAge);
  console.log(theTitle);
  console.log(theCountery);
  
  ({ theName, theAge, theCountery } = user); // if you don't want to show items remove it's name only
  console.log(theName);
  console.log(theAge);
  // console.log(theTitle);
  console.log(theCountery);
*/
/* 119-[Destructuring] Objects_Part_2
  Note you cane change the name of the variable  to a,b,c,d
  ({ theName:a, theAge:b, theTitle:c, theCountery:d } = user);
    
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
EX:
    let user = {
    theName: "Muahmed",
    theAge: 24,
    theTitle: "minia",
    theCountery: "Egypt",
    theColor: "Red",
    skills: {
      HTML: 70,
      CSS: 80,
    },
  };
  //Note the [a,b,co] the new names of variable
  let {
    theName: a,
    theAge: b,
    theTitle,
    theCountery,
    theColor: co = "Green",
    skills: { HTML: HT, CSS: CS },
  } = user;
  console.log(a);
  console.log(b);
  console.log(theTitle);
  console.log(theCountery);
  console.log(co); //if not found the return undefined or the default value
  console.log(`the HTML Progress is :${HT}`);
  console.log(`the HTML Progress is :${CS}`);
  let { HTML: skillOne, CSS: skillTwo } = user.skills;
  // Note you should change the name of HTML to don't return Error
  console.log(`the HTML Progress is :${skillOne}`);
  console.log(`the HTML Progress is :${skillTwo}`);
 */
/* 120-[Destructuring] Function_Parameters 
let user = {
  theName: "Muahmed",
  theAge: 24,
  theTitle: "minia",
  theCountery: "Egypt",
  skills: {
    HTML: 70,
    CSS: 80,
  },
};
showData(user);

// function showData(obj) {
//   console.log(`Yuor name is ${obj.theName}`);
//   console.log(`Yuor Age is ${obj.theAge}`);
//   console.log(`Yuor HTML rate is  :  ${obj.skills.HTML}`);
//   console.log(`Yuor CSS rate is  :  ${obj.skills.CSS}`);
// }
//BY destructuring you can change every thing in it 
function showData({ theName, theCountery: c, skills: { CSS: cs, HTML: h } }) {
  console.log(`Yuor name is ${theName}`);
  console.log(`Yuor Age is ${c}`);
  console.log(`Yuor HTML rate is  :  ${h}`);
  console.log(`Yuor CSS rate is  :  ${cs}`);
}
*/
/* 121-[Destructuring] Mixed_Content
EX:
let user = {
  theName: "Muahmed",
  theAge: 24,
  theTitle: "minia",
  theCountery: "Egypt",
  skills: ["HTML", "CSS", "JS"],
  address: {
    egypt: "Cairo",
    Ksa: "Riyadh",
  },
};

let {
  theName: N,
  theAge: A,
  skills: [a, , c],
  address: { egypt: e },
} = user;

console.log(`Yuor Name is: ${N}`);
console.log(`Yuor age is: ${A}`);
console.log(`Yuor skills is: ${a}  , ${c}`);
// console.log(`Yuor skill is: ${b}`);
// console.log(`Yuor skill is: ${c}`);
console.log(`Yuor address is: ${e}`);

*/
/* 122-[Destructuring] Challange  

//122-[Destructuring] Challange
let chosen = 2;
let myfrindes = [
  { title: "Osama", age: 39, available: true, skills: ["Python", "Django"] },
  { title: "Muhamed", age: 24, available: false, skills: ["HTML", "CSS"] },
  { title: "sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

switch (chosen) {
  case 1:
    let [
      {
        title,
        age,

        available,
        skills: [, c],
      },
      ,
      ,
    ] = myfrindes;
    console.log(`Your Title is : ${title}`);
    console.log(`Your age is : ${age}`);
    if (available === true) {
      console.log(`You are "available"`);
    } else {
      console.log(`You are "Note available"`);
    }
    console.log(`Your Skills is : ${c}`);
    break;
  case 2:
    let [
      ,
      {
        title: t,
        age: aa,
        available: av,
        skills: [, cc],
      },
      ,
    ] = myfrindes;
    console.log(`Your Title is : ${t}`);
    console.log(`Your age is : ${aa}`);
    if (av === true) {
      console.log(`You are "available"`);
    } else {
      console.log(`You are "Note available"`);
    }
    console.log(`Your Skills is : ${cc}`);
    break;
  case 3:
    let [
      ,
      ,
      {
        title: tt,
        age: aaa,
        available: ava,
        skills: [, ccc],
      },
    ] = myfrindes;
    console.log(`Your Title is : ${tt}`);
    console.log(`Your age is : ${aaa}`);
    if (ava === true) {
      console.log(`You are "available"`);
    } else {
      console.log(`You are "Note available"`);
    }
    console.log(`Your Skills is : ${ccc}`);
    break;
}
 */
/* 123-Set_Data_Types_And_Methods
    ->set:
      --it's an [Object] using to store uniqueData  only and don't repeat the data.
      --syntax: new set (iterable )
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
  
  1-Type of data
    -Set ->can store any data values
    -weakSet ->collection of Objects onle
  
  2-size:
    -set -> have size property
    -weakset ->Don't have size property 
      EX:
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
