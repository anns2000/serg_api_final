# SRGE API Documentation

## Introduction
This is a RESTful API for managing data related to scientific research and academic achievements. The API provides endpoints for creating, reading, updating, and deleting data related to book chapters, users, journals, international conferences, books, national conferences, members, and events.

## Prerequisites
To use this API, you will need the following:

- Node.js and npm installed on your machine.
- A MongoDB database instance running locally or on a remote server.
- A text editor or IDE for writing code.

## Installation
To install the dependencies for this project, run the following command in your terminal:

```
npm install
```

## Configuration
To configure the API, you will need to create a `.env` file in the root directory of the project. The `.env` file should contain the following environment variables:

```
PORT=5503
MONGODB_URI=mongodb+srv://anns2000:anas123@testanas.abjkarq.mongodb.net/SRGE
```

- `PORT`: The port on which the API will listen for requests.
- `MONGODB_URI`: The connection string for your MongoDB database.

## Usage
To start the API, run the following command in your terminal:

```
npm start
```

The API will start listening for requests on the specified port.

## Endpoints
The API provides the following endpoints:

- `/bookChapters`: This endpoint allows you to create, read, update, and delete book chapters.
- `/user`: This endpoint allows you to create, read, update, and delete users.
- `/jorn`: This endpoint allows you to create, read, update, and delete journals.
- `/InternationalConf`: This endpoint allows you to create, read, update, and delete international conferences.
- `/book`: This endpoint allows you to create, read, update, and delete books.
- `/news`: This endpoint allows you to create, read, update, and delete news.
- `/socialactivities`: This endpoint allows you to create, read, update, and delete socialactivities.
- `/national`: This endpoint allows you to create, read, update, and delete national conferences.
- `/member`: This endpoint allows you to create, read, update, and delete members.
- `/event`: This endpoint allows you to create, read, update, and delete events.

Each endpoint has its own set of HTTP methods that can be used to perform different operations. For example, the `/bookChapters` endpoint has the following HTTP methods:

- `GET
