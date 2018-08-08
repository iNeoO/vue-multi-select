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
              <input type="checkbox"
                id="docs-accordion-1"
                name="docs-accordion-checkbox"
                checked disabled hidden="">
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
              <input
                type="checkbox"
                id="docs-accordion-2"
                name="docs-accordion-checkbox"
                checked disabled hidden="">
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
                    <a href="#eventName">eventName</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <input type="checkbox"
                id="docs-accordion-3"
                name="docs-accordion-checkbox"
                checked disabled hidden="">
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
                  <li class="menu-item">
                    <a href="#a_multiselect_array">A multi select with array</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="float-btn">
        <a href="https://github.com/IneoO/vue-multi-select"
          target="_blank"
          class="btn btn-primary">GitHub</a>
      </div>
      <div class="s-footer">
        <a href="https://picturepan2.github.io/spectre/" class="s-logo hand" target="_blank">
          <img src="https://picturepan2.github.io/spectre/img/spectre-logo.svg"
            alt="Spectre.css CSS Framework">
          <span>Doc made with spectre.css</span>
        </a>
      </div>
      <div id="content" class="s-content">
        <div id="introduction" class="container">
          <h3 class="s-title">
            <a href="#introduction" class="anchor" aria-hidden="true">#</a>
            Introduction
          </h3>
          <div class="docs-note">
            <p><strong>Vue multi select</strong> is a lightweight,
              multi/single select fast and fully custom.</p>
            <p>Vue multi select provides basic things like groups, research,
              buttons to select/deselect all many customisation to adapt the best way
              to your application.</p>
          </div>
        </div>
        <div id="installation" class="container">
          <h3 class="s-title">
            <a href="#installation" class="anchor" aria-hidden="true">#</a>Installation
          </h3>
          <h4>Dependencies</h4>
          <p>- required: Vuejs >= 2.x</p>
          <h4>Install</h4>
          <div class="docs-note">
            <p>Clone the repo
              <a href="https://github.com/IneoO/vue-multi-select">github</a> or
              <code>npm install vue-multi-select --save</code></p>
            <p>Include the file in your app import multiSelect from</p>
            <p>
              <code>
                import multiSelect from 'vue-multi-select';<br>
                import 'vue-multi-select/dist/lib/vue-multi-select.min.css';
              </code>
            </p>
          </div>
        </div>
        <div id="whatsnew" class="container">
          <h3 class="s-title">
            <a href="#whatsnew" class="anchor" aria-hidden="true">#</a>What's new
          </h3>
          <div class="docs-note">
            <h3>3.7.1</h3>
            <p>Fix event unbind</p>
            <h3>3.7.0</h3>
            <p>Apply a function to render elements</p>
            <h3>3.6.2</h3>
            <p>Fix event listener not trigerred on Iphone/ipad</p>
            <h3>3.6.0</h3>
            <p>Set possible to hide search bar and edit placeholder of search</p>
            <h3>3.5.0</h3>
            <p>Set buttonLabel as prop, to be able to dynamically change it</p>
            <p>When single select, display the value selected</p>
            <h3>3.4.0</h3>
            <p><b>selectionChanged is now deprecated</b>, if you want to trigger event when value change use a watch</p>
            <p>Set possible to use v-model to directly get the value (instead of use a function to update the value)</p>
            <p>It's now possible to trigger an init if you want to manualy update the v-model</p>
            <h3>3.3.2</h3>
            <p>Fix scroll-y issue (thx to <a target="_blank" href="https://github.com/davidkassa">davidkassa</a>)</p>
            <h3>3.3.1</h3>
            <p>Fix button filter when init vue-multi-select with all selected</p>
            <h3>3.3.0</h3>
            <p>Add the possibility to disable some select options</p>
            <h3>3.2.2</h3>
            <p>Fix styles errors in firefox</p>
            <h3>3.2.1</h3>
            <p>Fix error with event trigerred multiple times when clicking on button select-all/...</p>
            <h3>3.2.0</h3>
            <p>Set possible to have an array of string or numbers (see a multiple select with array) </p>
            <p>Remove dependencies lodash for clone object</p>
            <h3>3.1.0</h3>
            <p>Set groups and multi in options to false as Default
            It's now possible to only have an array to selects elems when groups is set to false</p>
            <h3>3.0.0</h3>
            <p>Big update about way to build and dev the component</p>
            <h3>2.0.1</h3>
            <p>Big update on the doc. She is now more complete</p>
            <h3>2.0.0</h3>
            <p>Use of events to be more respectfull of vuejs data binding</p>
          </div>
        </div>
        <div id="general" class="container">
          <h3 class="s-title">
            <a href="#general" class="anchor" aria-hidden="true">#</a>General
          </h3>
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
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active">
                  <td>options</td>
                  <td>Object</td>
                  <td>Permit to params most the options of the multi Select</td>
                  <td><code>{}</code></td>
                </tr>
                <tr>
                  <td>filters</td>
                  <td>Array</td>
                  <td>Permit to add some filters in the multiSelect's input</td>
                  <td><code>[]</code></td>
                </tr>
                <tr class="active">
                  <td>selectOptions</td>
                  <td>Array</td>
                  <td>Variables who contains values for the select</td>
                  <td><code>[]</code></td>
                </tr>
                <tr>
                  <td>eventName</td>
                  <td>String</td>
                  <td>eventName Name for the event triggered by
                    the vue-multi-select default is selectionChanged (deprecated, use v-model or a watch)</td>
                  <td><code>'selectionChanged'</code></td>
                </tr>
                <tr class="active">
                  <td>v-model</td>
                  <td>Array</td>
                  <td>Variables who contains values selected</td>
                  <td><code>-</code></td>
                </tr>
                <tr>
                  <td>search</td>
                  <td>Boolean</td>
                  <td>hide/show search bar</td>
                  <td><code>False</code></td>
                </tr>
                <tr  class="active">
                  <td>searchPlaceholder</td>
                  <td>String</td>
                  <td>Change placeholder of searchBar</td>
                  <td><code>'Search...'</code></td>
                </tr>
                <tr>
                  <td>vueMultiSelectInited (event)</td>
                  <td>Event</td>
                  <td>Event triggered when v-model have been manualy updated</td>
                  <td><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="options" class="container">
          <h3 class="s-title">
            <a href="#options" class="anchor" aria-hidden="true">#</a>options
          </h3>
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
                  <td>Function</td>
                  <td><code>(option) =>  option['selected'] ?
                    {'background-color': '#b4b4b4'} : ''</code></td>
                  <td>Css passed to value selected</td>
                </tr>
                <tr class="active">
                  <td>groups</td>
                  <td>Boolean</td>
                  <td><code>false</code></td>
                  <td>Display or not groups selection</td>
                </tr>
                <tr>
                  <td>multi</td>
                  <td>Boolean</td>
                  <td><code>false</code></td>
                  <td>Set single or multiple selection</td>
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
                  <td>labelDisabled</td>
                  <td>String</td>
                  <td><code>'disabled'</code></td>
                  <td>Name Attributes for value to disable</td>
                </tr>
                <tr>
                  <td>groupName</td>
                  <td>String</td>
                  <td><code>'name'</code></td>
                  <td>Name Attributes for groups to display</td>
                </tr>
                <tr>
                  <td>renderTemplate</td>
                  <td>Function</td>
                  <td><code>(elem => elem[this.labelName])</code></td>
                  <td>Function returning text to display element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="filters" class="container">
          <h3 class="s-title"><a href="#filters" class="anchor" aria-hidden="true">#</a>Filters</h3>
          <div class="docs-note">
            <p>filters to apply to select many options</p>
            <p><code>nameAll</code>
              Name displayed when all elements respect the condition</p>
            <p><code>nameNotAll</code>
              Name displayed when all elements don't respect the condition</p>
            <p><code>func</code>
              The function (must return true or false) who permit to test if
              the element respect a condition</p>
            <pre class="code grey" data-lang="javascript"><code>
