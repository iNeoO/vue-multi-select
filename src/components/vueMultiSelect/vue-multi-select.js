export default {
  name: 'multi-select',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    filters: {
      type: Array,
      default: () => [],
    },
    selectOptions: {
      type: Array,
      default: () => [],
    },
    eventName: {
      type: String,
      default: 'selectionChanged',
    },
    reloadInit: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => ([]),
    },
    btnLabel: {
      type: String,
      default: 'multi-select',
    },
    search: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: 'Search...',
    },
  },
  data() {
    return {
      valueSelected: [],
      multiSelect: null,
      groups: null,
      isOpen: false,
      globalModel: [],
      idSelectedTab: 0,
      searchInput: '',
      optionsAllHide: false,
    };
  },
  created() {
    this.setConfig();
  },
  methods: {
    setConfig() {
      this.multi = typeof (this.options.multi) !== 'undefined' ?
        this.options.multi : false;
      this.groups = typeof (this.options.groups) !== 'undefined' ?
        this.options.groups : false;
      this.list = this.options.labelList || 'list';
      this.labelName = this.options.labelName || 'name';
      this.renderTemplate = this.options.renderTemplate || (elem => elem[this.labelName]);
      this.groupName = this.options.groupName || 'name';
      this.labelSelected = this.options.labelSelected || 'selected';
      this.labelDisabled = this.options.labelDisabled || 'disabled';
      this.cssSelected = this.options.cssSelected || (
        option => (option[this.labelSelected] ?
          {
            'font-weight': 'bold',
            color: '#5755d9',
          } : ''));
      this.filters.unshift({
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func: () => true,
      });
      this.init();
    },
    init() {
      if (!this.groups) {
        const list = {};
        list[this.list] = this.cloneArray(this.selectOptions);
        this.globalModel = [
          list,
        ];
        if (typeof this.selectOptions[0] === 'string' ||
          typeof this.selectOptions[0] === 'number') {
          this.simpleArray = true;
        }
      } else {
        if (typeof this.selectOptions[0][this.list][0] === 'string' ||
        typeof this.selectOptions[0][this.list][0] === 'number') {
          this.simpleArray = true;
        }
        this.globalModel = this.cloneData(this.selectOptions);
      }
      this.initValues();
    },
    initValues() {
      this.valueSelected.length = 0;
      for (let i = 0; i < this.globalModel.length; i += 1) {
        for (let j = 0; j < this.globalModel[i][this.list].length; j += 1) {
          if (typeof this.globalModel[i][this.list][j][this.labelSelected] ===
            'boolean') {
            this.globalModel[i][this.list][j][this.labelSelected] = false;
          } else {
            this.$set(this.globalModel[i][this.list][j], this.labelSelected, false);
            this.$set(this.globalModel[i][this.list][j], 'visible', true);
          }
          for (let k = 0; k < this.value.length; k += 1) {
            if (this.simpleArray &&
              this.globalModel[i][this.list][j][this.labelName] === this.value[k]) {
              this.globalModel[i][this.list][j][this.labelSelected] = true;
              this.valueSelected.push(this.globalModel[i][
                this.list][j][this.labelName]);
            } else if (!this.simpleArray &&
              this.globalModel[i][this.list][j][this.labelName] ===
              this.value[k][this.labelName]) {
              this.globalModel[i][this.list][j][this.labelSelected] = true;
              const opt = Object.assign({}, this.globalModel[i][this.list][j]);
              delete opt[this.labelSelected];
              delete opt.visible;
              this.valueSelected.push(opt);
            }
          }
        }
      }
      this.filter();
      this.$emit('input', this.valueSelected.slice(0));
      this.$emit(this.eventName, this.valueSelected.slice(0));
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
    /* eslint no-param-reassign: ["error", { "props": false }] */
    selectOption(option) {
      if (option[this.labelDisabled]) {
        return;
      }
      if (!option[this.labelSelected]) {
        if (!this.multi) {
          this.filters[0].selectAll = true;
          this.deselctAll();
          this.valueSelected.length = 0;
          this.$emit('input', this.valueSelected.slice(0));
          this.$emit(this.eventName, this.valueSelected.slice(0));
          this.externalClick({ path: [] });
        }
        this.pushOption(option);
        this.$emit('input', this.valueSelected.slice(0));
        this.$emit(this.eventName, this.valueSelected.slice(0));
      } else {
        this.popOption(option);
        this.$emit('input', this.valueSelected.slice(0));
        this.$emit(this.eventName, this.valueSelected.slice(0));
      }
      option[this.labelSelected] = !option[this.labelSelected];
      this.filter();
    },
    pushOption(option) {
      if (this.simpleArray) {
        this.valueSelected.push(option[this.labelName]);
      } else {
        const opt = Object.assign({}, option);
        delete opt[this.labelSelected];
        delete opt.visible;
        this.valueSelected.push(opt);
      }
    },
    popOption(opt) {
      for (let i = 0; i < this.valueSelected.length; i += 1) {
        if (this.valueSelected[i][this.labelName] === opt[this.labelName] ||
          (this.simpleArray && this.valueSelected[i] === opt[this.labelName])) {
          this.valueSelected.splice(i, 1);
          return;
        }
      }
    },
    selectTab(id) {
      this.idSelectedTab = id;
      this.searchfn();
    },
    searchfn() {
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
      this.searchfn();
    },
    selectCurrent(option) {
      for (let i = 0; i < this.globalModel[this.idSelectedTab][this.list].length;
        i += 1) {
        if (this.globalModel[this.idSelectedTab][this.list][i].visible &&
          !this.globalModel[this.idSelectedTab][this.list][i][this.labelDisabled] &&
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
      this.$emit('input', this.valueSelected.slice(0));
      this.$emit(this.eventName, this.valueSelected.slice(0));
      option.selectAll = !option.selectAll;
      this.filter();
    },
    filter() {
      for (let i = 0; i < this.filters.length; i += 1) {
        let allSelected = true;
        for (let j = 0; j < this.globalModel[this.idSelectedTab][this.list].length;
          j += 1) {
          if (this.globalModel[this.idSelectedTab][this.list][j].visible &&
            this.filters[i].func(
              this.globalModel[this.idSelectedTab][this.list][j]) &&
              !this.globalModel[this.idSelectedTab][this.list][j][this.labelDisabled] &&
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
          if (!this.globalModel[i][this.list][j][this.labelDisabled]) {
            this.globalModel[i][this.list][j][this.labelSelected] = false;
          }
        }
      }
    },
    cloneArray(array) {
      const clone = [];
      for (let i = 0; i < array.length; i += 1) {
        if (!Array.isArray(array[i]) &&
          typeof array[i] === 'object') {
          clone[i] = Object.assign({}, array[i]);
        } else if (typeof array[i] === 'string' ||
          typeof array[i] === 'number') {
          const obj = {};
          obj[this.labelName] = array[i];
          clone[i] = obj;
        }
      }
      return clone;
    },
    cloneData(data) {
      const clone = [];
      for (let i = 0; i < data.length; i += 1) {
        clone[i] = {};
        const keys = Object.keys(data[i]);
        for (let j = 0; j < keys.length; j += 1) {
          if (!Array.isArray(data[i][keys[j]]) &&
          typeof data[i][keys[j]] === 'object') {
            clone[i][keys[j]] = Object.assign({}, data[i][keys[j]]);
          } if (Array.isArray(data[i][keys[j]]) &&
          typeof data[i][keys[j]] === 'object') {
            clone[i][keys[j]] = this.cloneArray(data[i][keys[j]]);
          } else {
            clone[i][keys[j]] = data[i][keys[j]];
          }
        }
      }
      return clone;
    },
  },
  computed: {
    getBtnLabel() {
      if (this.multi) {
        return `${this.btnLabel} (${this.valueSelected.length})`;
      } else if (this.valueSelected.length) {
        return this.valueSelected[this.valueSelected.length - 1][this.labelName];
      }
      return this.btnLabel;
    },
  },
  watch: {
    selectOptions: {
      handler() {
        this.setConfig();
      },
      deep: true,
    },
    reloadInit: {
      handler(value) {
        if (value) {
          this.initValues();
          this.$emit('vueMultiSelectInited');
        }
      },
    },
  },
  directives: {
    'click-outside': {
      bind(el, binding) {
        const bubble = binding.modifiers.bubble;
        const ua = navigator.userAgent;
        const event = (ua.match(/iPad|iPhone/i)) ? 'touchstart' : 'click';
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.vueClickOutside = handler;
        document.addEventListener(event, handler);
      },
      unbind(el) {
        const ua = navigator.userAgent;
        const event = (ua.match(/iPad|iPhone/i)) ? 'touchstart' : 'click';
        document.removeEventListener(event, el.vueClickOutside);
        el.vueClickOutside = null;
      },
    },
  },
};
