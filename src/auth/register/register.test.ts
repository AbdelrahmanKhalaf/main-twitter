/* eslint-disable prettier/prettier */
import { gCall } from 'src/test-utils/gCall';
import { testConn } from './../../test-utils/testConn';
let conn;
beforeAll(async () => {
    const url = await testConn();
    conn = await url.db('twitter');
})
afterAll(async () => {
    await conn.close()
})
const registerMutition = `
mutation  signup{
    signup(input:{name:"Abdo",email:"abdosSAmy@gmail",password:"01123689625"}){
      name , email
    }
  } 
  `
describe('register', () => {

    it('create user', async () => {
        console.log(await gCall({
            source: registerMutition,
            variableValues: {
                data: {
                    name: "abdo", email: "abdoSamy@gmail.com"
                }
            }

        }));

        // const users = conn.collection('users');
        // const mockUser = { _id: 'some-user-id', name: 'John' };
        // await users.insertOne(mockUser);

        // const insertedUser = await users.findOne({ _id: 'some-user-id' });
        // expect(insertedUser).toEqual(mockUser);
    });
});