<span class="red bold">const</span> filters = [];
filters.push({
  <span class="light-grey">/* label when want to select all elements who
    answer yes to the function */</span>
  nameAll: <span class="blue">&#39;Select all&#39;</span>,
  nameNotAll: <span class="blue">&#39;Deselect all&#39;</span>,
  <span class="light-grey">/* label when want to deselect all elements
    who answer yes to the function */</span>
  func: (elem) =&gt; <span class="red bold">true</span>
});

<span class="light-grey">// Second exemple to select all elements who contain 2</span>
filters.push({
  nameAll: <span class="blue">&#39;Select all elements with 2&#39;</span>,
  nameNotAll: <span class="blue">&#39;Deselect all elements with 2&#39;</span>,
  func: (elem) =&gt; {
    <span class="wrap"><span class="red bold">if</span>(elem.name.indexOf(
    <span class="blue">&#39;2&#39;</span>) !== -<span class="blue">1</span>) {</span>
      <span class="red bold">return</span> <span class="red bold">true</span>;
    }
    <span class="red bold">return</span> <span class="red bold">false</span>;
  }
});
            </code></pre>
          </div>
        </div>
        <div id="selectOptions" class="container">
          <h3
            class="s-title">
            <a href="#selectOptions" class="anchor" aria-hidden="true">#</a>selectOptions</h3>
          <div class="docs-note">
            <p>elements to select/deselect</p>
            <h3>if options.groups set to default/false</h3>
            <p>just use an Array of objects</p>
            <p><code>[{name: 1},{name: 2}, ...]</code></p>
            <p>or of strings</p>
            <p><code>['Germany', 'England', ...]</code></p>
            <h3>If options.groups set to true</h3>
            <p><code>data.name</code> group name displayed, can be changed with tabName</p>
            <p><code>data.list</code> Name of the attributes for the array of
              elements, can be changed with listName</p>
              <p>it can'be an array of string or an array of objects<p>
            <p><code>data.list[x].name</code> Name of the attributes to display one elements,
              can be changed with labelName</p>
            <pre class="code grey" data-lang="javascript"><code>
<span class="red bold">const </span> data = [{
  <span class="wrap">name: <span class="blue">&#39;choice 1&#39;</span>, <span class="light-grey">
    // Can be changed with tabName in options</span></span>
  list: <span class="light-grey">[ // Can be changed with listName in options</span>
    <span class="wrap">{name: <span class="blue">&#39;choice 1&#39;</span>},
    <span class="light-grey">// Mame can be changed with labelName in options</span></span>
    {name: <span class="blue">&#39;choice 2&#39;</span>},
    {name: <span class="blue">&#39;choice 3&#39;</span>},
    {name: <span class="blue">&#39;choice 4&#39;</span>},
    {name: <span class="blue">&#39;choice 5&#39;</span>},
  ]
}, {
  <span class="wrap">name: <span class="blue">&#39;choice 10&#39;</span>, <span class="light-grey">
    // Can be changed with tabName in options</span></span>
  list: [
    <span class="wrap">{name: <span class="blue">&#39;choice 11&#39;</span>},
    <span class="light-grey">// Mame can be changed with labelName in options</span>
  </span>
    {name: <span class="blue">&#39;choice 12&#39;</span>},
    {name: <span class="blue">&#39;choice 13&#39;</span>},
    {name: <span class="blue">&#39;choice 14&#39;</span>},
    {name: <span class="blue">&#39;choice 15&#39;</span>},
  ]
}]
            </code></pre>
          </div>
        </div>
        <div id="eventName" class="container">
          <h3 class="s-title">
            <a href="#eventName" class="anchor" aria-hidden="true">#</a>
            eventName
          </h3>
          <div class="docs-note">
            <p>Variable containing the name of the event who will be launch
              when vue-multi-select value change</p>
            <p>Example of function to get data</p>
            <pre class="code grey" data-lang="javascript"><code>
<span class="red bold" style="font-weight: bold">const</span> event = (values) => {
  this.values = values;
}
</code></pre>
            <p>Each value selected is push in this Array.</p>
            <p>When a value is unselect, he is splice fron the Array</p>
            <pre class="code grey" data-lang="javascript"><code>
<span class="wrap">[ {name: <span class="blue">&#39;choice 1&#39;</span>},
{name: <span class="blue">&#39;choice 11&#39;</span>}]
<span class="light-grey">// In the case we selected choice 1 and choice 11</span>
</span>
            </code></pre>
          </div>
        </div>
        <div id="a_simple_multiselect" class="container">
          <h3 class="s-title">
            <a href="#a_simple_multiselect" class="anchor" aria-hidden="true">#</a>
            A simple vue-multi-select
          </h3>
          <div class="docs-note">
            <p>values selected. Each value selected is push in this Array.</p>
            <p>When a value is unselect, he is splice fron the Array</p>
            <div class="columns">
              <div class="column col-4">
                <multi-select v-model="example1.values"
                  :options="example1.options"
                  :filters="example1.filters"
                  :btnLabel="example1.btnLabel"
                  search
                  :selectOptions="example1.selectOptions"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" @click="randomize(example1)">Reset Data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example1.isActive === 'code' }"
                  class="hand" @click="setActive(example1,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example1.isActive === 'values' }"
                  class="hand" @click="setActive(example1,'values')">Values Selected</a>
              </li>
            </ul>
            <div v-if="example1.isActive === 'code'">
              <pre class="code grey"
              data-lang="javascript"><code><span class="blue">&lt;template&gt;
  &lt;div&gt;
    &lt;multi-select</span>
      v-model=<span class="red">&quot;values&quot;</span>
      search
      :options=<span class="red">&quot;options&quot;</span>
      :filters=<span class="red">&quot;filters&quot;</span>
      :btnLabel=<span class="red">&quot;btnLabel&quot;</span>
      :selectOptions=<span class="red">&quot;data&quot;</span><span class="blue"> /&gt;
  &lt;/div&gt;
&lt;/template&gt;</span>

<span class="blue">&lt;script&gt;
import</span> multiSelect from <span class="red wrap">&#39;vue-multi-select&#39;</span>;
<span class="blue">import</span><span class="red wrap">
&#39;vue-multi-select/dist/lib/vue-multi-select.min.css&#39;</span>;

<span class="blue">export</span> <span class="blue">default</span> {
  data() {
    return {
      btnLabel: <span class="red">&#39;A simple vue multi select&#39;</span>,
      name: <span class="red">&#39;first group&#39;</span>,
      values: [],
      data: [{
        name: <span class="red">&#39;first group&#39;</span>,
        list: [
          { name: <span class="red">&#39;0&#39;</span> },
          { name: <span class="red">&#39;2&#39;</span> },
          { name: <span class="red">&#39;3&#39;</span> },
          { name: <span class="red">&#39;8&#39;</span> },
          { name: <span class="red">&#39;9&#39;</span> },
          { name: <span class="red">&#39;11&#39;</span> },
          { name: <span class="red">&#39;13&#39;</span> },
          { name: <span class="red">&#39;14&#39;</span> },
          { name: <span class="red">&#39;15&#39;</span> },
          { name: <span class="red">&#39;18&#39;</span> },
        ],
      }, {
        name: <span class="red">&#39;second group&#39;</span>,
        list: [
          { name: <span class="red">&#39;21&#39;</span> },
          { name: <span class="red">&#39;22&#39;</span> },
          { name: <span class="red">&#39;24&#39;</span> },
          { name: <span class="red">&#39;27&#39;</span> },
          { name: <span class="red">&#39;28&#39;</span> },
          { name: <span class="red">&#39;29&#39;</span> },
          { name: <span class="red">&#39;31&#39;</span> },
          { name: <span class="red">&#39;33&#39;</span> },
          { name: <span class="red">&#39;35&#39;</span> },
          { name: <span class="red">&#39;39&#39;</span> },
        ],
      }],
      filters: [{
        nameAll: <span class="red">&#39;select &lt;= 10&#39;</span>,
        nameNotAll: <span class="red">&#39;Deselect &lt;= 10&#39;</span>,
        func: (elem) =&gt; {
          <span class="blue">if</span> (elem.name &lt;= 10) {
            <span class="blue">return</span> <span class="blue">true</span>;
          }
          <span class="blue">return</span> <span class="blue">false</span>;
        },
      }, {
        nameAll: <span class="red">&#39;Select contains 2&#39;</span>,
        nameNotAll: <span class="red">&#39;Deselect contains 2&#39;</span>,
        func: (elem) =&gt; {
          <span class="wrap"><span class="blue">if</span>
          (elem.name.indexOf(<span class="red">&#39;2&#39;</span>) !== -1) {</span>
            <span class="blue">return</span> <span class="blue">true</span>;
          }
          <span class="blue">return</span> <span class="blue">false</span>;
        },
      }],
      options: {
        renderTemplate(elem) =&gt; `number : ${elem.name}`,
        multi: <span class="red">true</span>,
        groups: <span class="red">true</span>,
      },
    };
  },
  methods: {
  },
  components: {
    multiSelect,
  },
};
<span class="blue">&lt;/script&gt;</span>
</code></pre>

            </div>
            <div v-if="example1.isActive === 'values'">
              <pre class="code grey" data-lang="javascript"><code>
{{example1.values}}
              </code></pre>
            </div>
          </div>
        </div>
        <div id="single_select_no_groups" class="container">
          <h3 class="s-title">
            <a href="#single_select_no_groups" class="anchor" aria-hidden="true">#</a>
            A single Select with no groups
          </h3>
          <div class="docs-note">
            <div class="columns">
              <div class="column col-4">
                <multi-select
                  v-model="example2.values"
                  search
                  :options="example2.options"
                  :filters="example2.filters"
                  :btnLabel="example2.btnLabel"
                  :selectOptions="example2.selectOptions">
                </multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary"
                  @click="randomize(example2)">Reset Data
                </button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example2.isActive === 'code' }"
                  class="hand"
                  @click="setActive(example2,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example2.isActive === 'values' }"
                  class="hand"
                  @click="setActive(example2,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example2.isActive === 'code'">
              <pre class="code grey"
                data-lang="javascript">
                <code><span class="blue">&lt;template&gt;
  &lt;div&gt;
    &lt;multi-select</span>
      v-model=<span class="red">&quot;values&quot;</span>
      search
      :btnLabel=<span class="red">&quot;btnLabel&quot;</span>
      :selectOptions=<span class="red">&quot;data&quot;</span><span class="blue"> /&gt;
  &lt;/div&gt;
&lt;/template&gt;</span>

<span class="blue">&lt;script&gt;
import</span> multiSelect from <span class="red wrap">&#39;vue-multi-select&#39;</span>;
<span class="blue">import</span><span class="red wrap">
&#39;vue-multi-select/dist/lib/vue-multi-select.min.css&#39;</span>;

<span class="blue">export</span> <span class="blue">default</span> {
  data() {
    return {
      name: <span class="red">&#39;first group&#39;</span>,
      values: [],
      data: [
        { name: <span class="red">&#39;0&#39;</span> },
        { name: <span class="red">&#39;2&#39;</span> },
        { name: <span class="red">&#39;3&#39;</span> },
        { name: <span class="red">&#39;8&#39;</span> },
        { name: <span class="red">&#39;9&#39;</span> },
        { name: <span class="red">&#39;11&#39;</span> },
        { name: <span class="red">&#39;13&#39;</span> },
        { name: <span class="red">&#39;14&#39;</span> },
        { name: <span class="red">&#39;15&#39;</span> },
        { name: <span class="red">&#39;18&#39;</span> },
      ],
      btnLabel: <span class="red">&#39;A simple vue multi select&#39;</span>,
    };
  },
  methods: {
  },
  components: {
    multiSelect,
  },
};
<span class="blue">&lt;/script&gt;</span>
</code></pre>

            </div>
            <div v-if="example2.isActive === 'values'">
              <pre class="code grey" data-lang="javascript"><code>
{{example2.values}}
              </code></pre>
            </div>
          </div>
        </div>
        <div id="custom_multi_select" class="container">
          <h3 class="s-title">
            <a href="#custom_multi_select" class="anchor" aria-hidden="true">#</a>
            A custom multi select
          </h3>
          <div class="docs-note">
            <p>if the <code>labelSelected</code>
              and <code>cssLabel</code>
              are changed don't forget to update
              <code>option['selected']</code> in
              <code>cssLabel</code> with the labelSelected value</p>
              <p>It's possible to disable some value with attributes <code>disabled</code> to true
                (it's possible to change the key with <code>options.labelDisabled</code>)</p>
            <div class="columns">
              <div class="column col-4">
                <multi-select
                  v-model="example3.values"
                  search
                  :options="example3.options"
                  :reloadInit="example3.reloadInit"
                  :selectOptions="example3.selectOptions"
                  :btnLabel="example3.btnLabel"
                  @vueMultiSelectInited="example3.reloadInit = false"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" @click="reloadFunction3">Manual reload for init without updating data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example3.isActive === 'code' }"
                  class="hand"
                  @click="setActive(example3,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example3.isActive === 'values' }"
                  class="hand"
                  @click="setActive(example3,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example3.isActive === 'code'">
              <pre class="code grey"
                data-lang="javascript">
                <code><span class="blue">&lt;template&gt;
  &lt;div&gt;
    &lt;multi-select</span>
      v-model=<span class="red">&quot;values&quot;</span>
      search
      :options=<span class="red">&quot;options&quot;</span>
      :reloadInit=<span class="red">&quot;reloadInit&quot;</span>
      :selectOptions=<span class="red">&quot;data&quot;</span>
      :btnLabel=<span class="red">&quot;btnLabel&quot;</span>
      @vueMultiSelectInited=<span class="red">&quot;reloadInit = false&quot;</span><span class="blue"> /&gt; </span>
      <span class="blue">&lt;button</span>
        @click=<span class="red">&quot;reloadFunction&quot;</span><span class="blue">&gt;</span>
        Manual reload for init without updating data
      <span class="blue">&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</span>

<span class="blue">&lt;script&gt;
import</span> multiSelect from <span class="red wrap">&#39;vue-multi-select&#39;</span>;
<span class="blue">import</span><span class="red wrap">
&#39;vue-multi-select/dist/lib/vue-multi-select.min.css&#39;</span>;

<span class="blue">export</span> <span class="blue">default</span> {
  data() {
    return {
      btnLabel: <span class="red">&#39;A simple vue multi select&#39;</span>,
      name: <span class="red">&#39;first group&#39;</span>,
      values: [
        { label: <span class="red">&#39;2&#39;</span> },
        { label: <span class="red">&#39;3&#39;</span> },
      ],
      reloadInit: <span class="red">false</span>,
      data: [{
        title: <span class="red">&#39;part one&#39;</span>,
        elements: [
          { label: <span class="red">&#39;0&#39;</span>, disabled: <span class="red">true</span> },
          { label: <span class="red">&#39;2&#39;</span> },
          { label: <span class="red">&#39;3&#39;</span> },
          { label: <span class="red">&#39;8&#39;</span> },
          { label: <span class="red">&#39;9&#39;</span> },
          { label: <span class="red">&#39;11&#39;</span> },
          { label: <span class="red">&#39;13&#39;</span> },
          { label: <span class="red">&#39;14&#39;</span> },
          { label: <span class="red">&#39;15&#39;</span> },
          { label: <span class="red">&#39;18&#39;</span> },
        ],
      }, {
        title: <span class="red">&#39;part two&#39;</span>,
        elements: [
          { label: <span class="red">&#39;23&#39;</span> },
          { label: <span class="red">&#39;25&#39;</span> },
          { label: <span class="red">&#39;31&#39;</span> },
          { label: <span class="red">&#39;42&#39;</span> },
          { label: <span class="red">&#39;56&#39;</span> },
          { label: <span class="red">&#39;76&#39;</span> },
          { label: <span class="red">&#39;82&#39;</span> },
          { label: <span class="red">&#39;42&#39;</span> },
          { label: <span class="red">&#39;13&#39;</span> },
          { label: <span class="red">&#39;21&#39;</span> },
        ],
      }],
      options: {
        multi: <span class="red">true</span>,
        groups: <span class="red">true</span>,
        labelName: <span class="red">&#39;label&#39;</span>,
        labelList: <span class="red">&#39;elements&#39;</span>,
        groupName: <span class="red">&#39;title&#39;</span>,
        <span class="wrap">cssSelected: option =&gt;
          (<span class="red">option.selected</span> ?
          { <span class="red">&#39;background-color&#39;</span>:
          <span class="red">&#39;#5764c6&#39;</span> } :
          <span class="red">&#39;&#39;</span></span>),
      },
    };
  },
  methods: {
    reloadFunction() {
      <span class="blue">this</span>.values = [
        { label: <span class="red">&#39;2&#39;</span> },
        { label: <span class="red">&#39;3&#39;</span> },
      ];
      <span class="blue">this</span>.reloadInit = <span class="red">true</span>;
    },
  },
  components: {
    multiSelect,
  },
};
<span class="blue">&lt;/script&gt;</span>
              </code></pre>
            </div>
            <div v-if="example3.isActive === 'values'">
              <pre class="code grey" data-lang="javascript"><code>
{{example3.values}}
              </code></pre>
            </div>
          </div>
        </div>
        <div id="a_multiselect_array" class="container">
          <h3 class="s-title">
            <a href="#a_multiselect_array" class="anchor" aria-hidden="true">#</a>
            A multi select with array
          </h3>
          <div class="docs-note">
            <p>list of data can be an array</p>
            <div class="columns">
              <div class="column col-4">
                <multi-select v-model="example4.values"
                  search
                  :options="example4.options"
                  :reloadInit="example4.reloadInit"
                  :selectOptions="example4.selectOptions"
                  :btnLabel="example4.btnLabel"
                  @vueMultiSelectInited="example4.reloadInit = false"></multi-select>
              </div>
              <div class="column col-4 col-ml-auto">
                <button class="btn btn-primary" @click="reloadFunction4">Manual relaod for init without updating data</button>
              </div>
            </div>
            <ul class="tab tab-block">
              <li class="tab-item">
                <a :class="{ active: example4.isActive === 'code' }"
                  class="hand"
                  @click="setActive(example4,'code')">Code</a>
              </li>
              <li class="tab-item">
                <a :class="{ active: example4.isActive === 'values' }"
                  class="hand"
                  @click="setActive(example4,'values')" >Values Selected</a>
              </li>
            </ul>
            <div v-if="example4.isActive === 'code'">
              <pre class="code grey"
                data-lang="javascript">
                <code><span class="blue">&lt;template&gt;
  &lt;div&gt;
    &lt;multi-select</span>
    v-model=<span class="red">&quot;values&quot;</span>
    search
    :options=<span class="red">&quot;options&quot;</span>
    :reloadInit=<span class="red">&quot;reloadInit&quot;</span>
    :selectOptions=<span class="red">&quot;data&quot;</span>
    :btnLabel=<span class="red">&quot;btnLabel&quot;</span>
    @vueMultiSelectInited=<span class="red">&quot;reloadInit = false&quot;</span><span class="blue"> /&gt; </span>
    <span class="blue">&lt;button</span>
      @click=<span class="red">&quot;reloadFunction&quot;</span><span class="blue">&gt;</span>
      Manual reload for init without updating data
    <span class="blue">&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</span>

<span class="blue">&lt;script&gt;
import</span> multiSelect from <span class="red wrap">&#39;vue-multi-select&#39;</span>;
<span class="blue">import</span><span class="red wrap">
&#39;vue-multi-select/dist/lib/vue-multi-select.min.css&#39;</span>;

<span class="blue">export</span> <span class="blue">default</span> {
  data() {
    return {
      btnLabel: <span class="red">&#39;A simple vue multi select&#39;</span>,
      name: <span class="red">&#39;first group&#39;</span>,
      values: [
        <span class="red">&#39;0&#39;</span>,
        <span class="red">&#39;2&#39;</span>,
      ],
      reloadInit: <span class="red">false</span>,
      data: [{
        title: <span class="red">&#39;part one&#39;</span>,
        elements: [
          <span class="red">&#39;0&#39;</span>,
          <span class="red">&#39;2&#39;</span>,
          <span class="red">&#39;3&#39;</span>,
          <span class="red">&#39;8&#39;</span>,
          <span class="red">&#39;9&#39;</span>,
          <span class="red">&#39;11&#39;</span>,
          <span class="red">&#39;13&#39;</span>,
          <span class="red">&#39;14&#39;</span>,
          <span class="red">&#39;15&#39;</span>,
          <span class="red">&#39;18&#39;</span>,
        ],
      }, {
        title: <span class="red">&#39;part two&#39;</span>,
        elements: [
          <span class="red">&#39;23&#39;</span>,
          <span class="red">&#39;25&#39;</span>,
          <span class="red">&#39;31&#39;</span>,
          <span class="red">&#39;42&#39;</span>,
          <span class="red">&#39;56&#39;</span>,
          <span class="red">&#39;76&#39;</span>,
          <span class="red">&#39;82&#39;</span>,
          <span class="red">&#39;42&#39;</span>,
          <span class="red">&#39;13&#39;</span>,
          <span class="red">&#39;21&#39;</span>,
        ],
      }],
      options: {
        multi: <span class="red">true</span>,
        groups: <span class="red">true</span>,
        labelList: <span class="red">&#39;elements&#39;</span>,
        groupName: <span class="red">&#39;title&#39;</span>,
        <span class="wrap">cssSelected: option =&gt;
          (<span class="red">option.selected</span> ?
          { <span class="red">&#39;background-color&#39;</span>:
          <span class="red">&#39;#5764c6&#39;</span> } :
          <span class="red">&#39;&#39;</span></span>),
      },
    };
  },
  methods: {
    reloadFunction() {
      <span class="blue">this</span>.values = [
        <span class="red">&#39;2&#39;</span>,
        <span class="red">&#39;3&#39;</span>,
      ];
      <span class="blue">this</span>.reloadInit = <span class="red">true</span>;
    },
  },
  components: {
    multiSelect,
  },
};
<span class="blue">&lt;/script&gt;</span>
              </code></pre>
            </div>
            <div v-if="example4.isActive === 'values'">
              <pre class="code grey" data-lang="javascript"><code>
{{example4.values}}
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
