import { takeLatest, takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSucces, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";


function* fetchExampleTaskHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSucces(exampleTasks.tasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Błąd podczas pobierania przykładowych zadań!!");
    };
};

function* saveTaskInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* taskSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTaskHandler);
    yield takeEvery("*", saveTaskInLocalStorageHandler);
};