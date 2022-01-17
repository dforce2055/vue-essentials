# Encuentro N°3 - 19-01-2021
## Importar JSON de empleos Local
```javascript:
  async fetchJobs () {
    const response = await fetch('jobs.json')
    const jobs = await response.json()
    this.jobs = jobs
    this.displayJobs = this.jobs.slice(0, this.perPage)
    this.rows = this.jobs.length
  }
```

## Importar empleos API
```javascript:
  async fetchJobs () {
    const response = await fetch('https://arbeitnow.com/api/job-board-api')
    const jobs = await response.json()
    this.jobs = jobs.data
    this.displayJobs = this.jobs.slice(0, this.perPage)
    this.rows = this.jobs.length
  }
```
## Importar Paginado en pagina de Empleos
``src/views/Jobs.vue``
```javascript:
  <template>
    <div class="jobs">
      <b-container align-v="center">
        <b-row>
          <JobCard
            v-for="job in displayJobs"
            :key="job.id"
            :job="job"
          />
        </b-row>
        <b-row>
          <b-col>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
              align="center"
              @input="paginate(currentPage)"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  <script>
  import JobCard from '../components/JobCard.vue'
  export default {
    name: 'Jobs',
    components: {
      JobCard
    },
    data: () => ({
      jobs: null,
      displayJobs: [],
      currentPage: 1,
      rows: 1,
      perPage: 4
    }),
    mounted () {
      this.fetchJobs()
    },
    methods: {
      async fetchJobs () {
        const response = await fetch('https://arbeitnow.com/api/job-board-api')
        const jobs = await response.json()
        this.jobs = jobs.data
        this.displayJobs = this.jobs.slice(0, this.perPage)
        this.rows = this.jobs.length
      },
      paginate (currentPage) {
        const start = (currentPage - 1) * this.perPage
        this.displayJobs = this.jobs.slice(start, start + this.perPage)
      }
    }
  }
  </script>
  <style scoped>

  </style>
```
[Bootstrap Pagination](https://bootstrap-vue.org/docs/components/pagination)

# Fotos
https://picsum.photos/

# API - Jobs
https://documenter.getpostman.com/view/18545278/UVJbJdKh
curl --location --request GET 'https://arbeitnow.com/api/job-board-api'

# API - Random Users
https://randomuser.me/

# Variables y colores - color variants
https://bootstrap-vue.org/docs/reference/color-variants

# Ejercicio
Implementar un componente de busqueda
