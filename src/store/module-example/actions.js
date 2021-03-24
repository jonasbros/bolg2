export function storeUserAction ({ commit }, user) {
  commit('storeUserMutation', user);
}

export function deleteUserAction ({ commit }) {
  commit('storeUserMutation', null);
}
