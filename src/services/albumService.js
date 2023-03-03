import { ALBUMS } from "../common/constants";
import { httpClient } from "../common/httpClient";

export const getAlbums = () => {
  return httpClient.get(ALBUMS);
};
