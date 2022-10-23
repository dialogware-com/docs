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

+ Name
+ Email


<script setup>
import ComponentA from '/components/A.vue'
import ComponentB from '/components/B.vue'

const comp = ComponentA

</script>

<template>
  <div>
    <button @click='comp = ComponentA'> Component A </button>
    <button @click='comp = ComponentB'> Component B </button>
    <component :is='comp' />
  </div>
</template>



---

+ [Home](http://www.dialogware.com/)
+ [Documentation](http://docs.dialogware.com/)
