
//for every hour from 9-5, create a time block row
    //while loop that loops starting at 9 and breaks at 5
        //for each loop create a html time block row including a time text area and save button.
            //Append time block to container 
                //Hour
                    //A number corresponding with the hour in 12hr formats
                //Textarea
                //Show exisiting event text if any
                //Save button
                    //When clicked store/reset the event that matches w/hour to localStorage
            //Increase hour by one
            //Check if hour is past, current or future and apply corresponding css class to time-block.


//GLOBALS
var mainEl = $('.container');
var startWorkDay = moment(9, 'hA');
// console.log(startWorkDay);

//CURRENT DAY
var currentD = moment().format('MMMM Do YYYY');
$('#currentDay').text(currentD);

//APPENDING FIRST ROW
mainEl.append(`<div class='row time-block'>`+`${startWorkDay.format('hh A')}`+`</div>`)

//TIME-BLOCK LOOP
    while (startWorkDay.hour() < 17) {
        startWorkDay.add(1, 'hours')
        mainEl.append(
            `<div class=row time-block>`+`${startWorkDay.format('h A')}`+`</div>`)
    }
    

