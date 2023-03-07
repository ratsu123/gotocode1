<template>
  <div class="accordion" id="accordionExample">
    <div
      class="accordion-item bg-white border border-gray-200"
      v-for="a in $static.allAcordion.edges"
      :key="a.node.id"
    >
      <h2 class="accordion-header mb-0" :id="'heading' + a.node.id">
        <button
          class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + a.node.id"
          aria-expanded="false"
          :aria-controls="'collapse' + a.node.id"
        >
          {{ a.node.head }}
        </button>
      </h2>
      <div
        :id="'collapse' + a.node.id"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + a.node.id"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          {{ a.node.body }}
        </div>
      </div>
    </div>
  </div>
</template>
<static-query>
query {
  allAcordion(order: ASC){
    edges{
      node{
        id
        head
        body
      }
    }
  }
}

</static-query>

<script>
export default {
  name: "my-accordion",
};
</script>

<style></style>
