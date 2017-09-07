export default {
  name: 'multi-select',
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    filters: {
      type: Array,
      default: () => {
        return [];
      }
    },
    selectOptions: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      btnLabel: '',
      multiSelect: null,
      groups: null,
      isOpen: false,
      globalModel: [],
      idSelectedTab: 0,
      searchInput: '',
      optionsAllHide: false
    };
  },
  created() {
    this.setConfig()
  },
  methods: {
    setConfig() {
      this.multi = typeof(this.options.multi) !== 'undefined' ?
        this.options.multi : true;
      this.groups = typeof(this.options.groups) !== 'undefined' ?
        this.options.groups : true;
      this.btnLabel = !!this.options.btnLabel ? this.options.btnLabel : 'multi-select';
      this.list = !!this.options.labelList ? this.options.labelList : 'list';
      this.labelName = !!this.options.labelName ? this.options.labelName : 'name';
      this.groupName = !!this.options.groupName ? this.options.groupName : 'name';
      this.labelSelected = !!this.options.labelSelected ? this.options.labelSelected : 'selected';
      this.labelBold = !!this.options.labelBold ? this.options.labelBold : 'bold';
      this.options.cssSelected = !!this.options.cssSelected ?
        this.options.cssSelected : (option) => option[this.labelSelected] ? {'background-color': '#b4b4b4'} : '';
      this.filters.unshift({
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func: (elem) => true
      });
      this.value.length = 0
      this.init();
    },
    init() {
      this.globalModel = JSON.parse(JSON.stringify(this.selectOptions));
      for (let i = 0; i < this.globalModel.length; i += 1) {
        for (let j = 0; j < this.globalModel[i][this.list].length; j += 1) {
          this.$set(this.globalModel[i][this.list][j], this.labelSelected,
            !!this.globalModel[i][this.list][j][this.labelSelected]);
          this.$set(this.globalModel[i][this.list][j], 'visible', true);
          if (this.globalModel[i][this.list][j][this.labelSelected]) {
            this.value.push(this.globalModel[i][this.list][j]);
          }
        }
      }
    },
    getBtnLabel() {
      return !this.multi ? this.btnLabel : `${this.btnLabel} (${this.value.length})`;
    },
    toggleCheckboxes(event) {
      this.multiSelect = event.target;
      if (this.multiSelect.className === 'buttonLabel') {
        this.multiSelect = this.multiSelect.parentNode;
      }
      this.isOpen = !this.isOpen;
    },
    externalClick(event) {
      if (this.isOpen) {
        let elem = event.target;
        if (!!elem && elem.className === 'buttonLabel') {
          elem = elem.parentNode;
        }
        if (!!elem && elem.isSameNode(this.multiSelect)) {
          return;
        }
        this.isOpen = false;
      }
    },
    /* eslint no-param-reassign: ["error", { "props": false }]*/
    selectOption(option) {
      if (!option[this.labelSelected]) {
        if (!this.multi) {
          this.filters[0].selectAll = true;
          this.deselctAll();
          this.value.length = 0;
          this.externalClick({path : []});
        }
        this.pushOption(option);
      } else {
        this.popOption(option);
      }
      option[this.labelSelected] = !option[this.labelSelected];
      this.filter();
    },
    pushOption(option) {
      const opt = JSON.parse(JSON.stringify(option));
      delete opt[this.labelSelected];
      delete opt.visible;
      this.value.push(opt);
    },
    popOption(opt) {
      for (let i = 0; i < this.value.length; i += 1) {
        if (this.value[i][this.labelName] === opt[this.labelName]) {
          this.value.splice(i, 1);
          return;
        }
      }
    },
    selectTab(id) {
      this.idSelectedTab = id;
      this.search();
    },
    search() {
      let allHide = true;
      for (let i = 0; i < this.globalModel[this.idSelectedTab][this.list].length;
        i += 1) {
        if (this.globalModel[this.idSelectedTab][this.list][i][this.labelName].indexOf(
            this.searchInput) !== -1) {
          allHide = false;
          this.globalModel[this.idSelectedTab][this.list][i].visible = true;
        } else {
          this.globalModel[this.idSelectedTab][this.list][i].visible = false;
        }
      }
      this.optionsAllHide = allHide;
      this.filter();
    },
    clearSearch() {
      this.searchInput = '';
      this.search();
    },
    selectCurrent(option) {
      for (let i = 0; i < this.globalModel[this.idSelectedTab][this.list].length;
        i += 1) {
        if (this.globalModel[this.idSelectedTab][this.list][i].visible &&
          option.func(this.globalModel[this.idSelectedTab][this.list][i])) {
          if (!option.selectAll) {
            if (!this.globalModel[this.idSelectedTab][this.list][i][this.labelSelected]) {
              this.globalModel[this.idSelectedTab][this.list][i][this.labelSelected] = true;
              this.pushOption(this.globalModel[this.idSelectedTab][this.list][i]);
            }
          } else if (this.globalModel[this.idSelectedTab][this.list][i][this.labelSelected]) {
            this.globalModel[this.idSelectedTab][this.list][i][this.labelSelected] = false;
            this.popOption(this.globalModel[this.idSelectedTab][this.list][i]);
          }
        }
      }
      option.selectAll = !option.selectAll;
    },
    filter() {
      for (let i = 0; i < this.filters.length; i += 1) {
        let allSelected = true;
        for (let j = 0; j < this.globalModel[this.idSelectedTab][this.list].length;
          j += 1) {
          if (this.globalModel[this.idSelectedTab][this.list][j].visible &&
            this.filters[i].func(
            this.globalModel[this.idSelectedTab][this.list][j]) &&
            !this.globalModel[this.idSelectedTab][this.list][j][this.labelSelected]) {
            allSelected = false;
            break;
          }
        }
        this.filters[i].selectAll = allSelected;
      }
    },
    deselctAll() {
      for (let i = 0; i < this.globalModel.length; i += 1) {
        for (let j = 0; j < this.globalModel[i][this.list].length; j += 1) {
          this.globalModel[i][this.list][j][this.labelSelected] = false;
        }
      }
    }
  },
  watch: {
    selectOptions: {
      handler(val){
        this.setConfig();
      },
      deep: true
    }
  },
  directives: {
    'click-outside': {
      bind(el, binding) {
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.vueClickOutside = handler;
        document.addEventListener('click', handler);
      },
      unbind(el) {
        document.removeEventListener('click', el.vueClickOutside);
        el.vueClickOutside = null;
      },
    },
  }
};
