import { boot } from 'quasar/wrappers'
import Keycloak from 'keycloak-js'

export default boot(({ app /* , store } */ }) => {

  async function createRefreshTokenTimer(keycloak) {
    setInterval(() => {
      keycloak.updateToken(60).then((refreshed) => {
        if (refreshed) {
          console.log("Token refreshed" + refreshed)
        } else {
          // Do Something
        }
      }).catch(() => {
        console.log("Failed to refresh token")
      })
    }, 6000)
  }

  return new Promise(resolve => {
    const keycloak = Keycloak({
      url: "http://localhost:8080/auth/",
      realm: "myrealm",
      clientId: "myclient"
    })

    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        enableLogging: true
      })
      .then(async (authenticated) => {
        if (authenticated) {
          console.log("Authenticated")
          await createRefreshTokenTimer(keycloak);
          resolve()
        } else {
          console.log("Not authenticated")
          // window.location.reload()
        }
      }).catch((error) => {
      console.log("Authentication failure", error)
      // window.location.reload()
    })

    app.config.globalProperties.$keycloak = keycloak
    app.use(keycloak)
  })
})
