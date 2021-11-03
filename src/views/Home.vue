<template>
  <div class="home">
    <p>store name: {{ storeName }}</p>
    <p>route name: {{ routeName }}</p>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { useStore } from '../store';
import { useRoute } from '../router/useRoute';
import { useRouter } from '../router/useRouter';

export default defineComponent({
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const storeName = computed(() => store.state.name);

        const routeName = route.name;

        return {
            storeName,
            routeName
        }
    },
})
</script>
