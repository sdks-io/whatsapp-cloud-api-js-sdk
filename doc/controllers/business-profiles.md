# Business Profiles

```ts
const businessProfilesController = new BusinessProfilesController(client);
```

## Class Name

`BusinessProfilesController`

## Methods

* [Get Business Profile ID](../../doc/controllers/business-profiles.md#get-business-profile-id)
* [Update Business Profile](../../doc/controllers/business-profiles.md#update-business-profile)


# Get Business Profile ID

Use this endpoint to retrieve your business’ profile. This business profile is visible to consumers in the chat thread next to the profile photo. The profile information will contain a business profile ID which you can use to make API calls.

```ts
async getBusinessProfileID(
  phoneNumberID: string,
  fields?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetBusinessProfileIDResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `fields` | `string \| undefined` | Query, Optional | Here you can specify what you want to know from your business as a comma separated list of fields. Available fields include: id, about, messaging_product, address, description, vertical, email, websites, profile_picture_url |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetBusinessProfileIDResponse`](../../doc/models/get-business-profile-id-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const fields = 'about,address,description,email,profile_picture_url,websites,vertical';

try {
  const { result, ...httpResponse } = await businessProfilesController.getBusinessProfileID(
    phoneNumberID,
    fields
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
  "data": [
    {
      "messaging_product": "whatsapp",
      "address": "ADDRESS",
      "description": "DESCRIPTION",
      "vertical": "UNDEFINED",
      "email": "EMAIL",
      "websites": [
        "https://WEBSITE-1",
        "https://WEBSITE-2"
      ],
      "profile_picture_url": "https://URL",
      "id": "BUSINESS_PROFILE_ID"
    }
  ]
}
```


# Update Business Profile

Use this endpoint to update your business’ profile information such as the business description, email or address.

```ts
async updateBusinessProfile(
  phoneNumberID: string,
  body: UpdateBusinessProfileRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `body` | [`UpdateBusinessProfileRequest`](../../doc/models/update-business-profile-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const body: UpdateBusinessProfileRequest = {
  messagingProduct: 'whatsapp',
  address: 'ADDRESS',
  description: 'DESCRIPTION',
  vertical: VerticalEnum.UNDEFINED,
  email: 'EMAIL',
  websites: [
    'https://WEBSITE-1',
    'https://WEBSITE-2'
  ],
  profilePictureUrl: 'https://URL',
};

try {
  const { result, ...httpResponse } = await businessProfilesController.updateBusinessProfile(
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

