<template>
  <ul :class="'devices-tree tree-level-' + level + ' flex-column'">
    <li v-for="(device, index) in devices" :key="index" :class="getClass(device.device_id)">
      <Device :item="device" />
      <v-icon v-if="device.children && device.children.length > 0" @click.stop="toggle(device.device_id)">
        {{ isActive.includes(device.device_id) ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </v-icon>

      <DevicesTree v-if="device.children && device.children.length > 0"
        :devices="device.children" :level="1+level"
        @device="showDetails(device)"
      />
    </li>
  </ul>
</template>

<script>
import Device from './devices-tree-item.vue'

export default {
  name: 'DevicesTree',

  components: { Device },

  props: {
    devices: { type: Array, required: true },
    level: { type: Number, required: true }
  },

  data: () => ({
    isActive: []
  }),

  methods: {
    getClass(id) {
      return this.isActive.includes(id) ? 'devices-tree-item active' : 'devices-tree-item'
    },

    toggle(id) {
      const index = this.isActive.indexOf(id)
      if (index > -1) {
        this.isActive.splice(index, 1)
        return
      }
      this.isActive.push(id)
    }
  }
} 
</script>

<style lang="scss" scoped>
.tree-level-1 {
  display: flex;
}

.devices-tree:not(.tree-level-1) {
  display: none;
}

.devices-tree-item {
  position: relative;

  &.active {
    border-radius: $border-radius-small;
    box-shadow: 0 0 0 2px $border-color inset;
    overflow: hidden;

    > .device {
      background: $border-color;
      border-radius: $border-radius-small $border-radius-small 0 0;
    }

    & > .devices-tree {
      display: flex;
      margin: 10px !important;
    }

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &:hover > .device {
    background: $border-color;
    cursor: pointer;
  }

  .v-icon {
    width: 24px;
    height: 24px;
    display: flex;
    position: absolute;
    right: 20px;
    top: 16px;
    color: $text-color-light;
    font-size: 2.4em;
  }
}
</style>
