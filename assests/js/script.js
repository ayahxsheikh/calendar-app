

var mainEl = $('.container');
var startWorkDay = moment(09, 'h A');

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
    +'<button class="col-md-1 saveBtn">'+'</button>'+
    '</div>'
    mainEl.append(timeBLock);
    startWorkDay.add(1, 'hours');
}


//BUTTON
var button = $('.saveBtn');
button.on('click', storeItem);


// SAVE TO LOCAL STORAGE
function storeItem(){
    //created vars to reference the value of textarea and the id of startWorkDay hour -- targetting them using $(this) (refers to button)
    var text = $(this).siblings('textarea').val();
    console.log(text)
    var hour = $(this).parent().attr('id');
    
    //text and idHour are vars: no need for strings
    localStorage.setItem(hour, text);
    displayMessage();
}

// RETRIEVE text from localStorage: make into loop

$('#hour9').children('textarea').val(localStorage.getItem('hour9'));



//CHECKING CURRENT TIME:
function checkCurrentTime(){

    $('.time-block').each(function (i){
        var hour = $(this).attr('id');
        var currentTime = moment().format('hh A');
        // console.log(hour);
        // console.log(currentTime);
        
        if (currentTime === hour){
            $('.time-block').children('.description').addClass('.present');
            
        } else if (currentTime > hour){
            $('.time-block').children('.description').addClass('.past');
            
        } else 
        $('.time-block').children('.description').addClass('.future');
        
    });

};
checkCurrentTime();

// SET TIMEOUT
function displayMessage(){
    //added id to p element that will appear when func is called
    $('#display').show();
    setTimeout(function (){
    $('#display').hide();
    },2000);

}
