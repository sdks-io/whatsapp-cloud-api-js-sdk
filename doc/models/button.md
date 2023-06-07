
# Button

## Structure

`Button`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | **Default**: `'reply'` |
| `title` | `string \| undefined` | Optional | Button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.<br>**Constraints**: *Maximum Length*: `20` |
| `id` | `string \| undefined` | Optional | Unique identifier for your button. This ID is returned in the webhook when the button is clicked by the user.<br>**Constraints**: *Maximum Length*: `256` |

## Example (as JSON)

```json
{
  "type": "reply",
  "title": "title4",
  "id": "id0"
}
```

