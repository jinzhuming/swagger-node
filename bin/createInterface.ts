import { FieldRecord } from "../doc-interface/field";

export const createInterface = (name: string, fields: FieldRecord[]) => {
  return `
	   export interface ${name} {
		   ${fields
         .map((field) => {
           return `
		 ${field.description ? `/** ${field.description} */` : ""}
		 ${field.field}${!field.required ? "?" : ""}: ${field.type}${
             field.nullable ? " | null" : ""
           };`;
         })
         .join("")}
	   }
	   `;
};
