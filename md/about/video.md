---
layout: doc
title: Video presentation about DIALOGWARE on linkedin (polish version)
lang: en-US
tags:
- configuration
- theme
- indexing
---

# {{ $frontmatter.title }}


<script setup>
import ComponentA from '/components/A.vue'
import ComponentB from '/components/B.vue'

const components= [ ComponentA, ComponentB ]
const tabs= ['ComponentA', 'ComponentB']
const component= ComponentA
console.log(components)
</script>

<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="component = tab">
      {{tab}}
    </button>
    <component :is="component" />
  </div>
</template>




https://www.linkedin.com/video/live/urn:li:ugcPost:6988910965366882304
[on linkedin](https://www.linkedin.com/video/live/urn:li:ugcPost:6988910965366882304/)




