<template>
  <html>
    <body>
      <h1>Vue Multi Select</h1>
      <div class="columns">
      <button class="btn">default button</button>
      <button class="btn btn-primary">primary button</button>
      <button class="btn btn-link">link button</button>
      <multi-select :select-options="data" v-model="tuturu"></multi-select>
      {{tuturu}}
    </div>
    </body>
  </html>
</template>

<script src="./doc.js"></script>
<style scoped src="./doc.css"></style>
