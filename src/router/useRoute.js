import { getCurrentInstance } from "@vue/composition-api";

export function useRoute() {
    const vm = getCurrentInstance();
    return vm.proxy.$route
}