<template>
  <q-page class="flex flex-center column">
    <q-space />
    <div class="text-h2">
      <span style="opacity: .4">Logged as</span> {{ username }}
    </div>
    <q-space />
    <q-btn @click="logout" label="Logout" />
    <q-space />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      username: this.$keycloak.tokenParsed.name
    }
  },
  methods: {
    logout() {
      window.location.href = this.$keycloak.createLogoutUrl()
    }
  }
})
</script>
