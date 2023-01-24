<script setup>
const props = defineProps(["tweet"]);

let tweet = props.tweet;
</script>

<template>
    <article class="border-b border-gray-600">
        <router-link to="#" class="flex p-3">
            <div class="w-16 mr-3">
                <img
                    :src="tweet.author.profile_img_url"
                    class="w-full object-cover rounded-full"
                    alt="User"
                />
            </div>
            <div class="flex-1">
                <div class="tweet-header">
                    <span class="text-sm font-bold mr-1">{{
                        tweet.author.display_name
                    }}</span>
                    <span class="text-gray-500">{{
                        tweet.author.username
                    }}</span>
                </div>
                <div class="tweet-body">
                    <p class="text-sm text-gray-200" v-html="tweet.body"></p>
                </div>
                <div>
                    <figure
                        v-if="tweet.image"
                        class="rounded-xl border border-gray-600 overflow-hidden mt-3"
                    >
                        <img
                            :src="tweet.image.url"
                            :alt="tweet.image.alt"
                            class="w-full h-44 object-cover"
                        />
                    </figure>
                </div>
                <div class="tweet-footer"></div>
            </div>
        </router-link>
    </article>
</template>

<style></style>
