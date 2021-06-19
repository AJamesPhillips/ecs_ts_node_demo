import { Server } from "@hapi/hapi"


const CONFIG = {
    ENV_VAR: process.env.ENV_VAR,
}


export function routes (server: Server)
{
    server.route({
        method: "GET",
        path: "/",
        handler: async function (request, h) {

            return `Hello World! ${CONFIG.ENV_VAR}`
        }
    })

    server.route({
        method: "GET",
        path: "/error/test",
        handler: async function (request, h) {

            throw new Error("Nothing actually wrong, controlled error.")
        }
    })
}
