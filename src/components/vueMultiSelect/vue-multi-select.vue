<template>
<div class="select">
  <button
    ref="buttonClick"
    type="button"
    :class="`btn-select ${btnClass}`"
    :disabled="disabled"
    @click="toggleCheckboxes">
    <div class="buttonLabel">
      <span v-html="getBtnLabel"></span>
      <span class="caret"></span>
    </div>
  </button>
  <div
    class="checkboxLayer"
    :class="`${isOpen ? 'show' : ''} ${popoverClass}`"
    v-click-outside="externalClick"
    :style="getPosition">
    <div class="helperContainer">
      <div class="line">
        <button
          type="button" class="helperButton"
          @click="selectCurrent(button)"
          v-for="(button, index) in getButtonList"
          :key="index">
            {{button.selectAll ? button.nameNotAll : button.nameAll}}
          </button>
          <button v-if="historyButton && previousSelected.length"
            @click="historyBack"
            class="historyButton">
            {{ historyButtonText }}
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
          <slot name="option" v-bind:option="option">
            <span class="right margin-right-10" v-if="option[labelSelected]">✓</span>
            <span class="margin-left-20">{{option[labelName]}}</span>
          </slot>
        </li>
      </ul>
      <div v-if="!valueSelected  || optionsAllHide" class="empty-tab">No data</div>
    </div>
  </div>
</div>
</template>

<script src="./vue-multi-select.js"></script>
<style scoped src="./vue-multi-select.css"></style>
