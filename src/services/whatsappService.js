const https = require("https");
function SendNormalTextMessage(data){

    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/109087492187730/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOURFACEBOOKPERMANENTBEARERTOKEN"
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