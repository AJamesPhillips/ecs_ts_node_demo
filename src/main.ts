import * as Hapi from "@hapi/hapi"

import * as Home from "./views/home"



const dev = true

const server_options: Hapi.ServerOptions = {
    port: 5005,
    host: "127.0.0.1",
    debug: { log: ["yes"] },
    routes: {
        cors: dev ? ({
            // Also allows API calls from server code as these have origin "
            origin: ["http://localhost:3000"],  // address of webpack dev server
            credentials: true,
        }) : false,
    }
}

const base_server = new Hapi.Server(server_options)



async function setup_server ()
{
    await base_server.start()

    Home.routes(base_server)

    base_server.log("info", `Server running at: ${base_server.info!.uri}`)
}


if (require.main === module) {
    setup_server()
    .catch(err => { throw err })
}
