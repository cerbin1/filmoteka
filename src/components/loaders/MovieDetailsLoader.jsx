import { fetchOmdb } from "../../utils/omdb";

export async function loader({ params, request }) {
  return fetchOmdb({ i: params.id, plot: "full" }, request.signal);
}
