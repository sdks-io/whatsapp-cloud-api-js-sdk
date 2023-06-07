
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audio` | [`Audio \| undefined`](../../doc/models/audio.md) | Optional | A media object containing audio. Required when type=audio. |
| `contacts` | [`Contact[] \| undefined`](../../doc/models/contact.md) | Optional | A contact object. Required when type=contacts. |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | A media object containing a document. Required when type=document. |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | A media object containing an image. Required when type=image. |
| `interactive` | [`Interactive \| undefined`](../../doc/models/interactive.md) | Optional | This option is used to send List Messages and Reply Buttons. The components of each interactive object generally follow a consistent pattern: header, body, footer, and action. Required when type=interactive. |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | A location object. Required when type=location. |
| `messagingProduct` | `string` | Required | Messaging service used for the request. |
| `recipientType` | `string \| undefined` | Optional | Currently, you can only send messages to individuals.<br>**Default**: `'individual'` |
| `sticker` | [`Sticker \| undefined`](../../doc/models/sticker.md) | Optional | A media object containing a sticker. Currently, we support inbound both and outbound stickers: For outbound, we only support static third-party stickers. For inbound, we support all types of stickers. The sticker needs to be 512x512 pixels and the file’s size needs to be less than 100 KB. Required when type=sticker. |
| `template` | [`Template \| undefined`](../../doc/models/template.md) | Optional | A template object. Required when type=template. |
| `text` | [`Text \| undefined`](../../doc/models/text.md) | Optional | Required for text messages. |
| `to` | `string` | Required | WhatsApp ID or phone number for the person you want to send a message to. |
| `type` | [`MessageTypeEnum \| undefined`](../../doc/models/message-type-enum.md) | Optional | The type of message you want to send. |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | A media object containing a video. Required when type=video. |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "to": "{{Recipient-Phone-Number}}",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en_US"
    }
  },
  "audio": {
    "id": "id8",
    "link": "link8"
  },
  "contacts": [
    {
      "addresses": [
        {
          "street": "street3",
          "city": "city3",
          "state": "state9",
          "zip": "zip7",
          "country": "country7"
        },
        {
          "street": "street4",
          "city": "city4",
          "state": "state0",
          "zip": "zip8",
          "country": "country8"
        }
      ],
      "birthday": "birthday7",
      "emails": [
        {
          "email": "email0",
          "type": "HOME"
        },
        {
          "email": "email1",
          "type": "WORK"
        }
      ],
      "name": {
        "formatted_name": "formatted_name1",
        "first_name": "first_name7",
        "last_name": "last_name5",
        "middle_name": "middle_name7",
        "suffix": "suffix7",
        "prefix": "prefix5"
      },
      "org": {
        "company": "company3",
        "department": "department3",
        "title": "title9"
      },
      "phones": [
        {
          "phone": "phone5",
          "wa_id": "wa_id5",
          "type": "HOME"
        }
      ]
    },
    {
      "addresses": [
        {
          "street": "street4",
          "city": "city4",
          "state": "state0",
          "zip": "zip8",
          "country": "country8"
        },
        {
          "street": "street5",
          "city": "city5",
          "state": "state1",
          "zip": "zip9",
          "country": "country9"
        },
        {
          "street": "street6",
          "city": "city6",
          "state": "state2",
          "zip": "zip0",
          "country": "country0"
        }
      ],
      "birthday": "birthday8",
      "emails": [
        {
          "email": "email1",
          "type": "WORK"
        },
        {
          "email": "email2",
          "type": "HOME"
        },
        {
          "email": "email3",
          "type": "WORK"
        }
      ],
      "name": {
        "formatted_name": "formatted_name2",
        "first_name": "first_name8",
        "last_name": "last_name6",
        "middle_name": "middle_name8",
        "suffix": "suffix8",
        "prefix": "prefix6"
      },
      "org": {
        "company": "company4",
        "department": "department4",
        "title": "title0"
      },
      "phones": [
        {
          "phone": "phone6",
          "wa_id": "wa_id6",
          "type": "WORK"
        },
        {
          "phone": "phone7",
          "wa_id": "wa_id7",
          "type": "CELL"
        }
      ]
    }
  ],
  "document": {
    "id": "id6",
    "link": "link6",
    "caption": "caption0",
    "filename": "filename8"
  },
  "image": {
    "id": "id6",
    "link": "link6",
    "caption": "caption0"
  },
  "interactive": {
    "action": {
      "button": "button2",
      "buttons": [
        {
          "type": "type8",
          "title": "title4",
          "id": "id8"
        }
      ],
      "sections": [
        {
          "title": "title7",
          "rows": [
            {
              "id": "id6",
              "title": "title2",
              "description": "description6"
            }
          ]
        }
      ]
    },
    "body": {
      "text": "text8"
    },
    "footer": {
      "text": "text4"
    },
    "header": {
      "type": "text",
      "text": "text4",
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
    "type": "list"
  }
}
```

