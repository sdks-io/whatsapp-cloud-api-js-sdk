
# Register Phone Request

## Structure

`RegisterPhoneRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messagingProduct` | `string` | Required | Messaging service used. In this case, use "whatsapp". |
| `pin` | `string` | Required | A 6-digit pin you have previously set up - See Set Two-Step Verification. |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "pin": "<your-6-digit-pin>"
}
```

