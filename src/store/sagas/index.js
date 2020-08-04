import { all } from "redux-saga/effects";

import * as exampleSaga from "./exampleSaga";

function* Sagas() {
  yield all([exampleSaga.watchSagas()]);
}

export default Sagas;
