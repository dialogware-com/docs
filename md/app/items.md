---
layout: docs
title: Examples
lang: en-US
---

# {{ $frontmatter.title }}

Get early access to&nbsp;DIALOGWARE

Build your strong personal vocabulary. No&nbsp;lessons needed.
<a href=# class="button-3 w-button">Join waitlist</a>

<script setup>
import Sentence from '/components/Sentence.vue'
const items = [
    { id: 1, title: 'My journey with Vue', description: 'se ...' },
    { id: 2, title: 'Blogging with Vue', description: 'My with Vue ...' },
    { id: 3, title: 'Why Vue is so fun', description: 'My journey with Vue ...' }
]
</script>


<Sentence
v-for="post in items"
:key="post.id"
:title="post.title"
:description="post.description"
/>
