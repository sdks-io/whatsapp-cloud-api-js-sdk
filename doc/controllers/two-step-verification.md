# Two-Step Verification

```ts
const twoStepVerificationController = new TwoStepVerificationController(client);
```

## Class Name

`TwoStepVerificationController`


# Set Two Step Verification Code

You are required to set up two-step verification for your phone number, as this provides an extra layer of security to the business accounts. You can use this endpoint to change two-step verification code associated with your account.
After you change the verification code, future requests like changing the name, must use the new code.

You set up two-factor verification and register a phone number in the same API call.

```ts
async setTwoStepVerificationCode(
  phoneNumberID: string,
  body: SetTwoStepVerificationCodeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `body` | [`SetTwoStepVerificationCodeRequest`](../../doc/models/set-two-step-verification-code-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const body: SetTwoStepVerificationCodeRequest = {
  pin: '<6-digit-pin>',
};

try {
  const { result, ...httpResponse } = await twoStepVerificationController.setTwoStepVerificationCode(
    phoneNumberID,
    body
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

