import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    users: null,
  },

  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },

    LOAD_USERS (state, payload) {
      state.users = payload
    },

    CLEAR_USERS (state) {
      state.users = null
    },
  },

  actions: {

    //-----------------------------------------------------
    // Регистрация
    //-----------------------------------------------------
    async registration ({ commit }, payload) {

      let fb = firebase.firestore()

      let arr = []

      // вешаем на кнопку отображение загрузки
      commit('SET_LOADING', true)

      // получаем данные о имеющихся пользователях
      let usersData = await fb.collection('users').get()

      usersData.forEach(item => {
        arr.push(item.data())
      })

      // Проверяем существование пользователя в базе
      let isUserAlreadyExist = arr.find(item => {
        return item.userName === payload.userName
      })

      if (isUserAlreadyExist !== undefined) {
        alert('Пользователь с таким именем уже существует')
        commit('SET_LOADING', false)
        return
      }

      // если пользователя с таким именем нет, то записываем данные в базу
      let data = await fb.collection('users').add({
        userName: payload.userName,
        password: payload.password,
      })

      if (data.id) alert('Пользователь успешно зарегистрирован')
      else alert('Ошибка регистрации')

      commit('SET_LOADING', false)

    },

    //-----------------------------------------------------
    // авторизация
    //-----------------------------------------------------
    async auth ({ commit }, payload) {

      let fb = firebase.firestore()

      let arr = []
      let userName = payload.userName
      let password = payload.password

      commit('SET_LOADING', true)

      // Получаем данные о пользователях
      let data = await fb.collection('users').get()

      data.forEach(item => {
        arr.push(item.data())
      })

      // Находим пользователя с введенным именем
      let userData = arr.filter(item => {
        return item.userName === userName
      })

      // Если такой пользователь существует, то проверяем соотвествие логина-пароля
      if (userData[0]) {
        if (userData[0].password === password) alert('Авторизация успешна')
        else alert('Неверный логин или пароль')
      } else alert('Неверный логин или пароль')

      commit('SET_LOADING', false)

    },

    //-----------------------------------------------------
    // Заполняем стор данными о пользователях
    //-----------------------------------------------------
    async getUsers ({ commit }) {
      let fb = firebase.firestore()
      let arr = []

      commit('CLEAR_USERS')

      commit('SET_LOADING', true)

      let data = await fb.collection('users').get()

      data.forEach(user => {
        arr.push(user.data())
      })

      commit('LOAD_USERS', arr)

      commit('SET_LOADING', false)
    },

  },
})
