<template>
  <v-card elevation="0">
    <v-card-title class="headline px-0 pt-6">
      <DeviceStatus :status="selectedDevice.status" clazz="pr-2 pt-1" />
      {{ selectedDevice.thing_name.split('-').join(' ') }}
    </v-card-title>

    <v-card-text class="px-0">

      <v-row class="my-5">
        <v-col cols="12" md="8" class="py-0">
          <FieldWithBullet label="Customer ID" :value="selectedDevice.customer_id" />
        </v-col>
        <v-col cols="12" md="4" class="py-md-0 pt-5 pb-0">
          <FieldWithBullet label="Country" :value="selectedDevice.country" />
        </v-col>
      </v-row>

      <v-row class="device-widget my-5 mx-0 px-3">
        <v-col cols="12" md="4" class="d-flex justify-center">
          <FieldWithIcon label="Device" :type="selectedDevice.device_type" :id="selectedDevice.device_type_id" />
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <FieldWithIcon label="Farm" :name="selectedDevice.farm_name" :id="selectedDevice.farm_id" />
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <FieldWithIcon label="Site" :name="selectedDevice.site_name" :id="selectedDevice.site_id" />
        </v-col>
      </v-row>

      <v-row class="my-5">
        <v-col cols="12" md="4" class="py-0">
          <FieldWithBullet label="Greengrass" :value="selectedDevice.greengrass_device" />
        </v-col>
        <v-col cols="12" md="4" class="py-md-0 pt-5 pb-0">
          <FieldWithBullet label="Delpro managed" :value="selectedDevice.delpro_managed" />
        </v-col>
        <v-col cols="12" md="4" class="py-md-0 pt-5 pb-0">
          <FieldWithBullet label="Delpro logical" :value="selectedDevice.delpro_logical_device" />
        </v-col>
      </v-row>

      <v-row class="device-widget my-5 mx-0 px-3">
        <v-col cols="6" md="3" class="d-flex justify-stretch">
          <FieldWithId label="Serial" :id="selectedDevice.serial_id" />
        </v-col>
        <v-col cols="6" md="3" class="d-flex justify-stretch">
          <FieldWithId label="Hardware" :id="selectedDevice.hardware_id" />
        </v-col>
        <v-col cols="6" md="3" class="d-flex justify-stretch">
          <FieldWithId label="Device" :id="selectedDevice.device_id" />
        </v-col>
        <v-col cols="6" md="3" class="d-flex justify-stretch">
          <FieldWithId label="GG" :id="selectedDevice.gg_id" />
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import DeviceStatus from './device-status.vue'
import FieldWithBullet from './device-details-field-bullet.vue'
import FieldWithIcon from './device-details-field-icon.vue'
import FieldWithId from './device-details-field-id.vue'

export default {
  name: 'DeviceDetails',

  components: { DeviceStatus, FieldWithBullet, FieldWithIcon, FieldWithId },

  computed: {
    ...mapGetters(['selectedDevice'])
  }
}
</script>

<style lang="scss" scoped>
.v-sheet.theme--light {
  background: transparent;
}
</style>
