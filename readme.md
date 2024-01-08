MSVote Backend API
==================

This is a Node.js Express application that uses Cosmos DB to serve as the backend for the MSVote website. MSVote is a web platform that allows users to submit learning resources related to Microsoft exams and vote on those resources.

Prerequisites
-------------

Before you can run this project, you will need the following:

-   A [Cosmos DB account](https://learn.microsoft.com/en-us/samples/azure/azure-quickstart-templates/cosmosdb-sql/) with SQL API, a database, and a container. You can follow this [quickstart](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal) to create them using the Azure portal, or use this [template](https://learn.microsoft.com/en-us/samples/azure/azure-quickstart-templates/cosmosdb-sql-serverless/) to create a serverless account.
-   The connection details of your Cosmos DB account, such as the endpoint, key, database name, and container name. You can find them in the Azure portal under **Keys** and **Data Explorer** sections of your account.
-   A .env file in the root directory with the following variables:

```
DATABASE_NAME=<your-cosmos-db-database-name>
CONTAINER_NAME=<your-cosmos-db-container-name>
COSMOS_ENDPOINT=<your-cosmos-db-endpoint>
COSMOS_KEY=<your-cosmos-db-key>

```

Installation
------------

Clone this repository and install the dependencies:

```
git clone https://github.com/adamwhiles/msvote-backend.git
cd msvote-backend
npm install

```

Usage
-----

Start the server:

```
npm start

```

The server will listen on port 5000 by default.

The API has the following endpoints (Work in Progress):

-   `GET /getCerts` - Returns a list of all certs
-   `GET /getCert/:id` - Returns Cert detail for the provided cert id ex: AZ-104
-   `POST /addCert` - Adds a new cert (partiall implemented with static data)

Contributing
------------

If you want to contribute to this project, please follow these steps:

-   Fork this repository and create a new branch
-   Make your changes and commit them with a descriptive message
-   Push your branch to your forked repository
-   Create a pull request and explain your changes

License
-------

This project is licensed under the MIT License.