/**
 * WhatsApp Cloud APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Document {
  /** It is the media object ID. Required when you are not using a link. */
  id?: string;
  /** The protocol and URL of the media to be sent. Use only with HTTP/HTTPS URLs. Required when you are not using an uploaded media ID. */
  link?: string;
  /** Describes the specified document media. */
  caption?: string;
  /** Describes the filename for the specific document. */
  filename?: string;
}

export const documentSchema: Schema<Document> = object({
  id: ['id', optional(string())],
  link: ['link', optional(string())],
  caption: ['caption', optional(string())],
  filename: ['filename', optional(string())],
});