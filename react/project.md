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

```zsh
yarn add -D @tailwindcss/forms
yarn add -D tailwind-scrollbar
yarn add html2canvas
```

/tailwind.config.js
```diff
  theme: {
    extend: {
      colors: {
        brand: {
+         300: '#996DFF',

+     borderRadius: {
+       md: '4px'
+     }
plugins: [
+    require('@tailwindcss/forms')
+    require('tailwind-scrollbar')
]

```

/src/components/WidgetForm/index.tsx

```tsx
imp {useState} f 'react'
imp {CloseButton} f './CloseButton'

imp {FeedbackTypeStep} f './Steps/FeedbackTypeStep'
imp {FeedbackContentStep} f './Steps/FeedbackContentStep'
imp {FeedbackSuccessStep} f './Steps/FeedbackSuccessStep'

imp bugImageUrl f '../../assets/bug.svg'
imp ideaImageUrl f '../../assets/idea.svg'
imp thoughtImageUrl f '../../assets/thought.svg'

exp c feedbackTypes  
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento'
    }
  }

exp type FeedbackType = keyof typeof feedbackTypes

exp func WidgetForm
  c [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  c [feedbackSent, setFeedbackSent] = useState(false)


  func handleRestartFeedback
    setFeedbackSent(false)
    setFeedbackType(null)

  ret
    div."bg-zinc-900 relative rounded.2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"

    {feedbackSent ? (
      FeedbackSuccessStep
        +onFeedbackRestartRequested={handleRestartFeedback}
    ) : (
      <>
        {!feedbackType ? (
           FeedbackTypeStep
            +onFeedbackTypeChanged={setFeedbackType}
        ) : (
          FeedbackContentStep
            +feedbackType={feedbackType}
            +onFeedbackRestartRequested={handleRestartFeedback}
            +onFeedbackSent={() => setFeedbackSent(true)}
        )}
      </>
    )}


      footer."text-ts text-neutral-400"
        Feito por 
        a."underline underline-offset-2"
          +href="https://github.com/eduardo-sdev" 
          = EduardoSilva
```

/src/components/WidgetForm/Steps/FeedbackContentStep.tsx

```tsx
imp {FormEvent} f 'react'
imp {FeedbackType, feedbackTypes} f '..'

imp {ArrowLeft, Camera} f 'phosphor-react'

imp {CloseButton} f '../../CloseButton'
imp {ScreenshotButton} f '../../ScreenshotButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

exp func FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps)
  c [screenshot, setScreenshot] = useState<string | null>(null)
  c [comment, setComment] = useState('')

  c feedbackTypeInfo = feedbackTypes[feedbackType]

  func handleSubmitFeedback(event: FormEvent)
    event.preventDefault()

    onFeedbackSent()

  ret
    <>
      header
        button."top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"+type="button"+onClick={onFeedbackRestartRequested}
          ArrowLeft."w-4 h-4"+weight="bold"

        span."text-xl leading-6 flex items-center gap-2"
          img+src={feedbackTypeInfo.image.source}+alt={feedbackTypeInfo.image.alt}+."w-6  h-6"
          {feedbackTypeInfo.title}

        CloseButton

      form."my-4 w-full"+onSubmit={handleSubmitFeedback}
        textarea."min-w=[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          +placeholder="Conte com detalhes o que está acontedendo..."
          +onChange={event => setComment(event.target.value)}

        footer."flex gap-2 mt-2"

          ScreenshotButton+onScreenshotTook={setScreenshot}+screenshot={screenshot}

          button."p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" 
            +disabled={comment.length === 0}
            = Enviar feedback
    </>

```

/src/components/ScreenshotButton.tsx

```tsx
imp {useState} f 'react'

imp {Camera, Trash} f 'phosphor-react'

imp html2canvas f 'html2canvas'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

imp {Loading} f './Loading'

exp func ScreenshotButton({ screenshot, onScreenshotTook }:ScreenshotButtonProps)
  c [isTakaScreenshot, setIsTakaScreenshot] = useState(false)

  async func handleTakeScreenshot
    setIsTakaScreenshot(true)
    c canvas = await html2canvas(document.querySelector("html")!)
    c base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakaScreenshot(false)

    if (screenshot) {
      ret
        button."p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
          +onClick={() => onScreenshotTook(null)}
          +type="button"
          +style={{backgroundImage: `url(${screenshot}), backgroundPosition: 'right bottom', backgroundSize: 180,`}}
    }

  ret
    button."bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      +type="button"
      { isTakaScreenshot ? Loading : Camera."w-6 h-6" }

```

/src/components/WidgetForm/Steps/FeedbackSuccessStep.tsx

```tsx
imp {CloseButton} f '../../CloseButton'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void

}

exp func FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps)
  ret
    <>
      header
        CloseButton

      div."flex flex-col items-center py-10 w-[304px]"
        svg
        span."text-xl mt-2" = Agradecemos Pelo feedback!
        button."py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          +type="button"
          +onClick={onFeedbackRestartRequested}
          = Quero enviar outro.
    </>

```

/src/components/Loading.tsx

```tsx
imp {CircleNotch} f 'phosphor-react'

exp func Loading
  ret
    div."w-6 h-6 flex items-center justify-center overflow-hidden"
      CircleNotch+weight="bold"."w-4 h-4 animate-spin"

```

/src/components/WidgetForm/Steps/FeedbackTypeStep.tsx

```tsx
imp {feedbackTypes, FeedbackType} f '..'

imp {CloseButton} f '../../CloseButton'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged:(type: FeedbackType) => void
}

exp func FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps)
  ret
    <>
      header
        span."text-xl leading-6" = Deixe seu feedback
        CloseButton

      div."flex py-8 gap-2 w-full"
        { Object.entries(feedbackTypes).map(([key, value]) => {
          ret
            button+key={key}+type="button"onClick={() => setFeedbackType(key as FeedbackType)}+."bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus-outline-none"
              img+src={value.image.source}+alt={value.image.alt}
              span = {value.title}
          })  
        }
    </>
```

/src/components/Widget.jsx

```diff
+ imp {WidgetForm} f ./WidgetForm

- Popover."absolute bottom-5 right-5"
+ Popover."absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-center"

Popover.Panel
- Hello world
+ <WidgetForm />

```

src/components/CloseButton.tsx

```tsx
imp {Popover} f '@headlessui/react'
imp {X} f 'phosphor-react'

exp func CloseButton
  ret
    Popover.Button."top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"+title="Feicha formulário de feedback"
      X."w-4 h-4"+width="bold"
```


## Stage 03 

## Stage 04 

## Stage 05

