const tab = ` `;
// let table = {
//     objTypeName: "User",
//     fieldNames: ["id", "name"],
//     fieldTypes: ["Int", "String"],
// }
let table1 = {
    objTypeName: "User",
    fieldNames: ["id", "name"],
    fieldTypes: ["Int", "String"],
}
let table2 = {
    objTypeName: "Pet",
    fieldNames: ["id", "name"],
    fieldTypes: ["Int", "String"],
}

let tables = [table1, table2];

function createSchema(tables){
    let result =``;
    result += `${tab}type Query {\n`;
    for(let table of tables){
        result += createRootQuery(table);
    }
    result += `${tab}}\n\n`;
    result += `${tab}type Mutation {\n`;
    for(let table of tables){
        result += createMutation(table);
    }
    result += `${tab}}\n\n`;
    for(let table of tables){
        result += createObjType(table);
    }

    return result;
}
console.log(createSchema(tables));


function createRootQuery(table){
    const {objTypeName, fieldNames, fieldTypes} = table;
    let result = ``;
    result += `${tab}${tab}getAll${objTypeName}: [${objTypeName}]\n`
    result += `${tab}${tab}get${objTypeName}ById(id: ID!): ${objTypeName}\n`
    return result;
}
// console.log(createRootQuery(table));

function createMutation(table){
    const {objTypeName, fieldNames, fieldTypes} = table;
    let result = ``;
    let args = ``;
    for(let i = 0; i < fieldNames.length; i++){
        args += `${fieldNames[i]}: ${fieldTypes[i]}, `
    }
    result += `${tab}${tab}add${objTypeName}(${args}): Boolean\n`;
    result += `${tab}${tab}update${objTypeName}(${args}): Boolean\n`;
    result += `${tab}${tab}delete${objTypeName}(id: ID): Boolean\n`;
    return result;
}
// console.log(createMutation(table));

function createObjType(table){
    let result = ``;
    const {objTypeName, fieldNames, fieldTypes} = table;
    result += `${tab}type ${objTypeName} {\n`
    for(let i = 0; i < fieldNames.length; i++) {
        result += `${tab}${tab}${fieldNames[i]}: ${fieldTypes[i]}\n`
    }
    result += `${tab}}\n\n`
    return result;
}

    // console.log(createObjType(table));


module.exports = createSchema;