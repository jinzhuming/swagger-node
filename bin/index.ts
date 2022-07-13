import { getSchema } from "./getSchema";
import { createApi } from "./createApi";
import { trsSchemaToApi } from "./trsSchemaToApi";
/*
 * url: 接受 swagger 的  schema 地址
 * */
const main = async (url: string) => {
  const doc = await getSchema(url);
  const apis = trsSchemaToApi(doc);
  createApi(apis);
};

main("http://localhost:9000/api-json");
