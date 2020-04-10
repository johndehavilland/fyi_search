/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import searchClient from "@/services/azsearch.service";

export default {
  executeSearch({ state, commit }) {
    searchClient.search(
      "cosmosdb-index",
      {
        search: `${state.searchString}`,
        facets: [],
        count: true
      },
      (err, results, raw) => {
        console.log(raw);
        console.log(state.searchString);
        commit("SET_RESULTS", results);
        commit("SET_RESULTS_COUNT", raw["@odata.count"]);
        commit("SET_FACETS", raw["@search.facets"]);
      }
    );
  },
  setSearchString({ dispatch, commit }, value = "*") {
    commit("SET_SEARCHSTRING", value);
    dispatch("executeSearch");
  }
};