import fetch from "node-fetch";
import { Docs } from "doc-interface";

export const getSchema = async (url: string) => {
  const result = await fetch(url);
  return (await result.json()) as Docs;
};
