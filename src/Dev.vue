<template>
  <div>
    <multi-select
      ref="multi"
      v-model="values"
      :options="options"
      :filters="filters"
      :btnLabel="btnLabel"
      search
      historyButton
      :searchPlaceholder="search"
      :selectOptions="data">
      <template v-slot:option="{option}">
        <input type="checkbox" :checked="option.selected" />
        <span>{{option.name}}</span>
      </template>
    </multi-select>
    <button type="button" @click="open">Open</button>
  </div>
</template>

<script>
import multiSelect from './components/vueMultiSelect/vue-multi-select.vue';

export default {
  data() {
    return {
      search: 'Search things',
      btnLabel: values => `A simple vue multi select (${values.length})`,
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
        func(elem) {
          return elem.name <= 10;
        },
      }, {
        nameAll: 'Select contains 2',
        nameNotAll: 'Deselect contains 2',
        func(elem) {
          return elem.name.indexOf('2') !== -1;
        },
      }],
      options: {
        multi: true,
        groups: true,
      },
    };
  },
  methods: {
    open() {
      this.$refs.multi.openMultiSelect();
    },
  },
  components: {
    multiSelect,
  },
};
</script>
