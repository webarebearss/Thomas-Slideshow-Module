# Bearbnb Slideshow Module
> For Bearbnb sample product page

## Related Projects

  - https://github.com/airbnbers/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

For deployment:
Todo - run knex migrate and seed
npm start

Photo module for Bearbnb mock product page, to be integrated into proxy server
Add bundle.js into your index.html at https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-281924008100/bundle.js

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

## Development
Compile:
> npm build-sass
> npm build-webpack

Seed:
> npm seed

Test:
> npm test

Create config.js with your database password.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Endpoints

GET /rooms/:listingId/images

POST /rooms/:listingId/images

PUT /rooms/:listingId/images

DELETE /rooms/:listingId/images

