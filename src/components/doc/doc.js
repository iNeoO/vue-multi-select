import spectre from 'Spectre/dist/spectre.min.css';
import icons from 'Spectre/dist/spectre-icons.min.css';
import exp from 'Spectre/dist/spectre-exp.min.css';

import multiSelect from '../vueMultiSelect/vue-multi-select.vue';

export default {
  name: 'doc',
  data() {
    return {
      string: 'string',
      example1: {
        selectOptions: [{
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
          btnLabel: 'A simple vue multi select',
        },
        values: [],
        isActive: 'code',
      },
      example2: {
        selectOptions: [{
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
        }],
        options: {
          multi: false,
          groups: false,
          btnLabel: 'A simple vue single select',
        },
        values: [],
        isActive: 'code',
      },
      example3: {
        selectOptions: [{
          title: 'part one',
          elements: [
            { label: '0' },
            { label: '2' },
            { label: '3' },
            { label: '8' },
            { label: '9' },
            { label: '11' },
            { label: '13' },
            { label: '14' },
            { label: '15' },
            { label: '18' },
          ],
        }, {
          title: 'part two',
          elements: [
            { label: '23' },
            { label: '25' },
            { label: '31' },
            { label: '42' },
            { label: '56' },
            { label: '76' },
            { label: '82' },
            { label: '42' },
            { label: '13' },
            { label: '21' },
          ],
        }],
        options: {
          labelName: 'label',
          labelList: 'elements',
          groupName: 'title',
          btnLabel: 'A simple vue multi select',
          cssSelected: (option) => option.selected ? { 'background-color': '#5764c6' } : '',
        },
        values: [],
        isActive: 'code',
      },
    };
  },
  components: { multiSelect },
  methods: {
    setActive(example, label) {
      example.isActive = label;
    },
    updateValues1(values) {
      this.example1.values = values;
    },
    updateValues2(values) {
      this.example2.values = values;
    },
    updateValues3(values) {
      this.example3.values = values;
    },
    randomize(example) {
      const list = example.options.labelList || 'list';
      const name = example.options.labelName || 'name';
      for (let i = 0; i < example.selectOptions.length; i += 1) {
        for (let j = 0; j < example.selectOptions[i][list].length; j += 1) {
          example.selectOptions[i][list][j][name] = Math.floor(Math.random() * 100) + 1;
        }
      }
    },
  },
};
