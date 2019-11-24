import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';
import 'spectre.css/dist/spectre-exp.min.css';

import vueMultiSelect from '@/components/vueMultiSelect/vue-multi-select.vue';

export default {
  name: 'doc',
  components: { vueMultiSelect },
  data() {
    return {
      string: 'string',
      example1: {
        btnLabel: values => `A simple vue multi select (${values.length})`,
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
        filters: [
          {
            nameAll: 'Select all',
            nameNotAll: 'Deselect all',
            func() {
              return true;
            },
          }, {
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
          },
        ],
        options: {
          multi: true,
          groups: true,
        },
        values: [],
        isActive: 'code',
      },
      example2: {
        btnLabel: values => (values.length > 0 ? values[0].name : 'Select...'),
        selectOptions: [
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
        options: {
        },
        values: [],
        isActive: 'code',
      },
      example3: {
        selectOptions: [{
          title: 'part one',
          elements: [
            { label: '0', disabled: true },
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
        filters: [{
          nameAll: 'Select all',
          nameNotAll: 'Deselect all',
          func() {
            return true;
          },
        }],
        options: {
          multi: true,
          groups: true,
          labelName: 'label',
          labelList: 'elements',
          groupName: 'title',
          labelHtml: 'labelHtml',
          cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
        },
        values: [
          { label: '2' },
          { label: '3' },
        ],
        isActive: 'code',
      },
      example4: {
        selectOptions: [{
          title: 'part one',
          elements: [
            '0',
            '2',
            '3',
            '8',
            '9',
            '11',
            '13',
            '14',
            '15',
            '18',
          ],
        }, {
          title: 'part two',
          elements: [
            '23',
            '25',
            '31',
            '42',
            '56',
            '76',
            '82',
            '42',
            '13',
            '21',
          ],
        }],
        filters: [{
          nameAll: 'Select all',
          nameNotAll: 'Deselect all',
          func() {
            return true;
          },
        }],
        options: {
          multi: true,
          groups: true,
          labelList: 'elements',
          groupName: 'title',
          cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
        },
        position: 'top-right',
        values: ['0', '2'],
        isActive: 'code',
      },
    };
  },
  methods: {
    openManually() {
      this.$refs.multiSelect.openMultiSelect();
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
    setActive(e, label) {
      e.isActive = label;
    },
    reloadFunction3() {
      this.example3.values = [
        { label: '2' },
        { label: '3' },
      ];
    },
    reloadFunction4() {
      this.example4.values = ['0', '2'];
    },
    randomize(e) {
      const list = e.options.labelList || 'list';
      const name = e.options.labelName || 'name';
      for (let i = 0; i < e.selectOptions.length; i += 1) {
        if (e.selectOptions[i][list]) {
          for (let j = 0; j < e.selectOptions[i][list].length; j += 1) {
            e.selectOptions[i][list][j][name] = String(Math.floor(Math.random() * 100) + 1);
          }
        } else {
          e.selectOptions[i][name] = String(Math.floor(Math.random() * 100) + 1);
        }
      }
    },
  },
};
