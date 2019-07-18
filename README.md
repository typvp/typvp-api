# typvp-api

Home of the GraphQL API that powers [typvp](https://typvp.xyz)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have `yarn`, `prisma`, and `docker` installed on your system.

```
yarn -v
```

Install `prisma` globally (I like to use npm to globally install modules)

```
npm i -g prisma
```

Check that you have docker-compose available in your cli

```
docker-compose -v
```

### Installing

Clone typvp-api

```
git clone https://github.com/typvp/typvp-api.git
```

Install dependencies

```
yarn
```

Hopefully everything goes smoothly.

## Running/Building

Running the Yoga server for typvp-api locally:

```
yarn dev
```

Running the Docker instance alongside Yoga

```
yarn start:docker
```

Stopping the Docker instance when youre done

```
yarn stop:docker
```


### Make a change to the prisma datamodel?

While the Docker instance is running; 

```
prisma deploy
```

## Running the tests

// todo

## Deployment

Once a PR/commit is merged to `master` it will have to be manually updated until there is a pipeline in place.

## Built With

* graphql-yoga
* graphql-shield
* prisma
* 

## Contributing

// todo
For now just submit a pr..

## Versioning

We _will_ use [semver](http://semver.org/) for versioning, but right now we aren't tracking versions.

## Authors

* **Evan Kysley** - *Core* - [kysley](https://github.com/kysley)

## License

This project is licensed under BSD-3-Clause - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* typings.gg for big inspiration
* 10fastfingers
* typeracer
