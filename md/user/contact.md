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

const info_message = ref("false")
const email_form = ref("true")

function send() {
    email_form.value = false
    info_message.value = true

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
        info_message = true
    });

}
</script>

<form method="get" class="email_form" id="email_form" v-if="email_form">

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

<div v-if="email_form">
<fieldset >   
<button @click="send">Send Message</button>
</fieldset>
</div>


<div class="tip custom-block info_message" id="info_message" v-if="info_message">
<p class="custom-block-title">Info</p>
<p>We got your Email!</p>
</div>

<style scoped>
.info_message {
}
.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}

.email_form input,
.email_form textarea,
button,
.tip {
    width: 300px;
}

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

