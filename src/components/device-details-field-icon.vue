<template>
  <div class="device-field-with-icon d-flex flex-column pt-2">
    <div class="field-icon mb-3 mx-auto">
      <img :src="require('@/assets/' + label + '.svg')" contain />
    </div>
    <div class="field-label text-center field-icon-label">{{ label }}</div>
    <div class="field-text field-name mt-2">
      {{name ? 'Name' : 'Type' }}: <i>{{ name ? name : type }}</i>
    </div>
    <div class="field-text field-id mt-2 mx-auto">ID: <i>{{id}}</i></div>
  </div>
</template>

<script>
export default {
  name: 'DeviceFieldWithIcon',

  props: {
    label: { type: String, required: true },
    name: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: '' },
    id: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.device-field-with-icon {
  .field-icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    img {
      max-width: 42px;
      margin: 15px;
    }
  }

  .field-label {
    font-size: 1.8em;
    font-weight: 800;
    text-transform: uppercase;
  }

  .field-text {
    text-align: center;
    color: $text-color-light;
    i {
      color: $text-color;
    }
  }

  .field-name {
    font-size: 1.5em;
  }

  .field-id {
    width: 75%;
    font-size: 1.2em;
    line-height: 1.2em;
    word-break: break-all;
  }
}
</style>
