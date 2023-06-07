/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GetPhoneNumberByIDResponse,
  getPhoneNumberByIDResponseSchema,
} from '../models/getPhoneNumberByIDResponse';
import {
  RequestVerificationCodeMethodEnum,
  requestVerificationCodeMethodEnumSchema,
} from '../models/requestVerificationCodeMethodEnum';
import {
  SuccessResponse,
  successResponseSchema,
} from '../models/successResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class PhoneNumbersController extends BaseController {
  /**
   * When you query all the phone numbers for a WhatsApp Business Account, each phone number has an id.
   * You can directly query for a phone number using this id.
   *
   * @param phoneNumberID
   * @return Response from the API call
   */
  async getPhoneNumberByID(
    phoneNumberID: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetPhoneNumberByIDResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      phoneNumberID: [phoneNumberID, string()],
    });
    req.appendTemplatePath`/${mapped.phoneNumberID}`;
    return req.callAsJson(getPhoneNumberByIDResponseSchema, requestOptions);
  }

  /**
   * Used to request a code to verify a phone number's ownership. You need to verify the phone number you
   * want to use to send messages to your customers. Phone numbers must be verified through SMS/voice
   * call. The verification process can be done through the Graph API calls specified below.
   *
   * @param phoneNumberID
   * @param codeMethod      Chosen method for verification.
   * @param locale          Your locale. For example: "en_US".
   * @return Response from the API call
   */
  async requestVerificationCode(
    phoneNumberID: string,
    codeMethod: RequestVerificationCodeMethodEnum,
    locale: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SuccessResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      phoneNumberID: [phoneNumberID, string()],
      codeMethod: [codeMethod, requestVerificationCodeMethodEnumSchema],
      locale: [locale, string()],
    });
    req.form({
      code_method: mapped.codeMethod,
      locale: mapped.locale,
    });
    req.appendTemplatePath`/${mapped.phoneNumberID}/request_code`;
    return req.callAsJson(successResponseSchema, requestOptions);
  }

  /**
   * Used to verify a phone number's ownership. After you have received a SMS or Voice request code for
   * verification, you need to verify the code that was sent to you.
   *
   * @param phoneNumberID
   * @param code            The code you received after calling FROM_PHONE_NUMBER_ID/request_code.
   * @return Response from the API call
   */
  async verifyCode(
    phoneNumberID: string,
    code: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SuccessResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      phoneNumberID: [phoneNumberID, string()],
      code: [code, string()],
    });
    req.form({
      code: mapped.code,
    });
    req.appendTemplatePath`/${mapped.phoneNumberID}/verify_code`;
    return req.callAsJson(successResponseSchema, requestOptions);
  }
}
