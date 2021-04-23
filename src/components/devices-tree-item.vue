<template>
  <div class="device pa-5 d-flex" @click="deviceDetails(item)">
    <DeviceStatus :status="item.status" />

    <div class="device-specification pl-2 d-flex flex-column">
      <span class="device-name">{{ item.thing_name ? item.thing_name.split('-').join(' ') : 'Unknown' }}</span>
      <span class="device-type">device type: <i>{{ item.device_type }}</i></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeviceStatus from './device-status.vue'

export default {
  name: 'DevicesTreeItem',

  components: { DeviceStatus },

  props: {
    item: { type: Object, required: true }
  },

  methods: {
    ...mapActions(['deviceDetails'])
  }
}
</script>

<style lang="scss" scoped>
.device {
  border-radius: $border-radius-small;
}

.device-specification {
  width: calc(100% - 40px);
  color: $text-color;

  .device-name {
    font-size: 1.6em;
    font-weight: 500;
    text-transform: capitalize;
  }

  .device-type {
    font-size: 1.2em;
    line-height: 1em;
  }
}
</style>
