![genesisQL Logo](https://github.com/oslabs-beta/genesisQL/blob/dev/public/genesisCrop.png?raw=true)

#
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# genesisQL
genesisQL is **an open-source web-application that enables rapid schema-prototyping of GraphQL applications**, making your development process easier & faster. Made for developers, by developers.

Created by Adam Goren, Tom Herrmann, Xose Manolo, and Andrew Paisner.

## Features
- Generate graphQL schemas, types, and queries, through an inuitive graphical user interface (GUI)
- Easily select which fields you'd like to use in your schema, from an automatically generated dropdown menu
- Ability to specify whether fields are required or not
- View data retreived from API urls with a single search, in app
- Copy generated schema code to clipboard with a single button click
- Outputted code can be used to set-up/run a functional apollo-server, and access the graphQL playground

## Usage
1) Visit our website: [genesisQL Beta](http://www.genesisql.com/)
2) Enter an endpoint to retrieve your data from (e.g. https://swapi.co/api/people/2/)
3) Enter a name for your object type, and select input field names & types from the dropdown menu. Toggle if needed
4) Use the '+' button to add more fields as needed
5) Press submit to generate your schema output
6) Use the copy button to quickly select the outputted code, and paste it into your project folder as a new file
7) Install apollo server using a package manager of your choice: e.g. 'npm i apollo-server --save'
8) Simply run the new file, and the graphQL playground will appear

## Example Code Output
```javascript
  const { ApolloServer, gql } = require('apollo-server');

  const typeDefs = gql` 

  type starwars_traits {
    name: String!
    mass: Int
    homeworld: String
  }

  type Query {
    getAllstarwars_traits: [starwars_traits]
    getstarwars_traitsById(id: ID!): starwars_traits
  }

  type Mutation {
    addstarwars_traits(name: String!, mass: Int, homeworld: String, ): Boolean
    updatestarwars_traits(name: String!, mass: Int, homeworld: String, ): Boolean
    deletestarwars_traits(id: ID): Boolean
  }

  `; 

  const resolvers = {
  };

  const port = process.env.PORT || 4000; // defaults to port 4000 
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server listening at ${url}`);
  });
```

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/joanaz/HireDot2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/oslabs-beta/genesisQL/compare" target="_blank">`https://github.com/oslabs-beta/genesisQL/compare`</a>.

## Team

> Our People

| <a href="https://github.com/TomHerrmann" target="_blank">**Tom Herrmann**</a> | <a href="https://github.com/adamgoren" target="_blank">**Adam Goren**</a> | <a href="https://github.com/xosemanolo" target="_blank">**Xose Manolo**</a> | <a href="https://github.com/apaisner" target="_blank">**Andrew Paisner**</a> 
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/47604715?s=400&v=4)](https://github.com/TomHerrmann)    | [![FVCproductions](https://avatars0.githubusercontent.com/u/29680823?s=400&v=4)](https://github.com/adamgoren) | [![FVCproductions](https://avatars3.githubusercontent.com/u/39598002?s=400&v=4)](https://github.com/xosemanolo)  |
(https://avatars0.githubusercontent.com/u/14600633?s=400&v=4)](https://github.com/apaisner)  |
| <a href="https://github.com/TomHerrmann" target="_blank">`https://github.com/TomHerrmann`</a> | <a href="https://github.com/adamgoren" target="_blank">`https://github.com/adamgoren`</a> | <a href="https://github.com/xosemanolo" target="_blank">`https://github.com/xosemanolo`</a> | | <a href="https://github.com/apaisner" target="_blank">`https://github.com/apaisner`</a> |
