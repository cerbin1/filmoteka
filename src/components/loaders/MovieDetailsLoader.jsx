import { fetchOmdb } from "../../utils/omdb";

export async function loader({ params, request }) {
  // OMDb's `r` parameter selects the response format; it does not translate
  // title or plot fields. Keep detail data in the language OMDb supplies.
  return fetchOmdb({ i: params.id, plot: "full", r: "json" }, request.signal);
}
