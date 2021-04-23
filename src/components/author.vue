<template>
  <div class="author-box d-flex justify-center flex-column" v-if="show">
    <div class="author-avatar mb-6 d-flex justify-center">
      <img :src="require('@/assets/Anna.png')" contain />
    </div>
    <div class="author-text text-center">
      Hi, my name is <span class="px-1">Anna Ziarkiewicz</span> and I designed and coded this application.
    </div>
    <div class="author-close">
      <v-btn @click="show=false">×</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',

  data: () => ({
    show: true
  })
}
</script>

<style lang="scss" scoped>
.author-box {
  position: fixed;
  bottom: 32px;
  left: 32px;
  width: 320px;
  padding: 32px;
  background: $primary-light;
  border-radius: 50px;
  box-shadow: 0 12px 20px rgba(0,0,0, .1);
}

.author-avatar img {
  border-radius: 50%;
}

.author-text {
  color: #333333;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 500;

  span {
    background: $primary;
    color: $white;
    border-radius: 5px;
  }

}

.author-close {
  position: absolute;
  top: 20px;
  right: 20px;
  .v-btn.v-size--default {
    min-width: auto;
    height: 32px;
    width: 32px;
    padding: 0px 10px;
    background: transparent;
    box-shadow: none;
    border-radius: 50%;
    font-size: 2.4em;
  }
}
</style>
