<template>
  <div id="app">
    <doc></doc>
  </div>
</template>

<script>
import multiSelect from './components/vueMultiSelect/vue-multi-select.vue';
import doc from './components/doc/doc.vue';

export default {
  name: 'app',
  components: {
    multiSelect,
    doc,
  },
  data() {
    return {
      tuturu: [],
      options: {},
      data: [{
        name: 'name',
        _id: 41,
        list: [
          { name: 'test1' },
          { name: 'test2' },
          { name: 'test3' },
          { name: 'test31' },
          { name: 'test32' },
          { name: 'test33' },
          { name: 'test34' },
          { name: 'test35' },
        ],
      }, {
        name: 'coucou',
        _id: 41,
        list: [
          { name: 'test4' },
          { name: 'test5' },
          { name: 'test6' },
          { name: 'test61' },
          { name: 'test62' },
          { name: 'test63' },
          { name: 'test64' },
          { name: 'test65' },
        ],
      }],
    };
  },
};
</script>
