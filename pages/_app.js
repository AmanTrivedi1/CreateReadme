import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Poppins } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import {blue} from "tailwindcss/colors.js"



const poppins = Poppins({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})



const App = ({ Component, pageProps }) => {
  return (
    <>
    <main className={poppins.className}>
      <NextNProgress color={blue[700]} height={4} />
      <Component {...pageProps} />
    </main>
    </>
  );
};

export default appWithTranslation(App);
