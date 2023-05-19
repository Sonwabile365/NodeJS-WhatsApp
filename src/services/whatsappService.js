const https = require("https");
function SendNormalTextMessage(data){

    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/109087492187730/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAANiZAoiq70gBAKmUG6lHqZCvkiKbs5FibgIisRZCA4CjJpKLc7EgXj0fEeyb0tk5narbpbAnoITHb0ZBecwhS3y9nrs9rGAvoWQqsW42EtEtmZBTZAySZBcsZBxxutQsSIsI3C3iQituvPnWw0GYmM6LHZADKozXBP8d976VvAzkM45jU8ZBONLykHvw49DTWNWG2yrmwZCm5V8ESdcj8g0w2b"
        }
    };
    const req = https.request(options,res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error",error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendNormalTextMessage
}