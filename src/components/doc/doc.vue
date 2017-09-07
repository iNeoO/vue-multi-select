<template>
  <div class="container s-container">
    <div class="columns">
      <div id="sidebar" class="s-sidebar">
        <div class="s-brand">
          <a href="#" class="s-logo tooltip tooltip-bottom" data-tooltip="Vue multi select">
            <h2>Vue multi select</h2>
          </a>
        </div>
        <div class="s-nav">
          <div class="accordion">
            <div class="accordion-item">
              <input type="checkbox" id="docs-accordion-1" name="docs-accordion-checkbox" checked disabled hidden="">
              <label class="accordion-header" for="docs-accordion-1">
                Getting started
              </label>
              <div class="accordion-body">
                <ul class="menu menu-nav">
                  <li class="menu-item">
                    <a href="#introduction">Introduction</a>
                  </li>
                  <li class="menu-item">
                    <a href="#installation">Installation</a>
                  </li>
                  <li class="menu-item">
                    <a href="#whatsnew">What's new</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <input type="checkbox" id="docs-accordion-2" name="docs-accordion-checkbox" checked disabled hidden="">
              <label class="accordion-header" for="docs-accordion-2">
                Doc
              </label>
              <div class="accordion-body">
                <ul class="menu menu-nav">
                  <li class="menu-item">
                    <a href="#general">general</a>
                  </li>
                  <li class="menu-item">
                    <a href="#options">options</a>
                  </li>
                  <li class="menu-item">
                    <a href="#filters">filters</a>
                  </li>
                  <li class="menu-item">
                    <a href="#selectOptions">selectOptions</a>
                  </li>
                  <li class="menu-item">
                    <a href="#value">value</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <input type="checkbox" id="docs-accordion-3" name="docs-accordion-checkbox" checked disabled hidden="">
              <label class="accordion-header" for="docs-accordion-3">
                Examples
              </label>
              <div class="accordion-body">
                <ul class="menu menu-nav">
                  <li class="menu-item">
                    <a href="#a_simple_multiselect">A simple vue-multi-select</a>
                  </li>
                  <li class="menu-item">
                    <a href="#single_select_no_groups">A single select with no groups</a>
                  </li>
                  <li class="menu-item">
                    <a href="#custom_multi_select">A custom multi select</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="float-btn">
        <a href="https://github.com/IneoO/vue-multi-select" target="_blank" class="btn btn-primary">GitHub</a>
      </div>
      <div class="s-footer">
        <a href="https://picturepan2.github.io/spectre/" class="s-logo hand" target="_blank">
          <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg" alt="Spectre.css CSS Framework">
          <span>Doc made with spectre.css</span>
        </a>
      </div>
      <div id="content" class="s-content">
        <div id="introduction" class="container">
          <h3 class="s-title"><a href="#introduction" class="anchor" aria-hidden="true">#</a>Introduction</h3>
          <div class="docs-note">
            <p><strong>Vue multi select</strong> is a lightweight, multi/single select fast and fully customisable.</p>
            <p>Vue multi select provides basic things like groups, research, buttons to select/deselect all many customisation to adapt the best way to your application.</p>
          </div>
        </div>
        <div id="installation" class="container">
          <h3 class="s-title"><a href="#installation" class="anchor" aria-hidden="true">#</a>Installation</h3>
          <div class="docs-note">
            <p>Clone the repo <a href="https://github.com/IneoO/vue-multi-select">github</a></p>
            <p>Include the file in your app import multiSelect from</p>
            <p>
              <code>
                import multiSelect from './node_modules/vueMultiSelect/dist/vue-multi-select.vue';
              </code>
            </p>
          </div>
        </div>
        <div id="whatsnew" class="container">
          <h3 class="s-title"><a href="#whatsnew" class="anchor" aria-hidden="true">#</a>What's new</h3>
          <div class="docs-note">
            <p>First release !!</p>
          </div>
        </div>
        <div id="general" class="container">
          <h3 class="s-title"><a href="#general" class="anchor" aria-hidden="true">#</a>General</h3>
          <div class="docs-note">
            <p>Directive must be call like that in Html
              <code>
                &lt;multi-select>&lt;/multi-select>
              </code>
            </p>
            <p>Props for vue-multi-select :</p>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Params</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active">
                  <td>options</td>
                  <td>Object</td>
                  <td>Permit to params most the options of the multi Select</td>
                </tr>
                <tr>
                  <td>filters</td>
                  <td>Array</td>
                  <td>Permit to add some filters in the multiSelect's input</td>
                </tr>
                <tr class="active">
                  <td>selectOptions</td>
                  <td>Array</td>
                  <td>Variables who contains values for the select</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>Array</td>
                  <td>Values selected from the multi-select</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="options" class="container">
          <h3 class="s-title"><a href="#options" class="anchor" aria-hidden="true">#</a>options</h3>
          <div class="docs-note">
            <p>This variable contains params to setup the vue-multi-select.</p>
            <p>Props for vue-multi-select :</p>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Params</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active">
                  <td>btnLabel</td>
                  <td>String</td>
                  <td><code>'multi-select'</code></td>
                  <td>Label on the button</td>
                </tr>
                <tr>
                  <td>cssSelected</td>
                  <td>Object</td>
                  <td><code>{'background-color': '#b4b4b4'}</code></td>
                  <td>Css passed to value selected</td>
                </tr>
                <tr class="active">
                  <td>groups</td>
                  <td>Boolean</td>
                  <td><code>true</code></td>
                  <td>Display or not groups selection</td>
                </tr>
                <tr>
                  <td>multi</td>
                  <td>Boolean</td>
                  <td><code>true</code></td>
                  <td>Set single or multiple selection</td>
                </tr>
                <tr class="active">
                  <td>labelBold</td>
                  <td>String</td>
                  <td><code>'bold'</code></td>
                  <td>Name Attributes for value to set bold</td>
                </tr>
                <tr>
                  <td>labelList</td>
                  <td>String</td>
                  <td><code>'list'</code></td>
                  <td>Name Attributes for list</td>
                </tr>
                <tr class="active">
                  <td>labelName</td>
                  <td>String</td>
                  <td><code>'name'</code></td>
                  <td>Name Attributes for value to display</td>
                </tr>
                <tr>
                  <td>labelSelected</td>
                  <td>String</td>
                  <td><code>'selected'</code></td>
                  <td>Name Attributes for value to display</td>
                </tr>
                <tr>
                  <td>groupName</td>
                  <td>String</td>
                  <td><code>'name'</code></td>
                  <td>Name Attributes for groups to display</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="filters" class="container">
          <h3 class="s-title"><a href="#filters" class="anchor" aria-hidden="true">#</a>Filters</h3>
          <div class="docs-note">
            <p>filters to apply to select many options</p>
            <p><code>nameAll</code> Name displayed when all elements respect the condition</p>
            <p><code>nameNotAll</code> Name displayed when all elements don't respect the condition</p>
            <p><code>func</code> The function (must return true or false) who permit to test if the element respect a condition</p>
            <pre class="code" data-lang="javascript" style="color: #667189"><code>
