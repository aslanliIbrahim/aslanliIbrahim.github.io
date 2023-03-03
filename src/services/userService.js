import { USERS } from "../common/constants";
import { httpClient } from "../common/httpClient";

export const getUsers = () => {
  return httpClient.get(USERS);
};
