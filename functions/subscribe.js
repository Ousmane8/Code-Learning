const axios = require("axios")

exports.handler = function (event, context, callback) {

    const parsedBody = JSON.parse(event.body)
    console.log(parsedBody)
    axios({
        method:'post',
        url:'https://madamadadane.netlify.app',
        data: {name: parsedBody.name},
    })
        .then(response => {
            callback(null, {
                statusCode: 200,
                body: "Success"
            })
        })
        .catch((error) => {
            console.log(error);
            callback(null, {
                statusCode: 400,
                body: "erreur : " + error.message
            })
        })

}
