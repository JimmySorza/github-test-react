import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from './api'

function cleanList(gists) {
  return gists.map(item =>  {
    const {owner, description, created_at, id} = item
    return {
      id,
      description,
      createAt: created_at,
      author: {
        name: owner.login,
        image: owner.avatar_url
      }
    }
  });
}


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGists (action) {
  try {
    let listGists = []
    yield put({type: 'SET_GISTS', listGists});
    const gists = yield call(Api.getPublicGists, action.payload.page);
    const { data } = gists
    listGists = yield cleanList(data)
    yield put({type: 'SET_GISTS', listGists});
  } catch (e) {
    console.log('errorgGetPublicGits', e.response ? e.response : e);
  }
}

function* detailGist (action) {
  try {
    let detail = []
    yield put({type: 'SET_DETAIL', detail});
    const detailResult = yield call(Api.getDetailGist, action.payload.id);
    const { data } = detailResult
    const {files} = data
    data.files = Object.values(files)
    yield put({type: 'SET_DETAIL', detail: data});
  } catch (e) {
    console.log('errorgGetPublicGits', e.response ? e.response : e);
  }
}

export default function* sagas() {
  yield takeEvery('GET_GISTS_REQUESTED', fetchGists)
  yield takeEvery('GET_GIST_DETAIL_REQUESTED', detailGist)
}

