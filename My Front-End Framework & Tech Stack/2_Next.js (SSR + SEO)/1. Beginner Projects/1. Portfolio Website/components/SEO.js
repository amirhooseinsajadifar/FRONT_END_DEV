import Head from "next/head";

export default function SEO({ title, description }) {
  const siteTitle = "My Portfolio";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "My personal portfolio site"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
