import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
// import Footer from "@/components/Footer";

// import Whatsapp from "@/components/Whatsapp";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
import Script from "next/script";
import Footer from "@/components/Footer";

export const metadata = {
  title: " Assignments Help UK: #1 Writing Services By Professional Writers",
  description:
    "Need help with assignments in the UK? Our website provides top-notch assistance for students seeking fast & 24/7 academic support.",
  alternates: {
    canonical: "https://assignmentshelp.uk/",
    last_updated: "11/16/2023",
  },
  openGraph: {
    title: " Assignments Help UK: #1 Writing Services By Professional Writers",
    description:
      "Need help with assignments in the UK? Our website provides top-notch assistance for students seeking fast & 24/7 academic support.",
    images: [
      {
        url: "https://og.tailgraph.com/og?fontFamily=Roboto%2BCondensed&title=Assignment Help London UK | Get Mega Discount On 1st Order&titleTailwind=text-white%20text-center%20border-black%20font-bold%20text-6xl%20px-20&text=Stuck with assignments? No Worries, Get First Class UK Based Assignment Help in London for all your Assignments. 4.9 rating, 100% Confidential, Plagiarism free and 24/7 Support.&textTailwind=text-center%20font-medium%20text-blueGray-100%20text-3xl%20px-28&textFontFamily=Abel&logoUrl=https%3A%2F%2Fassignmentshelp.uk%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fassignment-help-logo-landscape.2f55c5f5.png%26w%3D640%26q%3D75&logoTailwind=py-10%20w-96%20mx-auto&bgUrl=&bgTailwind=bg-purple-600%20bg-gradient-to-b%20from-purple-500%20to-pink-500&overlayTailwind=flex%20flex-col%20items-center%20justify-center&footer=&footerTailwind=text-teal-600&t=1700226081213&refresh=1",
        width: 1200,
        height: 628,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
    url: "https://assignmentshelp.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Assignments Help",
    description:
      "Need help with assignments in the UK? Our website provides top-notch assistance for students seeking fast & 24/7 academic support.",
    creator: "@AssignmentsHe59",
    site: "@AssignmentsHe59",
    images: [
      "https://og.tailgraph.com/og?fontFamily=Roboto%2BCondensed&title=Assignment Help London UK | Get Mega Discount On 1st Order&titleTailwind=text-white%20text-center%20border-black%20font-bold%20text-6xl%20px-20&text=Stuck with assignments? No Worries, Get First Class UK Based Assignment Help in London for all your Assignments. 4.9 rating, 100% Confidential, Plagiarism free and 24/7 Support.&textTailwind=text-center%20font-medium%20text-blueGray-100%20text-3xl%20px-28&textFontFamily=Abel&logoUrl=https%3A%2F%2Fassignmentshelp.uk%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fassignment-help-logo-landscape.2f55c5f5.png%26w%3D640%26q%3D75&logoTailwind=py-10%20w-96%20mx-auto&bgUrl=&bgTailwind=bg-purple-600%20bg-gradient-to-b%20from-purple-500%20to-pink-500&overlayTailwind=flex%20flex-col%20items-center%20justify-center&footer=&footerTailwind=text-teal-600&t=1700226081213&refresh=1",
    ],
  },
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
  return (
    <html lang="en">
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" async strategy="afterInteractive">
        {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-0ZKR9J5W8S');
                `}
      </Script>
      <Script
  type="application/ld+json"
  strategy="afterInteractive"
  id="page-schema-script"
>
  {`
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Assignment Writing Service UK",
      "image": [
        "https://assignmentshelp.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fassignment-help-logo-landscape.2f55c5f5.png&w=256&q=75"
      ],
      "description": "Stuck with Assignments? No Worries, Get First Class UK Based Assignment Help in London for all your Assignments. 4.9 rating, 100% Confidential, Plagiarism free and 24/7 Support.",
      "sku": "0000000102",
      "mpn": "000110",
      "brand": {
        "@type": "Brand",
        "name": "Assignment Help UK"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Dr. Nathan."
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "415"
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "5",
        "lowPrice": "5.90",
        "highPrice": "08.90",
        "priceCurrency": "GBP"
      }
    }
  `}
</Script>

      <body className={`${poppins.className} flex flex-col h-screen overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        {/* <TawkToMessenger /> */}
        {/* <Whatsapp /> */}
      </body>
    </html>
  );
}
