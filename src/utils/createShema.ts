/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { buildSchema } from 'type-graphql';
export const createSchema = () => buildSchema({
    resolvers: [__dirname + "/../../src/**/*.resolver.ts"],
    authChecker: ({ context: { req } }) => {
        return !!req.user._id
    }
})

