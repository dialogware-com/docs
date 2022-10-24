---
layout: doc
title: Contact Form
lang: en-US
tags:

- configuration
- theme
- indexing

---

# {{ $frontmatter.title }}


<script setup>

// https://vuejs.org/guide/introduction.html#api-styles
// https://vuejs.org/guide/essentials/forms.html
import { ref } from 'vue'

const message = ref("")
const email = ref("")
const text = ref("")
const name = ref("")

function send() {
var API_URL = `https://email.dialogware.com/?name=${name.value}&message=${message.value}&email=${email.value}`
//const API_URL = `https://email.dialogware.com/`

fetch(
	API_URL,
	{
		method: 'get',
	}
).then(response => response.json() )
.then(data => {
	console.log(data);
    message.value = data.message
    email.value = data.email
    text.value = data.text
    name.value = data.name
});

}
</script>

<form method="get" action="">

<div>
<fieldset>
<label>
    <div>Name:</div>
    <input v-model="name" placeholder="name">
</label>
</fieldset>


<fieldset>
<label>
    <div>E-mail:</div>
    <input v-model="email" placeholder="@" />
</label>
</fieldset>

<fieldset>   
<label>
    <div>Message:</div>
    <textarea v-model="message" placeholder="message" />
</label>
</fieldset>

</div>

</form>    


<button @click="send">Send Message</button>

<style scoped>
button {
  font-weight: bold;
  color: gray;
  background-color: black;
  padding: 5px;
  border: 1px solid white;
}

input, textarea {
  color: white;
  background-color: black;
  padding: 1px;
  border: 1px solid white;
}

label div{
    white-space: pre-line;
  color: gray;
  padding: 0px;
}
</style>

---

+ [Home](http://www.dialogware.com/)
+ [Documentation](http://docs.dialogware.com/)
