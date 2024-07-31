import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import {fileURLToPath, URL} from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                {
                    axios: [
                        ['default', 'axios'], // import { default as axios } from 'axios'
                    ],
                },
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
