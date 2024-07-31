import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver, VueUseComponentsResolver} from 'unplugin-vue-components/resolvers';
import {fileURLToPath, URL} from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia',
                {
                    axios: [
                        ['default', 'axios'], // import { default as axios } from 'axios'
                    ],
                },
            ],
            resolvers: [ElementPlusResolver()],
            dts: 'src/auto-imports.d.ts', // 自动生成的类型声明文件路径
            dirs: ['src/stores'], // 自动导入 stores 目录中的所有 store
            vueTemplate: true, // 允许在模板中使用自动导入
        }),
        Components({
            dirs: ['src/components', 'src/views'], // 添加你的组件和视图目录
            extensions: ['vue'],
            deep: true,
            resolvers: [
                ElementPlusResolver(),
                VueUseComponentsResolver(),
            ],
            dts: 'src/components.d.ts', // 自动生成的类型声明文件路径
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入scss文件
                additionalData: `
          @use "@/styles/var.scss" as *;
        `,
            }
        }
    }
});
