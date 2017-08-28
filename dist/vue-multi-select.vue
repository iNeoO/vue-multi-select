<template>
<div class="select" style="display:inline;">
  <button type="button" class="btn-select" v-on:click="toggleCheckboxes">
      <div class="buttonLabel">
          {{getBtnLabel()}}
          <span class="caret"></span>
      </div>
    </button>
  <div class="checkboxLayer" v-bind:class="{'show': isOpen}" v-click-outside="externalClick">
    <div class="helperContainer">
      <div class="line">
        <button v-if="!!filters === true" type="button" class="helperButton" v-on:click="selectCurrent(button)" v-for="button in filters">
            {{button.selectAll ? button.nameNotAll : button.nameAll}}
          </button>
      </div>
      <div class="line" style="position:relative">
        <input placeholder="Search..." type="text" v-model="searchInput" @input="search()" class="inputFilter">
        <button type="button" class="clearButton" v-on:click="clearSearch()">×
          </button>
      </div>
    </div>
    <div id="cssmenu" v-if="group === true">
      <ul>
        <li v-for="(tab, index) in globalModel" v-show="tab.list.length" v-on:click="selectTab(index)" v-bind:class="{active : idSelectedTab == index}">
          <span class="pointer">{{tab[tabName]}}</span>
        </li>
      </ul>
    </div>
    <div class="checkBoxContainer">
      <ul class="selectList" v-for="(tab, index) in globalModel" v-show="idSelectedTab == index">
        <li v-for="option in tab.list" class="selectItem" v-if="option.visible" v-on:click="selectOption(option)" :style="options.cssSelected(option)">
          <span :style="{'font-weight': !!option[labelBold] ? 'bold' : 'normal'}">{{option[labelName]}}</span>
        </li>
      </ul>
      <div v-if="!value  || optionsAllHide" class="empty-tab">No data</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'multiple-select',
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
      btnLabel: 'multi-select',
      multiSelect: null,
      group: true,
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
      console.log(this.value);
      this.options.multi = typeof(this.options.multi) !== 'undefined' ?
        this.options.multi : true;
      this.list = !!this.options.labelList ? this.options.labelList : 'list';
      this.labelName = !!this.options.labelName ? this.options.labelName : 'name';
      this.tabName = !!this.options.tabName ? this.options.tabName : 'name';
      this.labelSelected = !!this.options.labelSelected ? this.options.labelSelected : 'selected';
      this.labelBold = !!this.options.labelBold ? this.options.labelBold : 'bold';
      this.options.cssSelected = !!this.options.cssSelected ?
        this.options.cssSelected : (option) =>  option[this.labelSelected] ? {'background-color': '#b4b4b4'} : '';
      this.filters.unshift({
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func: (elem) => true
      });
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
      return !!this.options.multi ? this.btnLabel : `${this.btnLabel} (${this.value.length})`;
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
        if (elem.className === 'buttonLabel') {
          elem = elem.parentNode;
        }
        if (elem.isSameNode(this.multiSelect)) {
          return;
        }
        this.isOpen = false;
      }
    },
    /* eslint no-param-reassign: ["error", { "props": false }]*/
    selectOption(option) {
      if (!option[this.labelSelected]) {
        if (!this.options.multi) {
          this.filters[0].selectAll = true;
          this.deselctAll();
          this.value = [];
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
    selectOptions(newVal, oldVal) {
      this.setConfig();
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
</script>

<style>
/* ! vertical layout */

.select .vertical {
  float: none;
}

/* ! horizontal layout */

.select .horizontal:not(.selectGroup) {
  float: left;
}


/* ! create a "row" */

.select .line {
  padding: 2px 0px 4px 0px;
  max-height: 30px;
  overflow: hidden;
  box-sizing: content-box;
  position: relative;
}


/* ! create a "column" */

.select .acol {
  display: inline-block;
  min-width: 12px;
}


/* ! */

.select .inlineBlock {
  display: inline-block;
}


/* the select button */

.select>button {
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  border: 1px solid #c6c6c6;
  padding: 1px 8px 1px 8px;
  font-size: 14px;
  min-height: 31px !important;
  border-radius: 4px;
  color: #555;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  white-space: normal;
  background-color: #fff;
  /*background-image: linear-gradient(#fff, #f7f7f7);      */
}


/* button: hover */

.select>button:hover {
  background-color: #f7f7f7;
}


/* button: clicked */

.select .buttonClicked {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset, 0 1px 2px rgba(0, 0, 0, 0.05);
}


/* labels on the button */

.select .buttonLabel {
  word-break: break-word;
  display: inline-block;
  padding: 0px 0px 0px 0px;
}


/* downward pointing arrow */

.select .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin: 0px 0px 1px 12px !important;
  vertical-align: middle;
  border-top: 4px solid #333;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-bottom: 0 dotted;
}


/* the main checkboxes and helper layer */

.select .checkboxLayer {
  background-color: #fff;
  position: absolute;
  z-index: 999;
  border: solid lightgrey;
  border-width: 1px 1px 1px 1px;
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  min-width: 278px;
  display: none !important;
}


/* container of helper elements */

.select .helperContainer {
  padding: 8px 8px 0px 8px;
}


/* helper buttons (select all, none, reset); */

.select .helperButton {
  display: inline;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  height: 26px;
  font-size: 13px;
  border-radius: 2px;
  color: #666;
  background-color: #f1f1f1;
  line-height: 1.6;
  margin: 0px 0px 8px 0px;
}

.select .helperButton.reset {
  float: right;
}

.select .helperButton:not( .reset) {
  margin-right: 4px;
}


/* clear button */

.select .clearButton {
  position: absolute;
  display: inline;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  height: 22px;
  width: 22px;
  font-size: 13px;
  border-radius: 2px;
  color: #666;
  background-color: #f1f1f1;
  line-height: 1.4;
  right: 2px;
  top: 4px;
}


/* filter */

.select .inputFilter {
  border-radius: 2px;
  border: 1px solid #ccc;
  height: 26px;
  font-size: 14px;
  width: 100%;
  min-width: 320px;
  padding-left: 7px;
  -webkit-box-sizing: border-box;
  /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  /* Firefox, other Gecko */
  box-sizing: border-box;
  /* Opera/IE 8+ */
  color: #888;
  margin: 0px 0px 8px 0px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}


/* helper elements on hover & focus */

.select .clearButton:hover,
.select .helperButton:hover {
  border: 1px solid #ccc;
  color: #999;
  background-color: #f4f4f4;
}

.select .clearButton:focus,
.select .helperButton:focus,
.select .inputFilter:focus {
  border: 1px solid #66AFE9 !important;
  outline: 0;
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, .065), 0 0 5px rgba(102, 175, 233, .6) !important;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, .065), 0 0 5px rgba(102, 175, 233, .6) !important;
}


/* container of single select items */

.select .checkBoxContainer {
  display: block;
  padding: 5px 0px 0 5px;
  overflow: hidden;
  max-height: 300px;
  min-height: 80px;
  overflow-y: scroll;
  border-top: 1px solid #ddd;
}


/* ! to show / hide the checkbox layer above */

.select .show {
  display: block !important;
}


/* item labels */

.select .selectItem {
  display: block;
  padding: 3px;
  font-size: 13px;
  color: black;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  position: relative;
  min-width: 278px;
  min-height: 32px;
}


/* item labels when not active */

.select .selectItemDeactive {
  display: block;
  padding: 3px;
  color: #444;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  position: relative;
  min-width: 278px;
  min-height: 32px;
}


/* item labels focus on mouse hover */

.select .selectItemDeactive:hover {
  cursor: not-allowed;
}


/* Styling on selected items */

.select .selectItem.selected {
  background-color: #e9e9e9;
  color: #555;
  cursor: pointer;
  border-top: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #d9d9d9;
}

.select .selectItem .acol label {
  display: inline-block;
  padding-right: 30px;
  margin: 0px;
  font-weight: normal;
  line-height: normal;
}


/* item labels focus on mouse hover */

.select .selectItem:hover,
.select .selectGroup:hover {
  cursor: pointer;
  border: 2px solid black;
}


/* item labels focus using keyboard */

.select .selectFocus {
  cursor: pointer;
}


/* change mouse pointer into the pointing finger */

.select .selectItem span:hover,
.select .selectGroup span:hover {
  cursor: pointer;
}


/* ! group labels */

.select .selectGroup {
  display: block;
  clear: both;
}


/* right-align the tick mark (&#10004;) */

.select .tickMark {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 10px;
}


/* hide the original HTML checkbox away */

.select .checkbox {
  color: #ddd !important;
  position: absolute;
  left: -9999px;
  cursor: pointer;
}


/* checkboxes currently disabled */

.select .disabled,
.select .disabled:hover,
.select .disabled label input:hover~span {
  color: #c4c4c4 !important;
  cursor: not-allowed !important;
}


/* If you use images in button / checkbox label, you might want to change the image style here. */

.select img {
  vertical-align: middle;
  margin-bottom: 0px;
  max-height: 22px;
  max-width: 22px;
}

.select .group {
  font-weight: 600;
  font-size: 14px;
}

.select .sousGroup {
  margin-left: 15px;
}

#cssmenu,
#cssmenu ul,
#cssmenu ul li,
#cssmenu ul li span {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  line-height: 1;
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#cssmenu:after,
#cssmenu>ul:after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

#cssmenu {
  width: auto;
  border-bottom: 3px solid #c6cbd3;
  font-family: Raleway, sans-serif;
  line-height: 1;
}

