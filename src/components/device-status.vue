<template>
  <div class="device-status pr-2 pt-1">
    <span
      :class="status.delpro_active ? 'device-icon online' : 'device-icon offline'"
      :title="status.delpro_active ? 'Online' : 'Offline'"
    />
  </div>
</template>

<script>
export default {
  name: 'DeviceStatus',

  props: {
    status: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.device-icon {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: $border-radius;

  &.offline {
    background: $error;
  }

  &.online {
    background: $success;
  }
}
</style>
