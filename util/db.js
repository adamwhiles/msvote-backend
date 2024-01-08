import { DefaultAzureCredential } from "@azure/identity";
import { CosmosClient } from "@azure/cosmos";
import dotenv from 'dotenv';
dotenv.config();


const endpoint = process.env.COSMOS_ENDPOINT;

// Set Database name and container name with unique timestamp
const databaseName = process.env.DATABASE_NAME
const containerName = process.env.CONTAINER_NAME
const credentials = new DefaultAzureCredential();

// Authenticate to Azure Cosmos DB
const cosmosClient = new CosmosClient({ 
    endpoint, 
    aadCredentials: credentials 
});

const database = await cosmosClient.database(databaseName);

const container = await database.container(containerName);

export default container;
