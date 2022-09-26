# Configure local Keycloak instance

Download your preferred distribution of Keycloak [https://www.keycloak.org/]()

Create a realm `myrealm` and a client `myclient`. Also create a user.

For simplicity, the realm name and client name are hardcoded in [src/boot/keycloak.js](src/boot/keycloak.js)

Client Root URL should be `http://localhost:4200`

Switch to createWebHashHistory in [src/router/index.js](src/router/index.js) to see the 404 error after login redirection. Please note this is not related to Quasar (https://github.com/quasarframework/quasar/issues/10062) and also fails without Quasar (https://github.com/gnieser/vue-keycloak)

More information:

* https://www.keycloak.org/securing-apps/vue
* https://github.com/keycloak/keycloak-documentation/blob/main/securing_apps/topics/oidc/javascript-adapter.adoc
