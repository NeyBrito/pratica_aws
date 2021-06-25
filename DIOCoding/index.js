const AWS = require ("aws-sdk");
const dynamo = new AWS.DynomoDB.DocumentClient();

exports.handler = async (event) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };
    
    let requestJSON;
    try{
        switch (event.routeKey) {
            case "POST /items":
                requestJSON = JSON.parse(event.body)
                await dynamo
                .put({
                    TableName: "Product",
                    Item: {
                        id: requestJSON.id,
                        price: requestJSON.price,
                        name: requestJSON.name
                        }
                        })
                        .promisse();
            body = "Put item ${requestJSON.id}"
            break;
            case "DELETE /items/{id}":
                console.log(event.pathParameters.id)
                await dynamo
                .delete({
                    TableName: "Product",
                    Key: {
                        id: event.pathParameters.id
                        }
                        })
                        .promisse();
            body = "Delete item ${event.pathParameters.id}"
            break;
            case "GET /items/{id}":
                console.log(event.pathParameters.id)
                await dynamo
                .get({
                    TableName: "Product",
                    Key: {
                        id: event.pathParameters.id
                        }
                        })
                        .promisse();
            break;
            case "GET /items":
                body = await dynamo.scan({
                    TableName: "Product"
                    })
                    .promisse();
            break;
            case "PUT /items/{id}":
                requestJSON = JSON.parse(event.body);
                await dynamo
                .update({
                    TableName: "Product",
                    Key: {
                        id: event.pathParameters.id
                        },
                        UpdateExpression: "set price = :r",
                        ExpressionAttibuteValues: {
                            ':r': requestJSON.price,
                            },
                            })
                            .promisse();
            body = 'Put item ${event.pathParameters.id}';
            break;
     default:
        throw new Error ('Unsupported rout: "${event.routeKey}"')
    }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }
    
    return {
        statusCode,
        body,
        headers
    }
};
