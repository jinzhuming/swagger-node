import { Docs } from "doc-interface";
import { getQuery } from "./getQuery";
import { OperationMetadata } from "../doc-interface/paths";
import { flatten } from "lodash";
import { IApi } from "../doc-interface/api";

export const trsSchemaToApi = (doc: Docs): IApi[] => {
  return flatten(
    Object.keys(doc.paths).map((path) => {
      const schemata: OperationMetadata = doc.paths[path];

      return Object.keys(schemata).map((method) => {
        const schema = schemata[method];

        return {
          id: schema.operationId,
          path,
          method,
          query: getQuery(schema),
        };
      });
    }),
  );
};
