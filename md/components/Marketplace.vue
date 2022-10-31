<!-- Marketplace.vue -->
<script>
export default {
  props: ['title']
}
</script>

<template>
  <h4>{{ title }}</h4>
</template>


<style>
.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}
/*
.email_form input,
.email_form textarea,
.button_send,
button,
.tip,
.warning {
  width: 300px;
}
*/
.marketplace fieldset {
  border: 0px solid white;
}

.marketplace button {
  font-weight: bold;
  color: gray;
  background-color: black;
  padding: 5px;
  border: 1px solid white;
}

.marketplace input,
.marketplace textarea {
  color: white;
  background-color: black;
  padding: 1px;
  border: 1px solid white;
}

.marketplace label div {
  white-space: pre-line;
  color: gray;
  padding: 0px;
}

.marketplace ul {
  list-style-type: none;
}
</style>
