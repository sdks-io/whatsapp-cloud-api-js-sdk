
# Template

## Structure

`Template`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the template. |
| `language` | [`Language`](../../doc/models/language.md) | Required | Specifies the language the template may be rendered in. Only the deterministic language policy works with media template messages. |
| `components` | [`Component[] \| undefined`](../../doc/models/component.md) | Optional | Array of components objects containing the parameters of the message. |

## Example (as JSON)

```json
{
  "name": "hello_world",
  "language": {
    "code": "en_US",
    "policy": "policy2"
  },
  "components": [
    {
      "type": "button",
      "sub_type": "url",
      "parameters": [
        {
          "key1": "val1",
          "key2": "val2"
        }
      ],
      "index": "index5"
    }
  ]
}
```

