import { Server } from "@hapi/hapi"
import { readFileSync, writeFileSync } from "fs"


const CONFIG = {
    ENV_VAR: process.env.ENV_VAR, DATA_PATH: process.env.DATA_PATH,
}


export function routes (server: Server)
{
    server.route({
        method: "GET",
        path: "/",
        handler: async function (request, h) {
          
          const file_name = request.query.file_name || ""
          const operation = request.query.op || ""
          let data = request.query.data || ""
          let error = ""
          
          try
          {
            if (operation)
            {
              if (!file_name)
              {
                data = ""
                error = "No file name provided"
              }
              else if (operation === "write")
              {
                writeFileSync(CONFIG.DATA_PATH + file_name, data)
                data = "SUCCESS!"
              }
              else
              {
                data = readFileSync(CONFIG.DATA_PATH + file_name)
              }
            }
          } catch (e)
          {
            error = ` ${e}`
          }


          if (error)
          {
            return `Error: ${error}`
          }
          else
          {
            return `Hello World! ${CONFIG.ENV_VAR} Data store: ${CONFIG.DATA_PATH}.  ${operation} from/to: ${file_name} data: "${data}"`
          }

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
