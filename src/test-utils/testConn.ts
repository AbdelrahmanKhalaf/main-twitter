/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { MongoClient } from 'mongodb';
export const testConn = async (drop: boolean = false) => {
    let connection;
        return   connection = await MongoClient.connect("mongodb+srv://abdo2020:01123689625@temwork-vxavl.mongodb.net/twitter?retryWrites=true&w=majority", {});
 

}

