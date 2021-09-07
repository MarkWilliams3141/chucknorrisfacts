//  taken from: https://next.vuex.vuejs.org/guide/typescript-support.html#typescript-support
import { Store } from '@/store'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
    }
}
