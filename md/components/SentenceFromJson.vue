<!-- SentenceFromJson.vue -->
<script>

//import items from "/data/marketplace.json";
import items from '/data/marketplace.json' assert {type: 'json'};

const sentences = items
console.log(sentences);

export default {
  props: ['url', 'text', 'dsl', 'installation'],
  data() {
    return {
      sentences: items
    };
  }
}
</script>

<template>
  <div class="sentence" v-for="sentence in sentences">

    <a class="url" href="{{ sentence.url }}">
      <h2 class="text">Sentence no. {{ sentence.id }}</h2>
    </a>
    <dev class="editor">
      <textarea>{{ sentence.text }}</textarea>
    </dev>
    <h3>Sentence Processed:</h3>
    <div class="processed">
      <p class="input">
        <span class="title">INPUT: </span>
        <span class="part">{{ sentence.input }}</span>
      </p>
      <p class="process">
        <span class="title">PROCESS: </span>
        <span class="part">{{ sentence.process }}</span>
      </p>
      <p class="output">
        <span class="title">OUTPUT: </span>
        <span class="part">{{ sentence.output }}</span>
      </p>
    </div>
    <h3>Text2DSL:</h3>
    <span class="description">Sentence Converted to DSL:</span>
    <p class="dsl">
      <span class="part">{{ sentence.dsl }}</span>
    </p>

    <h3>Deployment:</h3>
    <span class="description">Start the script local and remote over shell:</span>

    <dev class="installation">
      <textarea>{{ sentence.installation }}</textarea>
    </dev>

  </div>
</template>


<style>

.sentence h2,
.sentence h3 {
  margin: 0;
  padding: 0;
}

.sentence h3 {
  color: gray;
}
.processed p {
  line-height: normal;
  margin: 2px 0 2px 0;
}
.processed {
  margin-bottom: 15px;
}
div.sentence:hover {
  border: solid 3px;
}

div.sentence {
  margin-top: 9px;
  margin-bottom: 9px;
  padding-left: 5px;
  padding-right: 5px;
  border: solid 3px;
}

.sentence .text {
}
.sentence .description {
  font-size: small;
}
.sentence .part {
  font-size: small;
}

.sentence .dsl .title,
.sentence .input .title,
.sentence .output .title,
.sentence .process .title {
  color: gray;
  font-size: small;
}

.sentence .dsl .part {
  font-family: monospace, courier;
  font-weight: bold;
  font-size: medium;

}

.sentence .installation {
}

.sentence .installation textarea {
  font-family: monospace, courier;
  width: 100%;
  height: 170px;

  font-size: 10px;
  line-height: normal;
  margin-top: 15px;

}

.sentence .editor textarea {
  font-family: monospace, courier;
  width: 100%;
  height: 50px;
  font-size: small;
  line-height: normal;
}


/** WHITE **/
.sentence .installation {
  color: black;
}
div.sentence:hover {
  border-color: #eeeeee;
}
div.sentence {
  border-color: #fafafa;
}
.sentence .dsl .part {
  color: darkviolet;
}

/** DARK **/
.dark .sentence .dsl .part {
  color: violet;

}

.dark div.sentence:hover {
  border-color: #333333;
}

.dark div.sentence {
  border-color: #444444;
}

.dark .sentence .installation {
  color: white;
}

/** FORM **/
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
</style>
