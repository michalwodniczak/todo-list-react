import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";


function* fetchExampleTaskHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "coś poszło nie tak");
    }
};

export function* watchFetchExampleTasks() {
    console.log("Saga jest wypita");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTaskHandler);
};