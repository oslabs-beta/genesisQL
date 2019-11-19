const tab = '  ';

// may need to sanitize user inputs for types (e.g. string -> String, number -> Int)
function createSchema(objectTypes) {
  let result = '';

  // create import string, start type def with backtick (`)
  result += importApolloServer();

  // create object type strings
  for (const objectType of objectTypes) {
    result += createObjType(objectType);
  }

  // create query strings
  result += `${tab}type Query {\n`;
  for (const objectType of objectTypes) {
    result += createRootQuery(objectType);
  }
  result += `${tab}}\n\n`;

  // create mutation strings
  result += `${tab}type Mutation {\n`;
  for (const objectType of objectTypes) {
    result += createMutation(objectType);
  }
  result += `${tab}}\n\n`;

  // create resolver string
  result += createResolvers();

  // close typedef with backtick (`), create server string
  result += createApolloServer();

  // return final fully concatenated string
  return result;
}
// console.log(createSchema(objectTypes));

function createRootQuery(objectType) {
  const { objTypeName, fieldNames, fieldTypes } = objectType;
  let result = '';
  result += `${tab}${tab}getAll${objTypeName}: [${objTypeName}]\n`;
  result += `${tab}${tab}get${objTypeName}ById(id: ID!): ${objTypeName}\n`;
  return result;
}
// console.log(createRootQuery(objectType));

function createMutation(objectType) {
  const { objTypeName, fieldNames, fieldTypes } = objectType;
  let result = '';
  let args = '';
  for (let i = 0; i < fieldNames.length; i++) {
    args += `${fieldNames[i]}: ${fieldTypes[i]}, `;
  }
  result += `${tab}${tab}add${objTypeName}(${args}): Boolean\n`;
  result += `${tab}${tab}update${objTypeName}(${args}): Boolean\n`;
  result += `${tab}${tab}delete${objTypeName}(id: ID): Boolean\n`;
  return result;
}
// console.log(createMutation(objectType));

function createObjType(objectType) {
  let result = '';
  const { objTypeName, fieldNames, fieldTypes } = objectType;
  result += `${tab}type ${objTypeName} {\n`;
  for (let i = 0; i < fieldNames.length; i++) {
    result += `${tab}${tab}${fieldNames[i]}: ${fieldTypes[i]}\n`;
  }
  result += `${tab}}\n\n`;
  return result;
}

function createResolvers() {
  let result = '';
  result += `${tab}\`; \n\n`;
  result += `${tab}const resolvers = {\n`;
  // result += `${tab}${tab}fieldName: (parent, args, context, info) => data;\n`;
  result += `${tab}};\n\n`;
  return result;
}

// importing our apollo server
function importApolloServer() {
  let result = '';
  result += `${tab}const { ApolloServer, gql } = require('apollo-server');\n\n`;
  result += `${tab}const typeDefs = gql\` \n\n`;
  return result;
}

// creating our apollo server
function createApolloServer() {
  let result = '';
  result += `${tab}const port = process.env.PORT || 4000; // defaults to port 4000 \n`;
  result += `${tab}const server = new ApolloServer({ typeDefs, resolvers });\n\n`;
  result += `${tab}server.listen({ port }).then(({ url }) => {\n`;
  result += `${tab}${tab}console.log(\`🚀  Server listening at \${url}\`);\n`;
  result += `${tab}});`;
  return result;
}

// console.log(createObjType(objectType));

module.exports = createSchema;
