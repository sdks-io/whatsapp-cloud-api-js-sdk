/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ResponseContact {
  input: string;
  waId: string;
}

export const responseContactSchema: Schema<ResponseContact> = object({
  input: ['input', string()],
  waId: ['wa_id', string()],
});