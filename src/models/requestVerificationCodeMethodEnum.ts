/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RequestVerificationCodeMethodEnum
 */
export enum RequestVerificationCodeMethodEnum {
  SMS = 'SMS',
  VOICE = 'VOICE',
}

/**
 * Schema for RequestVerificationCodeMethodEnum
 */
export const requestVerificationCodeMethodEnumSchema: Schema<RequestVerificationCodeMethodEnum> = stringEnum(RequestVerificationCodeMethodEnum);
