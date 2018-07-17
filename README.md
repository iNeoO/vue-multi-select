This component gives you a multi/single select with the power of Vuejs components.

## Demo and doc site
[vue-multi-select](https://vue-multi-select.tuturu.io)

[https://github.com/IneoO/vue-multi-select](https://github.com/IneoO/vue-multi-select)

## Dependencies
- required: Vuejs >= 2.x

## Install
1. Clone the repo or `npm install vue-multi-select --save`
2. Include the file in your app
  `import vueMultiSelect from 'vue-multi-select';`
  `import 'vue-multi-select/dist/lib/vueMultiSelect.css'`

## Contributing
Issues and PR's are much appreciated.
When you create a new PR please make it against the develop branch when adding new features and to the fix branch when fixing small issues instead of master.

## Usage and Documentation
| Params        | Type        |
| ------------- | ----------- |
| options       | Object      |
| filters       | Array       |
| selectOptions | Array       |
| v-model       | Array       |
| reloadInit    | Boolean     |
| btnLabel      | String      |
| search        | Boolean     |	  
| searchPlaceholder | String  |	  	  
| @vueMultiSelectInited | Event triggered when v-model have been manualy updated |
| @selectionChanged | Event trigerred when v-model change (deprecated) |

### 1. options (Contains options to set the multi-select)

| Params        | Type     | Default                                                                 | Description                           |
| ------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------- |
| cssSelected   | Function | (option) =>  option['selected'] ? {  'font-weight': 'bold',color: '#5755d9',} : ''  | Css passed to value       |
| groups        | Boolean  | false                                                                   | Display or not groups selection       |
| multi         | Boolean  | false                                                                   | Set single or multiple selection      |
| labelList     | String   | 'list'                                                                  | Name Attributes for list              |
| labelName     | String   | 'name'                                                                  | Name Attributes for value to display  |
| labelSelected | String   | 'selected'                                                              | Name attributes for value selected    |
| labelDisabled | String   | 'disabled'                                                              | Name attributes for value disabled    |
| groupName     | String   | 'name'                                                                  | Name Attributes for groups to display |
| renderTemplate     | Function   | (elem => elem[this.labelName])                                   | Function returning text to display element |


### 2. filters to apply to select many options
```javascript
// Exemple with Select/Deselect all
const filters = [];
filters.push({
  nameAll: 'Select all', // label when want to select all elements who answer yes to the function
  nameNotAll: 'Deselect all', //label when want to deselect all elements who answer yes to the function
  func: (elem) => true
});

// Second exemple to select all elements who contain 2
filters.push({
  nameAll: 'Select all elements with 2',
  nameNotAll: 'Deselect all elements with 2',
  func: (elem) => {
    if (elem.name.indexOf('2') !== -1) {
      return true;
    }
    return false;
  }
});
```

### 3. elements to select/deselect
``` javascript

// when groups not set or false
data = [
  {name: 'choice 1'}, // Name can be changed with labelName in options
  {name: 'choice 2'},
  {name: 'choice 3'},
  {name: 'choice 4'},
  {name: 'choice 5'},
]

// or just an array
// it's also possible when to have an array of strings
// in list when groups is set to true.
data = [
  'choice 1',
  'choice 2',
  'choice 3',
  'choice 4',
  'choice 5',
]

// when groups set to true

data = [{
  name: 'choice 1', // Can be changed with tabName in options
  list: [
    {name: 'choice 1'}, // Name can be changed with labelName in options
    {name: 'choice 2'},
    {name: 'choice 3'},
    {name: 'choice 4'},
    {name: 'choice 5'},
  ]
}, {
  name: 'choice 10', // Can be changed with tabName in options
  list: [
    {name: 'choice 11'}, // Name can be changed with labelName in options
    {name: 'choice 12'},
    {name: 'choice 13'},
    {name: 'choice 14'},
    {name: 'choice 15'},
  ]
}]
```

### 4. values selected
``` javascript
[ {name: 'choice 1'}, {name: 'choice 11'}] // In the case we selected choice 1 and choice 11
```

### 5. Examples
```html
<template>
  <div>
    <multi-select
      v-model="values"
      :options="options"
      :filters="filters"
      :btnLabel="btnLabel"
      search
      :searchPlaceholder="Search"
      :selectOptions="data" />
  </div>
</template>

<script>
import multiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.min.css';

export default {
  data() {
    return {
      search: 'Search things',
      btnLabel: 'A simple vue multi select',
      name: 'first group',
      values: [],
      data: [{
        name: 'first group',
        list: [
          { name: '0' },
          { name: '2' },
          { name: '3' },
          { name: '8' },
          { name: '9' },
          { name: '11' },
          { name: '13' },
          { name: '14' },
          { name: '15' },
          { name: '18' },
        ],
      }, {
        name: 'second group',
        list: [
          { name: '21' },
          { name: '22' },
          { name: '24' },
          { name: '27' },
          { name: '28' },
          { name: '29' },
          { name: '31' },
          { name: '33' },
          { name: '35' },
          { name: '39' },
        ],
      }],
      filters: [{
        nameAll: 'select <= 10',
        nameNotAll: 'Deselect <= 10',
        func: (elem) => {
          if (elem.name <= 10) {
            return true;
          }
          return false;
        },
      }, {
        nameAll: 'Select contains 2',
        nameNotAll: 'Deselect contains 2',
        func: (elem) => {
          if (elem.name.indexOf('2') !== -1) {
            return true;
          }
          return false;
        },
      }],
      options: {
        multi: true,
        groups: true,
      },
    };
  },
  methods: {
  },
  components: {
    multiSelect,
  },
};
</script>
```

## Build Setup

``` bash
- `npm run dev`: Shortcut to run both dev:lib and dev:docs in parallel using.

- `npm run dev:lib`: Runs webpack watch mode on your library so file changes are built and re-written to disk automatically.

- `npm run dev:docs`: Runs both the development server for your docs/demo site.

- `npm run build`: Shortcut to run both build:lib and build:docs.

- `npm run build:lib`: Production ready build of your library as an ES6 module (via UMD), ready to import into another project via npm.

- `npm run build:docs`: Production ready build of your docs site for your library. Put this build online so you can demo your library to the world and provide documentation.
```

Testing Supported By<br/>
<img width="160" src="http://foundation.zurb.com/sites/docs/assets/img/logos/browser-stack.svg" alt="BrowserStack"/>

## thanks

[Patrice Clément](https://github.com/monsieurp)

[Pierre Guilbert](https://github.com/guilbep)
