import instance from './instance'

export function getPublicGists(page) {
  return instance.get(`gists/public?page=${page}&per_page=20`);
}

export function getDetailGist(id) {
  return instance.get(`/gists/${id}`);
}
