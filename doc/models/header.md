
# Header

## Structure

`Header`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`HeaderTypeEnum`](../../doc/models/header-type-enum.md) | Required | The header type you would like to use. |
| `text` | `string \| undefined` | Optional | Required if type is set to text. Text for the header. Formatting allows emojis, but not markdown.<br>**Constraints**: *Maximum Length*: `60` |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | Required if type is set to video. Contains the media object for this video. |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | Required if type is set to image. Contains the media object for this image. |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | Required if type is set to document. Contains the media object for this document. |

## Example (as JSON)

```json
{
  "type": "text",
  "text": "<Header List Message>",
  "video": {
    "link": "link6",
    "id": "id6"
  },
  "image": {
    "id": "id6",
    "link": "link6",
    "caption": "caption0"
  },
  "document": {
    "id": "id6",
    "link": "link6",
    "caption": "caption0",
    "filename": "filename8"
  }
}
```

