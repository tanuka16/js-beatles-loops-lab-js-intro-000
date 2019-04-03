// add solution here
//var musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
//var instrument = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums' ]

//theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians,instruments){
var empty_arr=[];                           //creting an empty array
   for (var i = 0; i < musicians.length; i++){
     empty_arr.push(musicians[i] + ' plays ' + instruments[i]);   //concat strings                ^
     //empty_array.push(str);
  }
  return empty_arr;                         //placing the string inside the empty_arr created earlier
}


function johnLennonFacts(array){

  var i = 0;
  while(i<array.length){
    array[i]= array[i] + '!!!';
    i++;
  }
  return array;
}
/* Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than 15.
The function should return the array with the strings "I love the Beatles!".*/
function iLoveTheBeatles(num){
  var empty_arr=[];
  do {
    empty_arr.push("I love the Beatles!");        //this will happen one time, whether or not number meets condition below
    num++;                                        //increment the number of time the string is being pushed
  } while (num<15);
  return empty_arr;

}
