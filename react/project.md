# Layout

[figma](https://www.figma.com/file/914616K2F7PeCn5yl6KTr3/Feedback-Widget-(Community)?node-id=100%3A2114)

# Project

## Stage 01 

``` txt
imp = import
f = from

func = function
ret = return

exp = export
def = default

c = const 
l = let

."" = className

+ = Adding attribute in tag

```

```zsh
    npm create vite@latest
        > react
            > react-ts

    npm i -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    npm i phosphor-react

    npm i @headlessui/react

```

file /vite.config.ts

```ts   

    imp { defineConfig } f 'vite'
    imp rect f '@vitejs/plugin-react'

    exp def defineConfig({
      plugins: [react()]
    })
```

file /package.json

```json
    {
      "name": "main",
      "private": true,
      "version": "0.0.0",
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview"
      },
      "dependencies": {
        "@headlessui/react": "^1.6.0",
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
      },
      "devDependencies": {
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "@vitejs/plugin-react": "^1.3.0",
        "autoprefixer": "^10.4.7",
        "postcss": "^8.4.13",
        "tailwindcss": "^3.0.24",
        "typescript": "^4.6.3",
        "vite": "^2.9.5"
      }
    }
```

/index.html

```html
html = lang="pt-br"
  head

    meta = charset="UTF=8"
    meta = name="viewport" content="width=device-width, inital-scale=1.0"

    title = React App

    link = rel='icon' type="images/svg+xml" href="/src/favicon.svg"
    
  body

    div#root

    script = type="module" src="/src/main.tsx"

```

/src/App.tsx

```jsx
imp {Widget} f './components/Widget'

exp func App
  ret Widget
```

/src/main.tsx

```tsx
imp React f 'react'
imp ReactDom f 'react-dom/client'
imp {App} f './App'

imp './global.css'

ReactDom.createRoot(document.getElementById('root')!).render(
  React.StrictMode
    App
)

```

/tailwind.config.js

```js
module.exp {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [],
}
```

/postcss.config.js

```js
module.export = {
  plugins: {
  tailwindcss: {},
  autoprefixer: {}
  }
}
```

/src/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

/src/components/Widget.jsx

```jsx
imp {ChatTeardropDots} f 'phosphor-react'
imp {Popover} f '@headlessui/react'

exp func Widget()
  ret (
    Popover."absolute bottom-5 right-5"

      Popover.Panel = Hello world

      Popover.Button."bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
        ChatTeardropDots."w-6 h-6"

        span."max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
          span."pl-2" 
          Feedback
  )
```

## Stage 02

## Stage 03 

## Stage 04 

## Stage 05

