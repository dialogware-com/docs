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
//import Compo from '/components/Compo.vue'
//import Playground from '/components/Playground.vue'
//import Forms from '/components/Forms.vue'
// https://vuejs.org/guide/introduction.html#api-styles
// https://vuejs.org/guide/essentials/forms.html
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}

const message = ref("")
const email = ref("")
const text = ref("")
const name = ref("")
function send() {

    //message.value=""
    //email.value=""
    //text.value=""
    //name.value=""
}
</script>

<div>


<label>Name:
    <input v-model="name" placeholder="name">
</label>

<label>E-mail:
    <input v-model="email" placeholder="@" />
</label>

<label>
    <textarea v-model="message" placeholder="message" />
</label>

</div>


<button @click="send">Send Message</button>


<button submit="true" class="btn btn-primary">Submit</button>


<button @click="increment">Count iss: {{ count }}</button>

<div>
  <button @click="count++">Count isaaa: {{ count }}</button>
</div>


<style scoped>
button {
  font-weight: bold;
  color: gray;
  background-color: black;
}
</style>

<forms />
<playground />
<compo />



---

+ [Home](http://www.dialogware.com/)
+ [Documentation](http://docs.dialogware.com/)
