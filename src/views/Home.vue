<template>
  <div class="home">
    <p>
      Cantidad de clicks: {{ clicks }}
    </p>
    <button
      @click="sumarClick"
    >
      Sumar
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    titulo: 'Proband Vue',
    logo: 'https://vuejs.org/images/logo.svg',
    mostrar: false,
    clicks: 0
  }),
  methods: {
    sumarClick () {
      this.clicks++
    }
  }
}
</script>
<style scoped>

</style>
