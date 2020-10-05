<template>
    <section>

    </section>
</template>
<script>
export default {
    asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/rooms/" + context.params.id, {
        version:  "draft",
      })
      .then((res) => {
        return {
          title: res.data.story.content.title
        };
      });
  },
}
</script>
<style lang="scss" scoped>
section {
  height: 100vh;
}
</style>
