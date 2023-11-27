import { takeLatest, takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setLoading, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";


function* fetchExampleTaskHandler() {
    try {
        yield put(setLoading(true));
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks.tasks));
    } catch (error) {
        yield call(alert, "Błąd podczas pobierania przykładowych zadań!!");
    } finally {
        yield put(setLoading(false));
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