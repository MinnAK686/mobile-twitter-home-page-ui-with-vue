import { defineStore } from "pinia";
import { ref } from "vue";

export const useTweetsStore = defineStore("tweets", () => {
    let tweets = ref([]);
    let error = ref(null);

    return { tweets, error };
});
