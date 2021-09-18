/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
  
import { Stream } from "stream";
export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}