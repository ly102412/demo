/**
 * Created by liuyong on 2021/3/22
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import status from '@/store/modules/saveStatus'
import app from '@/store/modules/loading'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    status,
    app
  },
  getters,
  strict: true
})

export default store
