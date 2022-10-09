<template>
  <div class="page-header">
    <div class="container-content">
      <h1>{{ title }}</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ title }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
