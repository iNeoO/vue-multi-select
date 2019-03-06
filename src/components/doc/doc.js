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
        options: {
        },
        btnLabel: 'A simple vue multi select',
        values: [],
        isActive: 'code',
      },
      example3: {
        btnLabel: 'A simple vue multi select',
        selectOptions: [{
          title: 'part one',
          elements: [
            { label: '0', labelHtml: '<i><u>0</u></i>', disabled: true },
            { label: '2', labelHtml: '<i><u>2</u></i>' },
            { label: '3', labelHtml: '<i><u>3</u></i>' },
            { label: '8', labelHtml: '<i><u>8</u></i>' },
            { label: '9', labelHtml: '<i><u>9</u></i>' },
            { label: '11', labelHtml: '<i><u>11</u></i>' },
            { label: '13', labelHtml: '<i><u>13</u></i>' },
            { label: '14', labelHtml: '<i><u>14</u></i>' },
            { label: '15', labelHtml: '<i><u>15</u></i>' },
            { label: '18', labelHtml: '<i><u>18</u></i>' },
          ],
        }, {
          title: 'part two',
          elements: [
            { label: '23', labelHtml: '<i><u>23</u></i>' },
            { label: '25', labelHtml: '<i><u>25</u></i>' },
            { label: '31', labelHtml: '<i><u>31</u></i>' },
            { label: '42', labelHtml: '<i><u>42</u></i>' },
            { label: '56', labelHtml: '<i><u>56</u></i>' },
            { label: '76', labelHtml: '<i><u>76</u></i>' },
            { label: '82', labelHtml: '<i><u>82</u></i>' },
            { label: '42', labelHtml: '<i><u>42</u></i>' },
            { label: '13', labelHtml: '<i><u>13</u></i>' },
            { label: '21', labelHtml: '<i><u>21</u></i>' },
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
        btnLabel: 'A simple vue multi select',
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
