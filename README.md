This component gives you a multi/single select with the power of Vuejs components.

## Demo and doc site
[vue-multi-select](http://vue-multi-select.tuturu.io)

## Dependencies
- required: Vuejs >= 2.3.3

## Install
1. Clone the repo
2. Include the file in your app
  `import multiSelect from './node_modules/vueMultiSelect/dist/vue-multi-select.vue';`

## Contributing
Issues and PR's are much appreciated.
When you create a new PR please make it against the develop branch when adding new features and to the fix branch when fixing small issues instead of master.

## Usage and Documentation
| Params        | Type        |
| ------------- | ----------- |
| options       | Object      |
| filters       | Array       |
| selectOptions | Array       |
| value         | Array       |

1. options (Contains options to set the multi-select)

| Params        | Type     | Default                                                                 | Description                           |
| ------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------- |
| btnLabel      | String   | 'multi-select'                                                          | Label on the button	                 |
| cssSelected   | Function | (option) =>  option['selected'] ? {'background-color': '#b4b4b4'} : ''  | Css passed to value selected          |
| groups        | String   | 'multi-select'                                                          | Display or not groups selection       |
| multi         | Boolean  | true                                                                    | Set single or multiple selection      |
| labelBold     | String   | 'bold'                                                                  | Name Attributes for value to set bold |
| labelList     | String   | 'list'                                                                  | Name Attributes for list              |
| labelName     | String   | 'name'                                                                  | Name Attributes for value to display  |
| labelSelected | String   | 'selected'                                                              | Name attributes for value selected    |
| groupName     | String   | 'name'                                                                  | Name Attributes for groups to display |

2. filters to apply to select many options
```javascript
// Exemple with Select/Deselect all
const filtes = [];
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

3. elements to select/deselect
``` javascript

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

4. values selected
``` javascript
[ {name: 'choice 1'}, {name: 'choice 11'}] // In the case we selected choice 1 and choice 11
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3002
npm run dev

# build for production with minification
source build.sh
```

## thanks

[Clément Patrice](https://github.com/monsieurp)
[Guilbert Pierre](https://github.com/guilbep)
