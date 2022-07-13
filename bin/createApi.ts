import * as fs from "fs";
import { IApi } from "../doc-interface/api";
import * as beautify from "js-beautify";

export const createApi = (apis: IApi[]) => {
  const content =
    `import { createApiInstance } from '/tools/client/apiBuilder'` +
    apis
      .map((api) => {
        return `
     export const ${api.id} = createApiInstance<
    {
      ${Object.keys(api.query)
        .map((queryKey) => {
          const query = api.query[queryKey];
          return `    ${queryKey}${query.required ? "" : "?"}: ${
            query.type || "any"
          } ${query.description ? `// ${query.description}` : ""}`;
        })
        .join("\n")}
        },
        null
        >('${api.id}', (${Object.keys(api.query)
          .map((queryKey) => {
            return queryKey;
          })
          .join(", ")}) => {
        return {
          method: '${api.method}',
          url: '${api.path}',
          query: {
            ${Object.keys(api.query)
              .map((queryKey) => {
                return `      ${queryKey}`;
              })
              .join(", \n")}
          },
          headers: {
            'Content-Type': 'application/json',
          },
        };
      });`;
      })
      .join("\n");

  fs.writeFile(
    "./api/index.ts",

    beautify(content, { indent_size: 2 }),
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
  console.log(content);
};
