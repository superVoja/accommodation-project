import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedRooms: []
    },
    mutations: {
      setRooms(state, rooms) {
        state.loadedRooms = rooms
      },
      setKatarina(state, rooms) {
        state.katarinaRooms = rooms
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$storyapi
          .get('cdn/stories', {
            version: context.isDev ? 'draft' : 'published',
            starts_with: 'rooms/'
          })
          .then(res => {
            const rooms = []
            for (const key in res.data) {
              rooms.push({ ...res.data[key], id: key })
            }
            console.log(res.data)
            vuexContext.commit('setRooms', res.data.stories)
          })
      }
    },
    getters: {
      loadedRooms(state) {
        return state.loadedRooms
      }
    }
  })
}
export default createStore
