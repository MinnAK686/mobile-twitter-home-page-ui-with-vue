<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

let routes = ref([]);
let router = useRouter();

onBeforeMount(() => {
    routes.value = router.options.routes.filter((r) => r.mainMenu);
});
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header class="border-b border-gray-600">
            <div class="p-4">
                <div class="flex">
                    <router-link to="/profile" class="text-lg">
                        <i class="fa-solid fa-user"></i>
                    </router-link>
                    <h1 class="text-start text-2xl font-bold ml-6 capitalize">
                        {{ $route.name }}
                    </h1>
                </div>
            </div>
        </header>
        <main class="flex-1 overflow-scroll">
            <router-view></router-view>
        </main>
        <footer class="p-4">
            <div class="flex items-center justify-between">
                <router-link
                    v-for="(route, i) in routes"
                    :key="i"
                    :to="route.path"
                    class="text-lg p-3"
                >
                    <i :class="route.iconClass"></i>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<style scoped></style>
