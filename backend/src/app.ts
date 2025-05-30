import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";
import "dotenv/config";
import buildingRoutes from "./modules/building/building.routes";
import floorRoutes from "./modules/floor/floor.routes";
import roomRoutes from "./modules/room/room.routes";
import deviceRoutes from "./modules/device/device.routes";
import { buildingSchemas } from "./modules/building/building.schema";
import { floorSchemas } from "./modules/floor/floor.schema";
import { roomSchemas } from "./modules/room/room.schema";
import { deviceSchemas } from "./modules/device/device.schema";
import { automationSchemas } from "./modules/automation/automation.schema";
import automationRoutes from "./modules/automation/automation.routes";

export const server = Fastify();

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      id: number;
      email: string;
      name: string;
    };
  }
}

server.register(fastifyCors, {
  origin: "*",
});

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  console.error("JWT_SECRET environment variable is missing!");
  throw new Error("JWT_SECRET is not defined - please check your .env file");
}

server.register(fastifyJwt, {
  secret: jwtSecret,
});

server.decorate(
  "authenticate", // name of the decorator
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  }
);

server.get("/", async () => {
  return { healthcheck: "OK" };
});

async function main() {
  //   for (const schema of [
  //     ...funcionarioSchemas,
  //     ...adminSchemas,
  //     ...cargoSchemas,
  //     ...tabelaFuncionarioSchemas,
  //     ...obraSchemas,
  //     ...itemSchemas,
  //     ...eventoSchemas,
  //   ]) {
  //     server.addSchema(schema);
  //   }

  for (const schema of [
    ...buildingSchemas,
    ...floorSchemas,
    ...roomSchemas,
    ...deviceSchemas,
    ...automationSchemas,
  ]) {
    server.addSchema(schema);
  }

  await server.register(require("@fastify/swagger"));
  await server.register(require("@fastify/swagger-ui"), {
    routePrefix: "/docs",
  });
  server.register(buildingRoutes, {
    prefix: "/api/building",
  });
  server.register(floorRoutes, {
    prefix: "/api/floor",
  });
  server.register(roomRoutes, {
    prefix: "/api/room",
  });
  server.register(deviceRoutes, {
    prefix: "/api/device",
  });
  server.register(automationRoutes, {
    prefix: "/api/automation",
  });
  //   server.register(funcionarioRoutes, { prefix: "/api/func" });
  //   server.register(adminRoutes, { prefix: "/api/admin" });
  //   server.register(cargoRoutes, { prefix: "/api/cargo" });
  //   server.register(tabelaFuncionarioRoutes, { prefix: "/api/tabela" });
  //   server.register(eventoRoutes, { prefix: "/api/evento" });
  //   server.register(obraRoutes, { prefix: "/api/obra" });
  //   server.register(itemRoutes, { prefix: "/api/item" });

  //   console.log("Rebuilt at " + new Date().toLocaleString());
  //   console.log("Server started at " + new Date().toLocaleString());
  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 4567;
    await server
      .listen({
        port,
        host: "0.0.0.0",
      })
      .then(() => {
        console.log(`Server listening on port ${port}`);
        console.log(
          `Swagger UI available at http://localhost:${port}/docs/static/index.html`
        );
      });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
