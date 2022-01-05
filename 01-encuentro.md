# Encuentro N°1 - 05-01-2021
# Requisitos
 * [NODE](https://nodejs.org/es/download/) ***v.14.15.5 o superior***
 * [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ***v.6.1.0 o superior***
 * [Vue CLI](https://cli.vuejs.org/guide/prototyping.html) ***v4.5.12 o superior***

# Repositorio de código
https://github.com/dforce2055/vue-essentials
Cada encuentro vamos a crear una rama nueva, para este primero creamos la rama 01
```javascript:
  To github.com:dforce2055/vue-essentials.git
 * [new branch]      01 -> 01
 ```

# Configuración del entorno de trabajo
## Instalar NODE
https://nodejs.org/es/download

## Instalar NPM
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm \
``npm install -g npm``

## Instalar Vue CLI
https://cli.vuejs.org/guide/prototyping.html \
``npm install -g @vue/cli @vue/cli-service-global``

## Instalar plugins para visual studio code
 * [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
 * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 * [Babel Javascript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
 * [vue](https://marketplace.visualstudio.com/items?itemName=jcbuisson.vue)

## Configurar ESLint
ESLint es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript, nos permite formatear nuestro estilo
de código e unifirmar criterios en equipos de desarrollo.

``.eslint.js``

```javascript:
  module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "plugin:vue/strongly-recommended"
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
      // 'no-console': 0
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      // 'single': 1
      'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
      curly: ['error', 'multi'],
      indent: ['warn', 2],
      'array-callback-return': ['off', { allowImplicit: true }],
      'no-return-assign': ['off'],
      'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }],
      'no-sequences': ['off'],
      'import/no-named-as-default': ['off']
    }
    
  }

  // Detalles y configuración
  // https://eslint.vuejs.org/
  // https://eslint.vuejs.org/rules/attribute-hyphenation.html
```


# Create aplicación VUE
Para crear una aplicación utilizamos Vue CLI con el siguiente comando
``vue create my-app``


# Template
https://es.vuejs.org/v2/guide/syntax.html

# Data y Métodos
https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos



# Ejercicio
Agregar dependencia al proyecto que hemos creado, en este caso instalar bootstrap
https://bootstrap-vue.org/docs


# Links:
  * https://vuejs.org/
  * https://es.vuejs.org/v2/guide/
  * https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf
  * https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa
  * https://nodejs.org/es/download/
  * https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
  * https://cli.vuejs.org/guide/prototyping.html
  * https://code.visualstudio.com/
