
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
var startWorkDay = moment(09, 'HH A');
// console.log(startWorkDay);

//CURRENT DAY
var currentD = moment().format('MMMM Do YYYY');
$('#currentDay').text(currentD);


//TIME-BLOCK LOOP
    while (startWorkDay.hour() < 18) {
        mainEl.append(
            "<div class='row time-block'>"+`${startWorkDay.format('HH A')}`+`</div>`)
        startWorkDay.add(1, 'hours')
    }

    
//APPEND ITEMS TO TIME BLOCK USING CSS CLASS SELECTORS
//hour to time-block
$('.time-block').append("<div class='hour'></div>");
$('.time-block').append("<textarea class='description'></textarea>");
$('.time-block').append("<button class='saveBtn'></button>");

//ASSIGN VARS TO CLASS SELECTORS
var timeBl = $('.time-block');


//CHECKING CURRENT TIME:
/*
var now = moement().format('HH A')
var hour =

    if (hour < now){
        textarea.addClass('.past');

    } else if (hour > now){
        textarea.addClass(.future)

    } else hour = textarea.addClass('.present')

*/

