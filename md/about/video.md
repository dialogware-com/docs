---
layout: doc
title: Video presentation about DIALOGWARE (polish version)
lang: en-US
prev: 'index | Markdown'
tags:
- configuration
- theme
- indexing
---


<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="component = tab">
      {{tab}}
    </button>
    <component :is="component" />
  </div>
</template>

<script setup>
import ComponentA from '/components/A.vue'
import ComponentB from '/components/B.vue'

const components= [ ComponentA, ComponentB ]
const tabs= ['ComponentA', 'ComponentB']
const component= ComponentA
console.log(components)
</script>

https://www.linkedin.com/video/live/urn:li:ugcPost:6988910965366882304
[on linkedin](https://www.linkedin.com/video/live/urn:li:ugcPost:6988910965366882304/)




