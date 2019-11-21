let schemaGen = require('../server/utils/create_templates/schema.js');

function sum(a, b) {
    return a + b;
}
// console.log(schemaGen);

// for testing purposes


// const objectTypes;

// const objectType1 = {
//     objTypeName: 'User',
//     fieldNames: ['id', 'name'],
//     fieldTypes: ['Int', 'String'],
//   };
//   const objectType2 = {
//     objTypeName: 'Pet',
//     fieldNames: ['id', 'name'],
//     fieldTypes: ['Int', 'String'],
//   };
  
//   objectTypes = [objectType1, objectType2];
describe('Schema Generator Unit Tests', () => {
    let objectTypes;
    beforeEach( ()=> {
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
        
        objectTypes = [objectType1, objectType2];
    })

    it('Testing type output of schema gen function', () => {
        // console.log(schemaGen);
        expect(schemaGen(objectTypes)).toEqual(expect.stringMatching(/.*type.*/));
    });
})