//Write your code here

const attendee = {
  attendee: "T001",
  name: "Alice smith",
  event: "Javascript conference",
  tickettype: "VIP",
  ticketprice: 150.00
}
  
function logAttendeeName(attendee){

console.log(attendee.name);
}
logAttendeeName(attendee)

function logTicketPrice(attendee){
  console.log(attendee.ticketprice);
}
logTicketPrice(attendee)

function updateTicketType(attendee, newTicketType){
  attendee .tickettype = newTicketType;
  
}
updateTicketType(attendee, "regular");
console.log(attendee.tickettype)


function updateTicketPrice(attendee, newTicketPrice){
  attendee .ticketprice = newTicketPrice;
}
updateTicketPrice(attendee, 500);
console.log(attendee.ticketprice)

function removeEventProperty(attendee){
  console.log(attendee. event);
}
removeEventProperty(attendee)

function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}
addCheckedInProperty(attendee);


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};