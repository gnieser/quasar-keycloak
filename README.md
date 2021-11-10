# Configure local Keycloak instance

Download: [https://www.keycloak.org/getting-started]()

Create a realm, a user and a client: [https://www.keycloak.org/getting-started/getting-started-zip]()

Client Root URL should be `http://localhost:4200`

Switch to createWebHashHistory in [src/router/index.js] to see the 404 error after login redirection.

More information:

* https://www.keycloak.org/securing-apps/vue
* https://github.com/keycloak/keycloak-documentation/blob/main/securing_apps/topics/oidc/javascript-adapter.adoc
