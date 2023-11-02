import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}


const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {


  switch (action.type) {
    case ActionType.SEARCH_REPOSITOIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITOIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITOIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
