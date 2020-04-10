<template>
  <b-card
    :title="item.timestamp"
    :img-src="item.thumbnail"
    img-alt="Image"
    img-top
    tag="article"
    class="overflow-hidden"
  >
    <b-card-text>
      {{item.Message}}
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: [
    'item',
  ],
};
</script>
<style>
.card {
  margin: 5px 5px;
}
</style>