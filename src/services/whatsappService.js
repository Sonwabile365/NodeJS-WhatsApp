const https = require("https");
function SendNormalTextMessage(data){

    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/109087492187730/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAANiZAoiq70gBAINShqoNmGZBk56UFQZCkIpLhguFnf1W2WTVLW92tnZAdnFe3J6BOnxWRMzHVQ0gKQtnFPKscfSpf7eXOG11hY0TC6gUVuAU8ZCbAY7QwmpfYxqeMefBqELMcZCQXhMgbnwvIUfjeTmoccZB7UVK9qmjgfxy5JG1FgZAhXubTTt"
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