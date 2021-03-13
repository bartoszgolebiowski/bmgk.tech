import * as React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>BMGK.tech</title>
      <meta
        name="description"
        content="We program PLC and we create high-level macros for them"
      />
      <meta name="image" content="https://bmgk.tech/svg/BMGK.svg" />
      <meta
        name="keywords"
        content="PLC, Automatization, VASS6, LAD, code generator"
      />

      {/* OpenGraph tags */}
      <meta property="og:url" content="https://bmgk.tech/en" />
      <meta property="og:title" content="PLC generation services" />
      <meta
        property="og:description"
        content="We program PLC and we create high-level macros for them"
      />
      <meta property="og:image" content="https://bmgk.tech/svg/BMGK.svg" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PLC generation services" />
      <meta
        name="twitter:description"
        content="We program PLC and we create high-level macros for them"
      />
      <meta name="twitter:image" content="https://bmgk.tech/svg/BMGK.svg" />
    </Helmet>
  );
};

export default SEO;
