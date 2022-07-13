import { Method } from "./paths";

export interface IApi {
  id: string;
  path: string;
  method: Method;
  query: {
    [key: string]: { type: string; required: boolean; description?: string };
  };
}
