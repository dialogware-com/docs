<!-- Marketplace.vue -->
<script>
export default {
  props: ['url','text','dsl','installation']
}
</script>

<template>
  <div class="sentence">
    <a class="url" :href="url">
      <p class="text">{{ text }}</p>
      <p class="dsl">{{ dsl }}</p>
      <pre class="installation">{{ installation }}</pre>
    </a>
  </div>
</template>


<style>
div.sentence:hover {
  background-color: #eeeeee;
  border: solid #fafafa 1px;
}
div.sentence {
  margin-top: 9px;
  margin-bottom: 9px;
  padding-left: 15px;
  background-color: #fafafa;
  border: solid #eeeeee 1px;
}

.sentence .text{
}
.sentence .dsl{
  color: gray;
}
.sentence .installation {
  white-space: pre-line;
  font-family: Monaco, courier, monospace, courier;
  padding: 0px;
  color: black;
}

.dark div.sentence:hover {
  background-color: #444444;
  border: solid #333333 1px;
}
.dark div.sentence {
  background-color: #333333;
  border: solid #444444 1px;
}
.dark .sentence .installation {
  color: white;
}
</style>
