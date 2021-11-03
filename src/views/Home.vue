<template>
  <div class="home">
    <h1>{{ name }}</h1>
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

        const name = computed(() => store.state.name);

        console.log(route.name)

        return {
            name
        }
    },
})
</script>
