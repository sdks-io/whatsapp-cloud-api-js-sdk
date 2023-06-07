
# Business Profile

## Structure

`BusinessProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID of the business profile object. |
| `messagingProduct` | `string` | Required | The messaging service used for the request. Always set it to "whatsapp" if you are using the WhatsApp Business API. |
| `address` | `string` | Required | Address of the business.<br>**Constraints**: *Maximum Length*: `256` |
| `description` | `string` | Required | Description of the business.<br>**Constraints**: *Maximum Length*: `256` |
| `vertical` | [`VerticalEnum \| undefined`](../../doc/models/vertical-enum.md) | Optional | Industry of the business. This can be either an empty string or one of the accepted values. |
| `email` | `string \| undefined` | Optional | The contact email address (in valid email format) of the business.<br>**Constraints**: *Maximum Length*: `128` |
| `websites` | `string[] \| undefined` | Optional | The URLs associated with the business. For instance, a website, Facebook Page, or Instagram. You must include the http:// or https:// portion of the URL.<br>**Constraints**: *Maximum Items*: `2`, *Maximum Length*: `256` |
| `profilePictureUrl` | `string \| undefined` | Optional | URL of the profile picture generated from a call to the Resumable Upload API. |

## Example (as JSON)

```json
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
```

