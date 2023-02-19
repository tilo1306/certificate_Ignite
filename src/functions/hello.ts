import { APIGatewayProxyHandler } from "aws-lambda"



export const handle: APIGatewayProxyHandler = async (event )=>{
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Hello World Igbnite serverless"
        })

    }
}