<span style="color: #e06870; font-weight: bold">const</span> filtes = [];
filters.push({
  nameAll: <span style="color: #5764c6">&#39;Select all&#39;</span>, <span style="color: #acb3c2; font-style: italic">// label when want to select all elements who answer yes to the function</span>
  nameNotAll: <span style="color: #5764c6">&#39;Deselect all&#39;</span>, <span style="color: #acb3c2; font-style: italic">//label when want to deselect all elements who answer yes to the function</span>
  func: (elem) =&gt; <span style="color: #e06870; font-weight: bold">true</span>
});

<span style="color: #acb3c2; font-style: italic">// Second exemple to select all elements who contain 2</span>
filters.push({
  nameAll: <span style="color: #5764c6">&#39;Select all elements with 2&#39;</span>,
  nameNotAll: <span style="color: #5764c6">&#39;Deselect all elements with 2&#39;</span>,
  func: (elem) =&gt; {
    <span style="color: #e06870; font-weight: bold">if</span>(elem.name.indexOf(<span style="color: #5764c6">&#39;2&#39;</span>) !== -<span style="color: #5764c6">1</span>) {
      <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">true</span>;
    }
    <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">false</span>;
  }
});
            </code></pre>
          </div>
        </div>
        <div id="selectOptions" class="container">
          <h3 class="s-title"><a href="#selectOptions" class="anchor" aria-hidden="true">#</a>selectOptions</h3>
          <div class="docs-note">
            <p>elements to select/deselect</p>
            <p><code>data.name</code>group name displayed, can be changed with tabName</p>
            <p><code>data.list</code>Name of the attributes for the array of elements, can be changed with listName</p>
            <p><code>data.list[x].name</code>Name of the attributes to display one elements, can be changed with labelName</p>
            <pre class="code" data-lang="javascript" style="color: #667189"><code>
<span style="color: #e06870; font-weight: bold">const </span> data = [{
  name: <span style="color: #5764c6">&#39;choice 1&#39;</span>, <span style="color: #acb3c2; font-style: italic">// Can be changed with tabName in options</span>
  list: [
    {name: <span style="color: #5764c6">&#39;choice 1&#39;</span>}, <span style="color: #acb3c2; font-style: italic">// Mame can be changed with labelName in options</span>
    {name: <span style="color: #5764c6">&#39;choice 2&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 3&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 4&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 5&#39;</span>},
  ]
}, {
  name: <span style="color: #5764c6">&#39;choice 10&#39;</span>, <span style="color: #acb3c2; font-style: italic">// Can be changed with tabName in options</span>
  list: [
    {name: <span style="color: #5764c6">&#39;choice 11&#39;</span>}, <span style="color: #acb3c2; font-style: italic">// Mame can be changed with labelName in options</span>
    {name: <span style="color: #5764c6">&#39;choice 12&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 13&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 14&#39;</span>},
    {name: <span style="color: #5764c6">&#39;choice 15&#39;</span>},
  ]
}]
            </code></pre>
          </div>
        </div>
        <div id="value" class="container">
          <h3 class="s-title"><a href="#value" class="anchor" aria-hidden="true">#</a>Value</h3>
          <div class="docs-note">
            <p>values selected. Each value selected is push in this Array.</p>
            <p>When a value is unselect, he is splice fron the Array</p>
            <pre class="code" data-lang="javascript" style="color: #667189"><code>
[ {name: <span style="color: #5764c6">&#39;choice 1&#39;</span>}, {name: <span style="color: #5764c6">&#39;choice 11&#39;</span>}] <span style="color: #acb3c2; font-style: italic">// In the case we selected choice 1 and choice 11</span>
            </code></pre>
          </div>
        </div>
        <div id="a_simple_multiselect" class="container">
          <h3 class="s-title"><a href="#a_simple_multiselect" class="anchor" aria-hidden="true">#</a>A simple vue-multi-select</h3>
          <div class="docs-note">
            <p>values selected. Each value selected is push in this Array.</p>
            <p>When a value is unselect, he is splice fron the Array</p>
            <div class="columns">
              <div class="column col-4">
                <multi-select :value="example1.values" :options="example1.options" :filters="example1.filters" :selectOptions="example1.selectOptions"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" v-on:click="randomize(example1)">Reset Data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example1.isActive === 'code' }" class="hand" v-on:click="setActive(example1,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example1.isActive === 'values' }" class="hand" v-on:click="setActive(example1,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example1.isActive === 'code'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>

  <span style="color: #e06870; font-weight: bold">const</span> selectOption = [{
    name: <span style="color: #5764c6">&#39;first group&#39;</span>,
    list: [
      {name: <span style="color: #5764c6">&#39;0&#39;</span>},
      {name: <span style="color: #5764c6">&#39;2&#39;</span>},
      {name: <span style="color: #5764c6">&#39;3&#39;</span>},
      {name: <span style="color: #5764c6">&#39;8&#39;</span>},
      {name: <span style="color: #5764c6">&#39;9&#39;</span>},
      {name: <span style="color: #5764c6">&#39;11&#39;</span>},
      {name: <span style="color: #5764c6">&#39;13&#39;</span>},
      {name: <span style="color: #5764c6">&#39;14&#39;</span>},
      {name: <span style="color: #5764c6">&#39;15&#39;</span>},
      {name: <span style="color: #5764c6">&#39;18&#39;</span>},
    ]
  }, {
    name: <span style="color: #5764c6">&#39;second group&#39;</span>,
    list: [
      {name: <span style="color: #5764c6">&#39;21&#39;</span>},
      {name: <span style="color: #5764c6">&#39;22&#39;</span>},
      {name: <span style="color: #5764c6">&#39;24&#39;</span>},
      {name: <span style="color: #5764c6">&#39;27&#39;</span>},
      {name: <span style="color: #5764c6">&#39;28&#39;</span>},
      {name: <span style="color: #5764c6">&#39;29&#39;</span>},
      {name: <span style="color: #5764c6">&#39;31&#39;</span>},
      {name: <span style="color: #5764c6">&#39;33&#39;</span>},
      {name: <span style="color: #5764c6">&#39;35&#39;</span>},
      {name: <span style="color: #5764c6">&#39;39&#39;</span>},
    ]
  }];

  <span style="color: #e06870; font-weight: bold">const</span> filters = [{
    nameAll: <span style="color: #5764c6">&#39;select &lt;= 10&#39;</span>,
    nameNotAll: <span style="color: #5764c6">&#39;Deselect &lt;= 10&#39;</span>,
    func: (elem) =&gt; {
      <span style="color: #e06870; font-weight: bold">if</span> (elem.name &lt;= <span style="color: #5764c6">10</span>) {
        <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">true</span>;
      }
      <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">false</span>;
    }
  },{
    nameAll: <span style="color: #5764c6">&#39;Select contains 2&#39;</span>,
    nameNotAll: <span style="color: #5764c6">&#39;Deselect contains 2&#39;</span>,
    func: (elem) =&gt; {
      <span style="color: #e06870; font-weight: bold">if</span> (elem.name.indexOf(<span style="color: #5764c6">&#39;2&#39;</span>) !== -<span style="color: #5764c6">1</span>) {
        <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">true</span>;
      }
      <span style="color: #e06870; font-weight: bold">return</span> <span style="color: #e06870; font-weight: bold">false</span>;
    }
  }];

  <span style="color: #e06870; font-weight: bold">const</span> options = {
    btnLabel: <span style="color: #5764c6">&#39;A simple vue multi select&#39;</span>
  }
              </code></pre>
            </div>
            <div v-if="example1.isActive === 'values'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>
{{example1.values}}
              </code></pre>
            </div>
          </div>
        </div>
        <div id="single_select_no_groups" class="container">
          <h3 class="s-title"><a href="#single_select_no_groups" class="anchor" aria-hidden="true">#</a>A single Select with no groups</h3>
          <div class="docs-note">
            <div class="columns">
              <div class="column col-4">
                <multi-select :value="example2.values" :options="example2.options" :filters="example2.filters" :selectOptions="example2.selectOptions"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" v-on:click="randomize(example2)">Reset Data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example2.isActive === 'code' }" class="hand" v-on:click="setActive(example2,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example2.isActive === 'values' }" class="hand" v-on:click="setActive(example2,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example2.isActive === 'code'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>

  <span style="color: #e06870; font-weight: bold">const</span> selectOption = [{
    list: [
      {name: <span style="color: #5764c6">&#39;0&#39;</span>},
      {name: <span style="color: #5764c6">&#39;2&#39;</span>},
      {name: <span style="color: #5764c6">&#39;3&#39;</span>},
      {name: <span style="color: #5764c6">&#39;8&#39;</span>},
      {name: <span style="color: #5764c6">&#39;9&#39;</span>},
      {name: <span style="color: #5764c6">&#39;11&#39;</span>},
      {name: <span style="color: #5764c6">&#39;13&#39;</span>},
      {name: <span style="color: #5764c6">&#39;14&#39;</span>},
      {name: <span style="color: #5764c6">&#39;15&#39;</span>},
      {name: <span style="color: #5764c6">&#39;18&#39;</span>},
    ]
  }];

  <span style="color: #e06870; font-weight: bold">const</span> options = {
    groups: <span style="color: #e06870">&#39;false&#39;</span>
    multi: <span style="color: #e06870">&#39;false&#39;</span>
    btnLabel: <span style="color: #5764c6">&#39;A simple vue multi select&#39;</span>
  }
              </code></pre>
            </div>
            <div v-if="example2.isActive === 'values'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>
{{example2.values}}
              </code></pre>
            </div>
          </div>
        </div>
        <div id="custom_multi_select" class="container">
          <h3 class="s-title"><a href="#custom_multi_select" class="anchor" aria-hidden="true">#</a>A custom multi select</h3>
          <div class="docs-note">
            <p>if the <code>labelSelected</code> and <code>cssLabel</code> are changed don't forget to update <code>option['selected']</code> in <code>cssLabel</code> with the labelSelected value</p>
            <div class="columns">
              <div class="column col-4">
                <multi-select :value="example3.values" :options="example3.options" :filters="example3.filters" :selectOptions="example3.selectOptions"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" v-on:click="randomize(example3)">Reset Data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example3.isActive === 'code' }" class="hand" v-on:click="setActive(example3,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example3.isActive === 'values' }" class="hand" v-on:click="setActive(example3,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example3.isActive === 'code'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>
<span style="color: #e06870; font-weight: bold">const</span> selectOption = [{
    title: <span style="color: #5764c6">&#39;part one&#39;</span>,
    elements: [
      {label: <span style="color: #5764c6">&#39;0&#39;</span>},
      {label: <span style="color: #5764c6">&#39;2&#39;</span>},
      {label: <span style="color: #5764c6">&#39;3&#39;</span>},
      {label: <span style="color: #5764c6">&#39;8&#39;</span>},
      {label: <span style="color: #5764c6">&#39;9&#39;</span>},
      {label: <span style="color: #5764c6">&#39;11&#39;</span>},
      {label: <span style="color: #5764c6">&#39;13&#39;</span>},
      {label: <span style="color: #5764c6">&#39;14&#39;</span>},
      {label: <span style="color: #5764c6">&#39;15&#39;</span>},
      {label: <span style="color: #5764c6">&#39;18&#39;</span>},
    ]
  },{
    title: <span style="color: #5764c6">&#39;part two&#39;</span>,
    elements: [
      {label: <span style="color: #5764c6">&#39;23&#39;</span>},
      {label: <span style="color: #5764c6">&#39;25&#39;</span>},
      {label: <span style="color: #5764c6">&#39;31&#39;</span>},
      {label: <span style="color: #5764c6">&#39;42&#39;</span>},
      {label: <span style="color: #5764c6">&#39;56&#39;</span>},
      {label: <span style="color: #5764c6">&#39;76&#39;</span>},
      {label: <span style="color: #5764c6">&#39;82&#39;</span>},
      {label: <span style="color: #5764c6">&#39;42&#39;</span>},
      {label: <span style="color: #5764c6">&#39;13&#39;</span>},
      {label: <span style="color: #5764c6">&#39;21&#39;</span>},
    ]
  }];

  options = {
    labelName: <span style="color: #5764c6">&#39;label&#39;</span>,
    labelList: <span style="color: #5764c6">&#39;elements&#39;</span>,
    groupName: <span style="color: #5764c6">&#39;title&#39;</span>,
    btnLabel: <span style="color: #5764c6">&#39;A simple vue multi select&#39;</span>,
    cssSelected: (option) =&gt;  option[<span style="color: #5764c6">&#39;selected&#39;</span>] ? {<span style="color: #5764c6">&#39;background-color&#39;</span>: <span style="color: #5764c6">&#39;#5764c6&#39;</span>} : <span style="color: #5764c6">&#39;&#39;</span>
  }
              </code></pre>
            </div>
            <div v-if="example3.isActive === 'values'">
              <pre class="code" data-lang="javascript" style="color: #667189"><code>
{{example2.values}}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./doc.js"></script>
<style scoped src="./doc.css"></style>
