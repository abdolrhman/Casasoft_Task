# Express Mongo JWT Boilerplate [![Build Status](https://travis-ci.org/kasvith/express-mongo-jwt-boilerplate.svg?branch=master)](https://travis-ci.org/kasvith/express-mongo-jwt-boilerplate)

## Installation

- Install NodeJS, MongoDB
- Install `npm` or `yarn`
- Rename `.env.example` to `.env`
- Fulfill `.env` data
- Start MongoDB
- Run `yarn run dev` or `npm run dev`
- Check `http://localhost:3000/api/status` to see it works

## With Docker

- Make sure you have installed `Docker` and `Docker Compose`
- Just run `docker-compose up` to start the server

## Configuration

| Name                 | Description                                                                           | Example                              |
|----------------------|---------------------------------------------------------------------------------------|--------------------------------------|
| NODE_ENV             | Environment for node js                                                               | "dev", "prod", "test"                |
| APP                  | Name of the application                                                               | My cool express app                  |
| PORT                 | Port to run the application (if you run in **heroku** this will setup  automatically) | 3000                                 |
| HOSTNAME             | Host name for running the application                                                 | http://localhost:3000                |
| MONGOURI             | MongoDB connection URI                                                                | mongodb://localhost:27017/Casasoft    |
| MONGOTESTURI         | MongoDB connection URI for testing                                                    | mongodb://localhost:27017/test-app   |
