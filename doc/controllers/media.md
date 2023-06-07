# Media

You can use the following endpoints to upload, retrieve, or delete media:

| Endpoint       | Uses |
| ----------- | ---------- |
| [POST /{phone-number-ID}/media] | Upload media. |
| [GET /{media-ID}] | Retrieve the URL for a specific media item. |
| [DELETE /{media-ID}] | Delete a specific media item. |
| [GET /{media-URL}] | Download media from a media URL. |

#### Reminders

* To use these endpoints, you need to authenticate yourself with a system user access token with the **`whatsapp_business_messaging`** permission.
* If you need to find your phone number ID, see [Get Phone Number ID](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/phone-numbers).
* If you need to find your media URL, see [Retrieve Media URL](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#download-media).

#### Support Media Types

| Media       | Supported File Type(s) | Size Limit |
| ----------- | ----------------------- | ---------- |
| `audio`       | <ul><li>`audio/aac`</li><li>`audio/mp4`</li><li>`audio/mpeg`</li><li>`audio/amr`</li><li>`audio/ogg`</li></ul><br> **Note**: only opus codecs, base audio/ogg is not supported | 16MB |
| `document`    | <ul><li>`text/plain`</li><li>`application/pdf`</li><li>`application/vnd.ms-powerpoint`</li><li>`application/msword`</li><li>`application/vnd.ms-excel`</li><li>`application/vnd.openxmlformats-officedocument.wordprocessingml.document`</li><li>`application/vnd.openxmlformats-officedocument.presentationml.presentation`</li><li>`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`</li></ul> | 100MB |
| `image` | <ul><li>`image/jpeg`</li><li>`image/png`</li></ul> | 5MB |
| `sticker` | <ul><li>`image/webp`</li></ul> | 100KB |
| `video` | <ul><li>`video/mp4`</li><li>`video/3sp`</li></ul><br/>**Notes**:<ul><li>Only H.264 video codec and AAC audio codec is supported.</li><li>We support videos with a single audio stream or no audio stream.</li><ul> | 16MB |

#### Get Media ID

To complete some of the following API calls, you need to have a media ID. There are two ways to get this ID:

* **From the API call**: Once you have successfully uploaded media files to the API, the media ID is included in the response to your call.
* **From Webhooks**: When a business account receives a media message, it downloads the media and uploads it to the Cloud API automatically. That event triggers the Webhooks and sends you a notification that includes the media ID.

```ts
const mediaController = new MediaController(client);
```

## Class Name

`MediaController`

## Methods

* [Upload Media](../../doc/controllers/media.md#upload-media)
* [Retrieve Media URL](../../doc/controllers/media.md#retrieve-media-url)
* [Delete Media](../../doc/controllers/media.md#delete-media)


# Upload Media

Used to upload media. All media files sent through this endpoint are encrypted and persist for 30 days.

```ts
async uploadMedia(
  phoneNumberID: string,
  messagingProduct: string,
  file: string,
  type: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadMedia>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumberID` | `string` | Template, Required | - |
| `messagingProduct` | `string` | Form, Required | Messaging service used for the request. In this case, use whatsapp. |
| `file` | `string` | Form, Required | Path to the file stored in your local directory. For example: "@/local/path/file.jpg". |
| `type` | `string` | Form, Required | Type of media file being uploaded. See Supported Media Types for more information.<br><br>Supported options for images are: `image/jpeg`, `image/png`<br><br>Supported options for documents are: `text/plain`, `application/pdf`, `application/vnd.ms-powerpoint`, `application/msword`, `application/vnd.ms-excel`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`<br><br>Supported options for audio are: `audio/aac`, `audio/mp4`, `audio/mpeg`, `audio/amr`, `audio/ogg`, `audio/opus`<br><br>Supported options for video are: `video/mp4`, `video/3gp`<br><br>Supported options for stickers are: `image/webp` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UploadMedia`](../../doc/models/upload-media.md)

## Example Usage

```ts
const phoneNumberID = 'Phone-Number-ID6';

const messagingProduct = 'whatsapp';

const file = '@/local/path/file.jpg';

const type = '<MEDIA_TYPE>';

try {
  const { result, ...httpResponse } = await mediaController.uploadMedia(
    phoneNumberID,
    messagingProduct,
    file,
    type
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
  "id": "4490709327384033"
}
```


# Retrieve Media URL

To retrieve your media’s URL, make a request to this endpoint. Later, you can use this URL to download the media file.

```ts
async retrieveMediaURL(
  mediaID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveMediaURLResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaID` | `string` | Template, Required | Media object ID from either uploading media endpoint or media message Webhooks |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RetrieveMediaURLResponse`](../../doc/models/retrieve-media-url-response.md)

## Example Usage

```ts
const mediaID = 'Media-ID0';

try {
  const { result, ...httpResponse } = await mediaController.retrieveMediaURL(mediaID);
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
  "messaging_product": "whatsapp",
  "url": "<URL>",
  "mime_type": "image/jpeg",
  "sha256": "<HASH>",
  "file_size": "303833",
  "id": "2621233374848975"
}
```


# Delete Media

This endpoint can be used for deleting a media object.

```ts
async deleteMedia(
  mediaID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaID` | `string` | Template, Required | Media object ID from either uploading media endpoint or media message Webhooks |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SuccessResponse`](../../doc/models/success-response.md)

## Example Usage

```ts
const mediaID = 'Media-ID0';

try {
  const { result, ...httpResponse } = await mediaController.deleteMedia(mediaID);
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

