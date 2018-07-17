<template>
<div class="select">
  <button type="button" class="btn-select" @click="toggleCheckboxes">
      <div class="buttonLabel">
          {{getBtnLabel}}
          <span class="caret"></span>
      </div>
    </button>
  <div class="checkboxLayer" :class="{'show': isOpen}" v-click-outside="externalClick">
    <div class="helperContainer">
      <div class="line">
        <button
          v-if="!!filters && multi"
          type="button" class="helperButton"
          @click="selectCurrent(button)"
          v-for="(button, index) in filters"
          :key="index">
            {{button.selectAll ? button.nameNotAll : button.nameAll}}
          </button>
      </div>
      <div v-if="search" class="line" style="position:relative">
        <input
          :placeholder="searchPlaceholder"
          type="text"
          v-model="searchInput"
          @input="searchfn()"
          class="inputFilter">
        <button type="button" class="clearButton" @click="clearSearch()">×
          </button>
      </div>
    </div>
    <div v-if="groups === true">
      <ul class="tab tab-block">
        <li class="tab-item"
          v-for="(tab, index) in globalModel"
          :key="index"
          v-show="tab[list].length"
          @click="selectTab(index)" :class="{active : idSelectedTab == index}">
          <span class="pointer">{{tab[groupName]}}</span>
        </li>
      </ul>
    </div>
    <div class="checkBoxContainer">
      <ul class="selectList"
        v-for="(tab, index) in globalModel"
        v-show="idSelectedTab == index"
        :key="index">
        <li v-for="(option, indexOptions) in tab[list]"
          :key="indexOptions"
          :class="[option[labelDisabled] ? 'disabled' : '', 'selectItem']"
          v-if="option.visible"
          @click="selectOption(option)"
          :style="cssSelected(option)">
          <span class="right margin-right-10"
            v-if="option[labelSelected]">✓</span>
          <span class="margin-left-20">
            {{renderTemplate(option)}}
          </span>
        </li>
      </ul>
      <div v-if="!valueSelected  || optionsAllHide" class="empty-tab">No data</div>
    </div>
  </div>
</div>
</template>

<script src="./vue-multi-select.js"></script>
<style scoped src="./vue-multi-select.css"></style>
