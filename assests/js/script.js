

//GLOBALS
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
   
    
    var timeBLock = '<div id="hourId'+ startWorkDay.hour()+'" class="row time-block">'+
    '<div class="col-md-2 hour">'+startWorkDay.format('h A')+'</div>'
    +'<textarea class="col-md-9 description">'+'</textarea>'
    +'<button id="save" class="col-md-1 saveBtn">'+'</button>'+
    '</div>'
    mainEl.append(timeBLock);
    startWorkDay.add(1, 'hours');
}

//CHECKING CURRENT TIME:

// var now = moement().format('h A');
// var hour = startWorkDay.format('h A');

//     if (hour < now){
//         textarea.addClass('.past');

//     } else if (hour > now){
    //         textarea.addClass('.future')
    
    //     } else hour = textarea.addClass('.present')
    
    
//BUTTON
    var button = $('.saveBtn');
    button.on('click', storeItem);


// SAVE TO LOCAL STORAGE
function storeItem(){
    //created vars to reference the value of textarea and the id of startWorkDay hour
    // targetting them using $(this) 
    //.siblings('textarea') = textarea is the sibling of button tag in parent el ----- .val() gets value of anything typed into textarea
    //.parent().attr('id') = targets the parent & then attr of button tag which is the div row containing id of hourID

    var text = $(this).siblings('textarea').val();
    console.log(text)
    var hourId = $(this).parent().attr('id');

    //text and idHour are vars: no need for strings
    localStorage.setItem(hourId, text);
}

// DISPLAY text saved to localStorage:
$('#hour9').children('textarea').val(localStorage.getItem('hour9'));
