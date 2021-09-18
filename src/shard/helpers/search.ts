/* eslint-disable prettier/prettier */
import { DtoUser } from './../../user/shard/dto/user.dto';
export function emailFound(email: string, array: Array<DtoUser>) {
  return array.some(function (el: any) {
    return el.email === email;
  });
}

