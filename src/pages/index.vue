<template>
  <v-app>
    <v-main>
      <v-container class="page-wrapper mt-6 mb-12 pa-4">
        <v-row>
          <v-col cols="12" md="4">
            <Sidebar />
          </v-col>
          <v-col cols="12" md="8">
            <DeviceDetails v-if="Object.keys(selectedDevice).length > 0" />
          </v-col>
        </v-row>
      </v-container>
      <Author />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sidebar from '@/components/sidebar.vue'
import DeviceDetails from '@/components/device-details.vue'
import Author from '@/components/author.vue'

export default {
  name: 'App',

  components: { Sidebar, DeviceDetails, Author },

  computed: {
    ...mapGetters(['selectedDevice'])
  },

  methods: {
    ...mapActions(['getDevices']),
  },

  mounted() {
    this.getDevices()
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  background: $background-page;
  border-radius: $border-radius-large;
  box-shadow: 0 100px 50px -75px $shadow-color-dark;
}
</style>
