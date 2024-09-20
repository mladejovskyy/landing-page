export const metadata = {
  title: "Mladejovsky | Weby, které fungují",
  description: "Tvoříme moderní weby s výsledky. Získejte špičkový web design, SEO a uživatelskou přívětivost od Mladejovsky.",
  keywords: "web design, vývoj webových stránek, design webových stránek, tvorba webových stránek, uživatelský design, optimalizace webu, Mladejovsky",
  author: "Mladejovsky",
  og: {
    title: "Mladejovsky | Tvoříme weby, které fungují",
    description: "Specializujeme se na tvorbu a design webových stránek, které přinášejí výsledky. Naše služby zahrnují moderní web design, optimalizaci pro vyhledávače a uživatelskou přívětivost.",
    url: "https://www.mladejovsky.cz",
    image: "https://www.mladejovsky.cz/images/og-image.webp",
  }
};


export default function RootLayout({children}) {
  return (
      <html lang="cs" translate="no" suppressHydrationWarning={true}>
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>
        <meta name="author" content={metadata.author}/>
        <meta property="og:title" content={metadata.og.title}/>
        <meta property="og:description" content={metadata.og.description}/>
        <meta property="og:url" content={metadata.og.url}/>
        <meta property="og:image" content={metadata.og.image}/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={metadata.og.title}/>
        <meta name="twitter:description" content={metadata.og.description}/>
        <meta name="twitter:image" content={metadata.og.image}/>
        <link rel="canonical" href="https://www.mladejovsky.cz"/>
        <link rel="icon" href="/favicon.ico"/>
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
      </html>

  );
}
