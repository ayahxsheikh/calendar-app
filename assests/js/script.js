
//for every hour from 9-5, create a time block row
    //while loop that loops starting at 9 and breaks at 5
        //for each loop create a html time block row including a time text area and save button.
            //Append time block to container 
                //Hour
                //Increase hour by one
                    //A number corresponding with the hour in 12hr formats
                //Textarea
                //Show exisiting event text if any
                //Save button
                    //When clicked store/reset the event that matches w/hour to localStorage
            //Check if hour is past, current or future and apply corresponding css class to time-block.


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
    // console.log(startWorkDay.hour());
    var timeBLock = '<div id="hour'+ startWorkDay.hour()+'" class="row time-block">'+
    '<div class="col-md-2 hour">'+startWorkDay.format('h A')+'</div>'
    +'<textarea class="col-md-9 description">'+'</textarea>'
    +'<button id="save" class="col-md-1 saveBtn">'+'</button>'+
    '</div>'
    mainEl.append(timeBLock);
    startWorkDay.add(1, 'hours');
}

//CHECKING CURRENT TIME:
//use textarea id as a reference to display now
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
    //targeting the value of textarea and the id of startWorkDay hour using $(this) 
    var text = $(this).siblings('textarea').val();
    console.log(text)
    var idhour = $(this).parent().attr('id');
}




