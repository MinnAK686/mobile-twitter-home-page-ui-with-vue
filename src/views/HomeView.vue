<script setup>
import Tweet from "../components/Tweet.vue";
import tweets from "../tweets";
</script>

<template>
    <div>
        <Tweet v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
    </div>
</template>
