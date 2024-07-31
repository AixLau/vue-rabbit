import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                // 你可以在这里添加更多需要自动引入的库
            ],
            resolvers: [ElementPlusResolver()],
            dts: 'src/auto-imports.d.ts', // 自动生成的类型声明文件路径
        }),
        Components({
            resolvers: [
                ElementPlusResolver()
            ],
            dts: 'src/components.d.ts', // 自动生成的类型声明文件路径
        }),
    ],
})
