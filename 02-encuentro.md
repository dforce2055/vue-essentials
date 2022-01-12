# Encuentro N°2 - 17-01-2021
## add bootstrap
``cd my-app``
``npm install bootstrap bootstrap-vue``

## Agregar plugin
``src/plugins/Bootstrap.js``
```javascript:
  import Vue from 'vue'
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

  // Import Bootstrap an BootstrapVue CSS files (order is important)
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  // Make BootstrapVue available throughout your project
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
```

Importarlo en 
``src/main.js``
```javascript:
  import './plugins/Bootstrap'
```
[Bootstrap Install](https://bootstrap-vue.org/docs#using-module-bundlers)


## Implementar botón bootstrap
```javascript:
 <b-button
    class="mt-auto"
    variant="primary"
    @click="goClick"
  >
    Apply
  </b-button>
  ```
[Bootstrap API]('https://bootstrap-vue.org/docs')

## Implementar Jumbotrom and Grid System en Home
```javascript:
  <b-container>
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
                  to="job"
                >
                  Do Something Else
                </b-button>
              </b-col>
            </b-row>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  ```

[Bootstrap API]('https://bootstrap-vue.org/docs')
[Layout and Grid System](https://bootstrap-vue.org/docs/components/layout)
[Utility Classes](https://bootstrap-vue.org/docs/reference/utility-classes)
[Spacing](https://getbootstrap.com/docs/4.5/utilities/spacing/)
[Colors](https://getbootstrap.com/docs/4.5/utilities/colors/)
[jumbotrom](https://bootstrap-vue.org/docs/components/jumbotron)



## Crear nueva pagina jobs
``src/views/Jobs.vue``
```javascript:
  <template>
    <b-container>
      <b-row>
        <b-col>
          <h1>Jobs</h1>
        </b-col>
      </b-row>
    </b-container>
  </template>

  <script>
  export default {
    name: 'Jobs',
  }
  </script>

  <style>

  </style>
```
### Importar ruta 
``src/router/index.js``
```javascript:
  import Jobs from '../views/Jobs.vue'
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
```
``src/App.vue``
```javascript:
  <router-link to="/jobs"> 
    Jobs
  </router-link> |
```
[Vue Router](https://router.vuejs.org/)

## Agregar componente JobCard
``src/components/JobCard.vue``
```javascript:
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
            @click="goClick"
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
      goClick() {
      },
    },
  };
  </script>


```

# Vue lifecicle hooks
[Vue instance](https://es.vuejs.org/v2/guide/instance.html)
![image](https://es.vuejs.org/images/lifecycle.png)

## Props
[Vue Props](https://es.vuejs.org/v2/guide/components-props.html)
