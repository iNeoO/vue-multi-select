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
    <div id="cssmenu" v-if="groups === true">
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

<script src="./vue-multi-select.js"></script>
<style scoped src="./vue-multi-select.css"></style>
