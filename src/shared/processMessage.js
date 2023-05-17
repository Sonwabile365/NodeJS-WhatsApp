const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];

    if(textUser.includes("hello") || textUser.includes("hi") || textUser.includes("hey")){
        var model = whatsappModel.PlainText("Hi Entelectual😊! I’m R2-D2, Entelect’s Friendly Seat Reservation Bot.\n \n I am here to assist you in reserving your seat at the office.", number)
        models.push(model);
        var question = whatsappModel.OfficeList(number)
        models.push(question); 
    }else if(textUser.includes("entelect hq") || textUser.includes("entelect durban") || textUser.includes("entelect pretoria") || textUser.includes("entelect cape town")){
        var model = whatsappModel.DateButtons(number)
        models.push(model);
    }else if(textUser.includes("today")){
        var model = whatsappModel.PlainText("We've assigned you seat N3", number)
        models.push(model);
        var confirmation = whatsappModel.ConfirmBookingButtons(number)
        models.push(confirmation); 
    } else if(textUser.includes("future") || textUser.includes("future booking")){
        var model = whatsappModel.PlainText("Please enter the date you'd like to book for using this format: yyyy-mm-dd", number)
        models.push(model);
    }else if(isNaN(Date.parse(textUser)) == false){
        var model = whatsappModel.PlainText("We've assigned you seat N3", number)
        models.push(model);
        var confirmation = whatsappModel.ConfirmBookingButtons(number)
        models.push(confirmation);
    }else if(textUser.includes("✅yes") || textUser.includes("✅")){
        var model = whatsappModel.PlainText("⌚Your booking is for today.\n✔️Status: Confirmed\n🪑Desk: N3 \n 📍Entelect HQ", number);
        models.push(model);
        var location = whatsappModel.HQLocation(number);
        models.push(location);
    }else if(textUser.includes("🚫change seat") || textUser.includes("🚫")){
        var model = whatsappModel.PlainText("Why are you so picky😑", number);
        models.push(model)
    }else if(textUser.includes("help")){
        var model = whatsappModel.PlainText("Help steps", number)
        models.push(model);
    }
    else {
        var model = whatsappModel.PlainText("I’m R2-D2, Entelect’s Friendly Seat Reservation Bot.\n I DO NOT UNDERSTAND YOU RIGHT NOW! If you want to make a booking message: 'hi'\n \nIf you want help, message: 'help'", number)
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendNormalTextMessage(model);
    });
}

module.exports = {
    Process
}