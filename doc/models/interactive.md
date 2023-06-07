
# Interactive

## Structure

`Interactive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`Action`](../../doc/models/action.md) | Required | Action you want the user to perform after reading the message. |
| `body` | [`Body`](../../doc/models/body.md) | Required | The body of the message. Emojis and markdown are supported. |
| `footer` | [`Footer \| undefined`](../../doc/models/footer.md) | Optional | The footer of the message. Emojis and markdown are supported. |
| `header` | [`Header \| undefined`](../../doc/models/header.md) | Optional | Header content displayed on top of a message. |
| `type` | [`InteractiveTypeEnum`](../../doc/models/interactive-type-enum.md) | Required | The type of interactive message you want to send. |

## Example (as JSON)

```json
{
  "type": "list",
  "header": {
    "type": "text",
    "text": "<Header List Message>",
    "video": {
      "link": "link2",
      "id": "id2"
    },
    "image": {
      "id": "id0",
      "link": "link0",
      "caption": "caption4"
    },
    "document": {
      "id": "id0",
      "link": "link0",
      "caption": "caption4",
      "filename": "filename2"
    }
  },
  "body": {
    "text": "<List Body Message>"
  },
  "footer": {
    "text": "<Footer Message>"
  },
  "action": {
    "button": "Send",
    "sections": [
      {
        "title": "<List Category Item>",
        "rows": [
          {
            "id": "<Item ID>",
            "title": "<Item Title>",
            "description": "<Item Description>"
          },
          {
            "id": "<Item ID>",
            "title": "<Item Title>",
            "description": "<Item Description>"
          }
        ]
      },
      {
        "title": "<List Item>",
        "rows": [
          {
            "id": "<Item ID>",
            "title": "<Item Title>",
            "description": "<Item Description>"
          },
          {
            "id": "<Item ID>",
            "title": "<Item Title>",
            "description": "<Item Description>"
          }
        ]
      }
    ],
    "buttons": [
      {
        "type": "type0",
        "title": "title6",
        "id": "id0"
      },
      {
        "type": "type1",
        "title": "title7",
        "id": "id1"
      }
    ]
  }
}
```

