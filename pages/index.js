import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";



export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-[#F7F5F2]  bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dmlts9lbk/image/upload/v1704020527/mobilebg_b8c4qr.webp')]    md:bg-[url('https://res.cloudinary.com/dmlts9lbk/image/upload/v1704019069/background_xjgdbd.jpg')]  h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-label="true">
            <div className="relative h-full">
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>



            
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <div className="flex items-center">
                        <p className="text-[#0057E5] ml-2 -mb-2 text-md">
                          AutoReadMe
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-semibold sm:text-5xl md:text-7xl">
                  <span className="block"></span>
                  <span className="block text-[#fbfbfb]">Readme Creator</span>
                </h1>
              </div>
              <p className="mt-3 max-w-xl text-center md:text-base mx-auto text-sm text-[#fbfbfb]">
                  {t("Create your custome readme.md file here or you can just choose options to create it just created a readme in just simple step tap ono get started button and yeh all set")}
                </p>
              <div className="flex justify-center mt-6">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    href="/editor"
                    className="inline-flex items-center text-sm px-4 py-2 border border-transparent  font-medium rounded-lg text-blue-700 bg-white hover:text-blue-700"
                  >
                    {t("Create Now")}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
