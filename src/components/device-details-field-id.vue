<template>
  <div class="device-field-with-id mt-5 mb-3 pa-3 d-flex flex-column">
    <div class="field-label my-2 pl-1">{{ label + ' ID' }}</div>
    <div class="field-value pa-1">{{ id }}</div>
  </div>
</template>

<script>
export default {
  name: 'DeviceFieldWithId',

  props: {
    label: { type: String, required: true },
    id: { type: String, required: false, default: 'Unknown' }
  }
}
</script>

<style lang="scss" scoped>
.device-field-with-id {
  width: 100%;
  position: relative;
  border-radius: 0 $border-radius-small $border-radius-small;
  color: $white;

  &:before {
    content: '';
    display: block;
    width: 40px;
    height: 12px;
    position: absolute;
    top: -12px;
    left: 0;
    border-radius: $border-radius-small 0 0 0;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    left: 40px;
    border-right: 16px solid transparent;
    border-bottom: 12px solid;
  }

  .field-label {
    font-size: 18px;
    font-weight: 800;
  }

  .field-value {
    flex-grow: 1;
    background: rgba(0,0,0, .05);
    border-radius: 8px;
    font-size: 1.2em;
    font-weight: 500;
    word-break: break-all;
  }
}
</style>
