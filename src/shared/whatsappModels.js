function PlainText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "preview_url": false,
        "receipient_type":"individual",
        "to": number,
        "type": "text",
        "text":{
            "body": textResponse
        }
    });
    return data;
}

function OfficeList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type":"list",
            "body":{
                "text": "Which office do you want to go in to?"
            },
            "footer":{
                "text":"_Choose Wisely🧙_"
            },
            "action":{
                "button": "Office Locations",
                "sections": [
                    {
                        "title": "Office?",
                        "rows":[
                            {
                                "id": "Melrose Office",
                                "title": "Entelect HQ",
                                "description":"_Where all the cool Joburg boets go_😎"
                            },
                            {
                                "id": "Pretoria Office",
                                "title": "Entelect Pretoria",
                                "description":"_Lekker!! Ons gan nou braai_🥩"
                            },
                            {
                                "id": "Durban Office",
                                "title": "Entelect Durban",
                                "description":"_Wat kind Ekse?_🦀"
                            },
                            {
                                "id": "Cape Town Office",
                                "title": "Entelect Cape Town",
                                "description":"_like... let's go surfing bru_🐬"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function HQLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location":{
            "latitude":"-26.135002211623977",
            "longitude":"28.068343008698303",
            "name":"Entelect HQ - Melrose",
            "address":"Unit 13, 3 Melrose Blvd, Melrose, Johannesburg, 2196"
        }
    });
    return data;
}

function DateButtons(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type":"button",
            "body":{
                "text": "When would you like to book for?"
            },
            "action":{
                "buttons":[
                    {
                        "type":"reply",
                        "reply":{
                            "id":"001",
                            "title":"Today"
                        }
                    },
                    {
                        "type":"reply",
                        "reply":{
                            "id":"002",
                            "title":"Future Date"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

function ConfirmBookingButtons(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type":"button",
            "body":{
                "text": "Are you okay with this?"
            },
            "action":{
                "buttons":[
                    {
                        "type":"reply",
                        "reply":{
                            "id":"001",
                            "title":"✅Yes"
                        }
                    },
                    {
                        "type":"reply",
                        "reply":{
                            "id":"002",
                            "title":"🚫Change Seat"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

module.exports = {
    PlainText,
    OfficeList,
    HQLocation,
    DateButtons,
    ConfirmBookingButtons
}