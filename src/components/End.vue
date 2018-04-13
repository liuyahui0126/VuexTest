<template>
    <div>
        <edit-tools></edit-tools>
        <show-tools></show-tools>
    </div>
</template>

<script>
import editTools from "./editTools.vue";
import showTools from "./showTools.vue";
export default {
  components: {
    "edit-tools": editTools,
    "show-tools": showTools
  }
};
</script>

<style>

</style>


