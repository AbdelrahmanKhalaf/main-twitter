/* eslint-disable prettier/prettier */
import { graphql } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import { createSchema } from './../utils/createShema';
interface Options {
    source: string,
    variableValues?: Maybe<{ [key: string]: any;}>
}
export const gCall = async ({ source, variableValues }: Options) => {
    return graphql({
        schema: await createSchema(),
        source,
        variableValues
    })
}