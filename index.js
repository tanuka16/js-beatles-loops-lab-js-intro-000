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
function iLoveTheBeatles(num){
  var empty_arr=[];
  do {
    empty_arr.push("I love the Beatles!");
    num++;                                        //increment the number of time the string is being pushed
  } while (num<15);
  return empty_arr;

}
