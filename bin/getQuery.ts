import { OperationMetadata } from "../doc-interface/paths";

export const getQuery = (schema: OperationMetadata) => {
  const query = schema.parameters.filter(
    (parameter) => parameter.in === "query",
  );
  return query.reduce(
    (p, c) => ({
      ...p,
      [c.name]: {
        type: c.type,
        required: c.required,
        description: c.description,
      },
    }),
    {},
  );
};
