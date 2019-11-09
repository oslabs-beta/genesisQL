const tab = ' ';
// let objectType = {
//     objTypeName: "User",
//     fieldNames: ["id", "name"],
//     fieldTypes: ["Int", "String"],
// }
const objectType1 = {
  objTypeName: 'User',
  fieldNames: ['id', 'name'],
  fieldTypes: ['Int', 'String'],
};
const objectType2 = {
  objTypeName: 'Pet',
  fieldNames: ['id', 'name'],
  fieldTypes: ['Int', 'String'],
};

const objectTypes = [objectType1, objectType2];

function createSchema(objectTypes) {
  let result = '';

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


  return result;
}
console.log(createSchema(objectTypes));

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

// creating our apollo server
function importApolloServer() {
  let result = '';
  result += `${tab}const { ApolloServer } = require('apollo-server');\n\n`;
  result += `${tab}const typeDefs = gql\` \n\n`;
  return result;
}

// console.log(createObjType(objectType));


module.exports = createSchema;
