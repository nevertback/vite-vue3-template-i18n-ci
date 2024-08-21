# vue-base-template  

技术栈：
| 库                                                                  | 版本     | 说明       |
| ------------------------------------------------------------------- | -------- | ---------- |
| [Vite](https://cn.vitejs.dev/)                                      | ^5.3.1   | vite       |
| [vue](https://cn.vuejs.org/)                                        | ^3.4.29  | vue3       |
| [pinia](https://pinia.vuejs.org/zh/)                                | ^2.1.7   | pinia      |
| [vue-router](https://router.vuejs.org/zh/guide/)                    | ^4.3.3   | 路由       |
| sass                                                                | -        | 样式       |
| [tailwindcss](https://tailwindcss.com/)                             | ^3.4.7   | css框架    |
| [axios](https://axios-http.com/)                                    | ^2.1.7   | api请求库  |
| [voerkai18n](https://zhangfisher.github.io/voerka-i18n/#/zh/guide/) | ^2.1.9   | 多语言翻译 |
| [ant-design-vue](https://www.antdv.com/components/overview-cn)      | 4.x      | ui组件     |
| [@vueuse/core](https://vueuse.org/)                                 | ^10.11.0 | vueuse     |
| [lodash-es](https://lodash.com/)                                    | ^4.17.21 | lodash     |
## 推荐 IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 开始项目

```sh
pnpm install
```

### 开发

```sh
pnpm dev
```

### 打包

```sh
pnpm build
```

### 格式化

```sh
pnpm format
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 多语言翻译
多语言为自动提取，手动翻译，自动合成模式  
1. 提取多语言
```
pnpm lang:extract
```
会自动提取```{{t('中文')}}```中的内容  

2. 翻译多语言(可选步骤)
```
pnpm lang:translate
```
3. 生成语言包
```
pnpm lang:compile
```