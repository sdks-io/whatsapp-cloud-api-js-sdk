# Registration

You need to register your phone number in the following scenarios:

* Account Creation: When you implement this API, you need to register the phone number you want to use to send messages. We enforce [setting two-step verification](#fc57a30c-97e0-4e06-b74b-89fd7fc5f783) during account creation to add an extra layer of security of your accounts.
* Name Change: In this case, your phone is already registered and you want to change your display name. To do that, you must first [file for a name change on WhatsApp Manager](https://www.facebook.com/business/help/378834799515077). Once the name is approved, you need to register your phone again under the new name.

Before registering your phone, you need to verify that you own that phone number with a SMS or voice code. For details, see [Verify Phone Ownership](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/migrate-phone-to-different-waba#step-2--verify-phone-ownership).

In case you would like to remove your phone from the Cloud API, you can deregister a phone. This can be used in cases where you want to move to the On-Premises API or you want to use your phone number in the regular WhatsApp customer app. You can always reregister your phone with Cloud API later by repeating the registration process.

**You set up** [**two-factor verification**](#fc57a30c-97e0-4e06-b74b-89fd7fc5f783) **and** [**register a phone number**](#b22af3db-9d13-4467-a7a6-4026f71984cb) **in the same API call.**

#### Reminders

* To use these endpoints, you need to authenticate yourself with a system user access token with the **`whatsapp_business_messaging`** permission.
* If you need to find your phone number ID, see [Get Phone Number ID](#c72d9c17-554d-4ae1-8f9e-b28a94010b28).

```ts
const registrationController = new RegistrationController(client);
```

## Class Name

`RegistrationController`

## Methods

* [Register Phone](../../doc/controllers/registration.md#register-phone)
* [Deregister Phone](../../doc/controllers/registration.md#deregister-phone)


# Register Phone

Used to register a phone number or to migrate WhatsApp Business Accounts from a current On-Premises deployment to the new Cloud-Based API. Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_management permission.

```ts
async registerPhone(
  phoneNumberID: string,
  body: RegisterPhoneRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `body` | [`RegisterPhoneRequest`](../../doc/models/register-phone-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const body: RegisterPhoneRequest = {
  messagingProduct: 'whatsapp',
  pin: '<your-6-digit-pin>',
};

try {
  const { result, ...httpResponse } = await registrationController.registerPhone(
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


# Deregister Phone

Used to deregister a phone number. Deregister phone removes a previously registered phone. You can always re-register your phone using by repeating the registration process. Business Solution Providers (BSPs) must authenticate themselves with an access token with the whatsapp_business_management permission.

```ts
async deregisterPhone(
  contentType: ContentTypeEnum,
  phoneNumberID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `phoneNumberID` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const contentType = ContentTypeEnum.EnumApplicationjson;

const phoneNumberID = 'Phone-Number-ID6';

try {
  const { result, ...httpResponse } = await registrationController.deregisterPhone(
    contentType,
    phoneNumberID
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

