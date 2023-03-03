import { POSTS } from "../common/constants";
import { httpClient } from "../common/httpClient";

export const getPosts = () => {
    return httpClient.get(POSTS);
  };
  