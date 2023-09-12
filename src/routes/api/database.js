// Get Cosmos Client
import 'dotenv/config'
import { CosmosClient } from "@azure/cosmos";

const key = process.env.COSMOS_KEY;
const endpoint = process.env.COSMOS_ENDPOINT;
const cosmosClient = new CosmosClient({ endpoint, key });

export const containerClient = cosmosClient.database("mainChat").container("data");
