---
layout: docs
title: Example Sentence
lang: en-US
---

# {{ $frontmatter.title }}

<script setup>
import Sentence from '/components/Sentence.vue'
const items = [
    { id: 1, url:'/#/', text: 'My journey with Vue', dsl: 'se ...', installation:' installation  dasdad saf f dfs f sd fd fds/n \n sd adasd ' },
    { id: 2, url:'?', text: 'My journey with Vue', dsl: 'se ...', installation:'' },
    { id: 3, url:'?/', text: 'My journey with Vue', dsl: 'se ...', installation:'' },
    
]
</script>


<Sentence
v-for="sentence in items"
:key="sentence.id"
:url="sentence.url"
:text="sentence.text"
:dsl="sentence.dsl"
:installation="sentence.installation"
/>
