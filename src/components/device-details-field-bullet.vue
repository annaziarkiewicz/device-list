<template>
  <div class="device-field-with-bullet device-widget pa-4 d-flex align-center">
    <div class="field-label mr-1">{{ label + ':'}}</div>
    <div :class="getClass(value)">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'DeviceFieldWithBullet',

  props: {
    label: { type: String, required: true },
    value: { type: [Boolean, String], required: false, default: 'Unknown' }
  },

  methods: {
    getClass(value) {
      let clazz = ''
      if (value === true) { clazz = 'field-value-true' }
      else if (value === false) { clazz = 'field-value-false' }
      else if (value !== 'Unknown') { clazz = 'field-value-default' }
      return 'field-value ' + clazz + ' py-1 px-2'
    }
  }
}
</script>

<style lang="scss" scoped>
.device-field-with-bullet {
  height: 100%;

  .field-label {
    color: $text-color;
    font-size: 1.5em;
  }

  .field-value {
    border-radius: $border-radius-mini;
    font-size: 1.2em;
    line-height: 1em;
    font-weight: 600;
    text-transform: uppercase;

    &:not(.field-value-default):not(.field-value-true):not(.field-value-false) {
      background: $tertiary-light;
      color: $tertiary-dark;
    }

    &.field-value-default {
      background: $quaternary-light;
      color: $quaternary-dark;
    }

    &.field-value-true {
      background: $secondary-light;
      color: $secondary-dark;
    }

    &.field-value-false {
      background: $primary-light;
      color: $primary-dark;
    }
  }
}
</style>
