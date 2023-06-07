# Phone Numbers

```ts
const phoneNumbersController = new PhoneNumbersController(client);
```

## Class Name

`PhoneNumbersController`

## Methods

* [Get Phone Number by ID](../../doc/controllers/phone-numbers.md#get-phone-number-by-id)
* [Request Verification Code](../../doc/controllers/phone-numbers.md#request-verification-code)
* [Verify Code](../../doc/controllers/phone-numbers.md#verify-code)


# Get Phone Number by ID

When you query all the phone numbers for a WhatsApp Business Account, each phone number has an id. You can directly query for a phone number using this id.

```ts
async getPhoneNumberByID(
  phoneNumberID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetPhoneNumberByIDResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetPhoneNumberByIDResponse`](../../doc/models/get-phone-number-by-id-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

try {
  const { result, ...httpResponse } = await phoneNumbersController.getPhoneNumberByID(phoneNumberID);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "verified_name": "Jasper's Market",
  "display_phone_number": "+1 631-555-5555",
  "id": "1906385232743451",
  "quality_rating": "GREEN"
}
```


# Request Verification Code

Used to request a code to verify a phone number's ownership. You need to verify the phone number you want to use to send messages to your customers. Phone numbers must be verified through SMS/voice call. The verification process can be done through the Graph API calls specified below.

```ts
async requestVerificationCode(
  phoneNumberID: string,
  codeMethod: RequestVerificationCodeMethodEnum,
  locale: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `codeMethod` | [`RequestVerificationCodeMethodEnum`](../../doc/models/request-verification-code-method-enum.md) | Form, Required | Chosen method for verification. |
| `locale` | `string` | Form, Required | Your locale. For example: "en_US". |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const codeMethod = RequestVerificationCodeMethodEnum.SMS;

const locale = 'en_US';

try {
  const { result, ...httpResponse } = await phoneNumbersController.requestVerificationCode(
    phoneNumberID,
    codeMethod,
    locale
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true
}
```


# Verify Code

Used to verify a phone number's ownership. After you have received a SMS or Voice request code for verification, you need to verify the code that was sent to you.

```ts
async verifyCode(
  phoneNumberID: string,
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `code` | `string` | Form, Required | The code you received after calling FROM_PHONE_NUMBER_ID/request_code. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const code = '<your-requested-code>';

try {
  const { result, ...httpResponse } = await phoneNumbersController.verifyCode(
    phoneNumberID,
    code
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true
}
```

