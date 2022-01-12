<template>
  <div class="home">
    <p>
      Cantidad de clicks: {{ clicks }}
    </p>
    <b-button
      @click="sumarClick"
    >
      Sumar
    </b-button>
    <b-container align-v="center">
      <b-row>
        <b-col>
          <b-jumbotron 
            bg-variant="light"
            text-variant="black-50"
            class="p-4 m-4 bg-gradient-secondary"
          >
            <template #header>
              <span style="font-size:1.5rem">BootstrapVue</span>
            </template>

            <template #lead>
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
              featured content or information.
            </template>

            <hr class="my-4">

            <p>
              It uses utility classes for typography and spacing to space content out within the larger
              container.
            </p>
            <b-row>
              <b-col>
                <b-button
                  variant="primary"
                  href="#"
                >
                  Do Something
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  variant="success"
                  to="/jobs"
                >
                  Find jobs
                </b-button>
              </b-col>
            </b-row>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
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
