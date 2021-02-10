import * as functions from "firebase-functions";

let svelteServer: any;
exports.ssr = functions.https.onRequest(
    async (request: any, response: any) => {
      if (!svelteServer) {
        functions.logger.info("Initializing SvelteKit SSR Handler");
        svelteServer = require("./sveltekit/handler").sveltekitServer;
        functions.logger.info("SvelteKit SSR Handler initialised!");
      }
      return svelteServer(request, response);
    }
);
