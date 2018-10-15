import compareHelper from '../../helper/equals';

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
        if (typeof this.selectOptions[0] === 'string' ||
          typeof this.selectOptions[0] === 'number') {
          this.simpleArray = true;
          this.globalModel = { [this.list]: this.prepareArray(this.selectOptions) };
        } else {
          this.globalModel = [{ [this.list]: this.selectOptions }];
        }
      } else {
        const clone = this.cloneData(this.selectOptions);
        if (typeof clone[0][this.list][0] === 'string' ||
        typeof clone[0][this.list][0] === 'number') {
          for (let i = 0; i < clone.length; i += 1) {
            clone[i][this.list] = this.prepareArray(clone[i][this.list]);
          }
          this.simpleArray = true;
        }
        this.globalModel = clone;
      }
      this.initValues();
    },
    initValues() {
      this.valueSelected = [];
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
          this.valueSelected = [];
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
        if (~this.globalModel[this.idSelectedTab][this.list][i][this.labelName]
          .toLowerCase().indexOf(
            this.searchInput.toLowerCase())) {
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
    prepareArray(value) {
      return value.map(elem => ({ [this.labelName]: elem }));
    },
    cloneData(value) {
      if (Array.isArray(value)) {
        return value.map(this.cloneData);
      } else if (value && typeof value === 'object') {
        const res = {};
        const keys = Object.keys(value);
        for (let i = 0; i < keys.length; i += 1) {
          res[keys[i]] = this.cloneData(value[keys[i]]);
        }
        return res;
      }
      return value;
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
    value: {
      handler(newVal, oldval) {
        if (oldval && newVal && this.valueSelected) {
          if (this.simpleArray) {
            if (!compareHelper.compareSimpleArray(newVal, this.valueSelected)) {
              this.initValues();
            }
          } else if (!compareHelper.compareArrayObject(
            newVal, this.valueSelected, this.labelName)) {
            this.initValues();
          }
        }
      },
      deep: true,
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
