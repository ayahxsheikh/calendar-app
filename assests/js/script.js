

var mainEl = $('.container');
var startWorkDay = moment(09, 'h A');
var hourId;

//CURRENT DAY
var currentD = moment().format('MMMM Do YYYY');
$('#currentDay').text(currentD);


// TIME BLOCK 
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
    hourId = $(this).parent().attr('id');
    
    localStorage.setItem(hourId, text);
    displayMessage();

}

// RETRIEVE text from localStorage: make into loop
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

function checkCurrentTime(){
    //loop over time-block to get id for each row
    $('.time-block').each(function (){
     hourId = $(this).attr('id').slice(4);
        // console.log(hourId);
        
        currentHour = moment().hours();
        //   console.log(currentHour); 
        
        if (hourId == currentHour){
            $(this).children('.description').addClass('present');
            console.log(currentHour);
            console.log(hourId);
            
        } else if (hourId < currentHour ){
            // console.log(currentHour);
            // console.log(hourId);
            $(this).children('.description').addClass('past');
            
        } else {
            $(this).children('.description').addClass('future');

        }
        
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
