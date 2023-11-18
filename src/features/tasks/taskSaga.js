import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";


function* fetchExampleTaskHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks.tasks));
    } catch (error) {
        yield call(alert, "coś poszło nie tak");
    }
};

function* saveTaskInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* taskSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTaskHandler);
    yield takeEvery("*", saveTaskInLocalStorageHandler);
};