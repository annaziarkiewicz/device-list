<template>
  <v-card elevation="0" class="pt-2">
    <v-card-title class="headline py-4 pl-9">Devices:</v-card-title>

    <v-card-text class="pb-6 px-4">
      <DevicesTree :devices="items" :level="1" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import DevicesTree from '@/components/devices-tree.vue'

export default {
  name: 'Sidebar',

  components: { DevicesTree },

  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
  background: $white;
  border-radius: $border-radius;
  box-shadow: 12px 0 20px $shadow-color !important;

  .headline {
    color: $text-color-light;
  }
}
</style>
