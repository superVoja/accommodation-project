<template>
    <div>
        <h1>{{title}}</h1>
    </div>
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