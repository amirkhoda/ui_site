import localFont from 'next/font/local'

export const yekan = localFont({
    src:[
      {
        path:"../../public/fonts/YekanBakh-Light.woff2",
        weight:"100",
        style:"normal"
      },
      {
        path:"../../public/fonts/YekanBakh-Regular.woff2",
        weight:"200",
        style:"normal"
      },
      
    ]
  })