#cssmenu ul {
  background: #ffffff;
}

#cssmenu>ul>li {
  float: left;
}

#cssmenu.align-center>ul {
  font-size: 0;
  text-align: center;
}

#cssmenu.align-center>ul>li {
  display: inline-block;
  float: none;
}

#cssmenu.align-right>ul>li {
  float: right;
}

#cssmenu.align-right>ul>li>span {
  margin-right: 0;
  margin-left: -4px;
}

#cssmenu>ul>li>span {
  z-index: 2;
  color: black;
  padding: 4px 6px 3px 4px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #444444;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
  margin-right: -4px;
}

#cssmenu>ul>li.active>span,
#cssmenu>ul>li:hover>span,
#cssmenu>ul>li>span:hover {
  color: black;
}

#cssmenu>ul>li>span:after {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 120%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  content: "";
  -webkit-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
  -webkit-transform: perspective(5px) rotateX(2deg);
  -webkit-transform-origin: bottom;
  -moz-transform: perspective(5px) rotateX(2deg);
  -moz-transform-origin: bottom;
  transform: perspective(5px) rotateX(2deg);
  transform-origin: bottom;
}

#cssmenu>ul>li.active>span:after,
#cssmenu>ul>li:hover>span:after,
#cssmenu>ul>li>span:hover:after {
  background: #c6cbd3;
}

.select .empty-tab {
  min-height: 80px;
  text-align: center;
  padding-top: 30px;
  font-size: 15px;
  color: rgb(116, 116, 116);
}

.selectList {
  list-style: inside disc;
  padding-left: 0px;
}

.pointer {
  cursor: pointer;
}

.bold {
  font-weight: bold;
}
</style>
