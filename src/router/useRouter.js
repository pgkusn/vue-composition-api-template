import { getCurrentInstance } from "@vue/composition-api";

export function useRouter() {
    const vm = getCurrentInstance();
    return vm.proxy.$router
}