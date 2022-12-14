

//GLOBALS
var mainEl = $('.container');
var startWorkDay = moment(09, 'h A');
var timer = 0;

//CURRENT DAY
var currentD = moment().format('MMMM Do YYYY');
$('#currentDay').text(currentD);


// CREATE TIME BLOCK 
// created html elements inside the timeblock 
// created div inside time-block then created multiple els inside parent time-block div
// append parent div to container

while (startWorkDay.hour() < 18) {
    //id=hourId + startWorkDay = gives the div row reference for each hour displayed in the in time-block.
   
    
    var timeBLock = '<div id="hour'+ startWorkDay.hour()+'" class="row time-block">'+
    '<div class="col-md-2 hour">'+startWorkDay.format('h A')+'</div>'
    +'<textarea class="col-md-9 description">'+'</textarea>'
    +'<button id="save" class="col-md-1 saveBtn">'+'</button>'+
    '</div>'
    mainEl.append(timeBLock);
    startWorkDay.add(1, 'hours');
}


//BUTTON
var button = $('.saveBtn');
button.on('click', storeItem);


// SAVE TO LOCAL STORAGE
function storeItem(){
    //created vars to reference the value of textarea and the id of startWorkDay hour -- targetting them using $(this) 
    var text = $(this).siblings('textarea').val();
    console.log(text)
    var hour = $(this).parent().attr('id');
    
    //text and idHour are vars: no need for strings
    localStorage.setItem(hour, text);
    displayMessage();
}

// DISPLAY text saved to localStorage: make into loop
$('#hour9').children('textarea').val(localStorage.getItem('hour9'));
$('#hour10').children('textarea').val(localStorage.getItem('hour10'));
$('#hour11').children('textarea').val(localStorage.getItem('hour11'));
$('#hour12').children('textarea').val(localStorage.getItem('hour12'));
$('#hour1').children('textarea').val(localStorage.getItem('hour1'));
$('#hour2').children('textarea').val(localStorage.getItem('hour2'));
$('#hour3').children('textarea').val(localStorage.getItem('hour3'));
$('#hour4').children('textarea').val(localStorage.getItem('hour4'));
$('#hour5').children('textarea').val(localStorage.getItem('hour5'));


//CHECKING CURRENT TIME:

var now = moment().format('h A');
var hour = startWorkDay.hour();
console.log(hour);
console.log(now);

    if (hour < now){
        $('textarea').addClass('.past');

    } else if (hour > now){
            $('textarea').addClass('.future')
    
        } else hour = $('textarea').addClass('.present')


// SET TIMEOUT
function displayMessage(){
    $('#display').show();
    setTimeout(function (){
    $('#display').hide();
    },2000);

}
