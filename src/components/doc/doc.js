import multiSelect from '../../../dist/lib/vue-multi-select.min';
import '../../../dist/lib/vue-multi-select.min.css';

export default {
  name: 'doc',
  data() {
    return {
      string: 'string',
      example1: {
        btnLabel: 'A simple vue multi select',
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
          renderTemplate(elem) {
            return `number: ${elem.name}`;
          },
          multi: true,
          groups: true,
        },
        values: [],
        isActive: 'code',
      },
      example2: {
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
        btnLabel: 'A simple vue multi select',
        values: [],
        isActive: 'code',
      },
      example3: {
        btnLabel: 'A simple vue multi select',
        reloadInit: false,
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
        options: {
          multi: true,
          groups: true,
          labelName: 'label',
          labelList: 'elements',
          groupName: 'title',
          cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
        },
        values: [
          { label: '2' },
          { label: '3' },
        ],
        isActive: 'code',
      },
      example4: {
        btnLabel: 'A simple vue multi select',
        reloadInit: false,
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
        options: {
          multi: true,
          groups: true,
          labelList: 'elements',
          groupName: 'title',
          cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
        },
        values: ['0', '2'],
        isActive: 'code',
      },
    };
  },
  components: { multiSelect },
  methods: {
    setActive(e, label) {
      e.isActive = label;
    },
    reloadFunction3() {
      this.example3.values = [
        { label: '2' },
        { label: '3' },
      ];
      this.example3.reloadInit = true;
    },
    reloadFunction4() {
      this.example4.values = ['0', '2'];
      this.example4.reloadInit = true;
    },
    randomize(e) {
      const list = e.options.labelList || 'list';
      const name = e.options.labelName || 'name';
      for (let i = 0; i < e.selectOptions.length; i += 1) {
        for (let j = 0; j < e.selectOptions[i][list].length; j += 1) {
          e.selectOptions[i][list][j][name] = String(Math.floor(Math.random() * 100) + 1);
        }
      }
    },
  },
};
