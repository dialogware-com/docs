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
    <div id="sentence{{sentence.id}}">

      <a class="url" :href="sentence.url">
        <p class="biglabel">Sentence no. {{ sentence.id }}</p>
      </a>
      <p class="label">Editing:</p>
      <div class="edit">
        <textarea>{{ sentence.text }}</textarea>
      </div>

      <p class="label">Processing:</p>
      <div class="processed">
        <p class="get_input">
          <span class="title">INPUT: </span>
          <span class="part">{{ sentence.input }}</span>
        </p>
        <p class="get_process">
          <span class="title">PROCESS: </span>
          <span class="part">{{ sentence.process }}</span>
        </p>
        <p class="get_output">
          <span class="title">OUTPUT: </span>
          <span class="part">{{ sentence.output }}</span>
        </p>
      </div>

      <p class="label">Translation:</p>
      <span class="description">Sentence is translated from TEXT to DSL:</span>
      <p class="dsl">
        <span class="part">{{ sentence.dsl }}</span>
      </p>

      <p class="label">Deployment:</p>
      <span class="description">Start the script local and remote over shell:</span>

      <div class="installation">
        <textarea>{{ sentence.installation }}</textarea>
      </div>

    </div>
  </div>
</template>


<style scoped>

.sentence .biglabel,
.sentence .label {
  margin: 0;
  padding: 0;
  font-weight: bolder;
}

.sentence .biglabel {
  font-size: 15pt;
}

.processed p {
  line-height: normal;
  margin: 2px 0 2px 0;
}

.processed {
  margin-bottom: 15px;
}

div.sentence {
  margin-top: 25px;
  margin-bottom: 25px;
  padding-left: 5px;
  padding-right: 5px;
  border: solid 3px;
}

div.sentence:hover {
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
.sentence .get_input .title,
.sentence .get_output .title,
.sentence .get_process .title {
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

.sentence .edit textarea {
  font-family: monospace, courier;
  width: 100%;
  height: 70px;
  font-size: small;
  line-height: normal;
}


/** WHITE **/
.sentence .label {
  color: gray;
}

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
.sentence .label {
  color: #eeeeee;
}

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
