<template>
  <b-col
    md="4"
    class="d-flex align-items-stretch"
  >
    <b-card
      :title="job.title"
      title-tag="h4"
      :img-src="imgRandom"
      img-alt="Job-info"
      img-top
      tag="article"
      style="max-width: 25rem"
      class="mb-2"
    >
      <b-card-body class="d-flex flex-column">
        <b-card-text>
          {{ description }}
        </b-card-text>
        <b-button
          class="mt-auto"
          variant="primary"
          @click="selectedJob"
        >
          Apply
        </b-button>
      </b-card-body>
      <template #footer>
        <em 
          style="font-size: .7rem"
        >
          Last updated {{ updateTime }} mins ago...
        </em>
      </template>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: {
      type: Object,
      default: () => ({
        'name': 'ABC Job123',
        'id': 1
      }),
      require: true
    }
  },
  computed: {
    imgRandom () {
      const randomNumber =  Math.floor(Math.random() * (100 - 1)) + 1
      return `https://picsum.photos/300/150/?image=${randomNumber}`
    },
    updateTime () {
      try {
        return this.job.updateTime || 10
      } catch (error) {
        return 10
      }
    },
    description () {
      try {
        return this.job.description
          .slice(0, 155)
          .replace( /(<([^>]+)>)/ig, '')
          .concat(' ...')

      } catch (error) {
        return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        voluptate atque ratione veritatis cum commodi quibusdam, debitis ipsam
        expedita, aliquam quasi dolor est facere consequuntur officia asperiores
        cumque tempore incidunt.`
      }
    }
  },
  methods: {
    selectedJob () {
      this.$emit('job-selected', this.job)
    }
  },
};
</script>
