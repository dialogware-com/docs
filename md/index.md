---
layout: docs
title: DIALOGWARE is a text2software platform, build any app MVP in minutes
lang: en-US
---

# [DIALOGWARE](http://www.dialogware.com/)

Build any software in a few minutes with that simple steps:

+ catch the Idea
+ write description
+ deploy with a click
+ use your app online

We provide a platform [#text2software](https://www.text2software.com/)
to prepare your first MVP application in a minutes.

[![DIALOGWARE](http://logo.dialogware.com/dialogware-2lines.png)](http://www.dialogware.com/)

After you answer on our questions with few sentences of your expectation, we will deploy your first MVP version of
web/mobile application.
It's much cheaper and easy way than no-code or low-code solutions.

With such automatization, you can save more time and money than with another solutions such #lowcode or #nocode.
We "twitterize" the software development and will build any software just with the (con)text (specification,
documentation).

Please find more details in [Documentation](http://docs.dialogware.com/)

We are on [Pioneer](https://pioneer.app/join/dialogware.com)



<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/5669657?s=96&v=4',
    name: 'Tom Sapletta',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  },
 {
    avatar: 'https://logo.dialogware.com/dialogware-logo-pivot.png',
    name: 'Join us!',
    title: 'Software Developer',
    links: [
       { icon: 'linkedin', link: 'https://www.linkedin.com/showcase/dialogware/' }
    ]
  }
]

const partners = [
  {
    avatar: '/assets/ionos.png',
    name: 'Ionos',
    title: 'Service provider',
    links: [
      { icon: 'linkedin', link: 'https://www.ionos.de' }
    ]
  },
 {
    avatar: 'https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png',
    name: 'softreck.com',
    title: 'DevOps',
    links: [
       { icon: 'linkedin', link: 'https://softreck.pl' }
    ]
  }
]

import { ref } from 'vue'

const message = ref("")
const email = ref("")
const text = ref("")
const name = ref("")

const warning_message = ref(false)
const error_message = ref(false)
const info_message = ref(false)
const email_form = ref(true)

function send() {
    message.value="Thank You " + data.name + " for a registration on DIALOGWARE NEWSLETTER."
    error_message.value = false
    warning_message.value = false
    if ( 
        (name.value.length < 2) || 
        (email.value.length < 4) || 
        (message.value.length < 4) 
    ){
        warning_message.value = true
    } else {
        warning_message.value = false
    
        var API_URL = `https://email.dialogware.com/?type=NEWSLETTER&name=${name.value}&message=${message.value}&email=${email.value}`
        fetch(
            API_URL,
            {
                method: 'get',
            }
        ).then(response => response.json() )
        .then(data => {
            email.value = data.email
            text.value = data.text
            name.value = data.name

            if(data.found > 5){
                error_message.value = true
            } else {
                error_message.value = false
                warning_message.value = false
                email_form.value = false
                info_message.value = true
            }
        });
    }
}
</script>

## NEWSLETTER

Leave your email to be the first DIALOGWARE-ian :)

<div class="newsletter">

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

</div>
</form>    

<div v-if="email_form">
<fieldset class="button_send">
<p>
<button @click="send">get updates about project</button>
</p>
</fieldset>
</div>


<div class="tip custom-block info_message" v-if="info_message">
    <p class="custom-block-title">Info</p>
    <p>We got your Email! What can be the next step? Join us on <a href="https://www.linkedin.com/showcase/dialogware/">linkedin</a> </p>
</div>

<div class="warning custom-block warning_message" v-if="warning_message">
    <p class="custom-block-title">Error</p>
    <p>Please fill the fields with min. 6 characters</p>
</div>

<div class="warning custom-block error_message" v-if="error_message">
    <p class="custom-block-title">Error</p>
    <p>Sending message is not possible, contact me please on <a href="https://www.linkedin.com/in/tom-sapletta-com">linkedin</a> </p>
</div>
</div>


<style scoped>

.newsletter {
  align-items: center;
  justify-content: center;
}
.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}

.email_form input,
.email_form textarea,
.button_send,
button,
.tip,
.warning
{
    width: 300px;
}
fieldset {
  border: 0px solid white;
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

## Our Story

We started in 2019 as Software House with an idea to build developer tools.
During the Years we have created modularized tools for frontend and backend development.
Today we want to bring the software development to the next level.

Our goal is building software in minutes with humanless software development systems.

## Our Team

The development of DIALOGWARE is guided by an international
team, some of whom have chosen to be featured below.

<VPTeamPage>
  <VPTeamPageSection>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers" />
    </template>
    </VPTeamPageSection>
</VPTeamPage>

## Our Partners

Organization they support our project

<VPTeamPage>
  <VPTeamPageSection>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## Our Hashtags

+ text2software
+ text2app
+ text2srs
+ text2api
+ domain-specific language

