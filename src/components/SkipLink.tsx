import * as React from "react";
import { useTranslation } from "next-i18next/pages";

/**
 * Keyboard users can jump straight to the content, skipping the navigation.
 */
const SkipLink = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <style jsx>{`
        .skip-link {
          position: fixed;
          top: 0.75rem;
          left: 0.75rem;
          z-index: 2000;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          background: #ffffff;
          color: #1b5e20;
          font-weight: 600;
          box-shadow: 0 16px 40px -20px rgba(15, 23, 42, 0.4);
          transform: translateY(-200%);
          transition: transform 0.15s ease;
        }

        .skip-link:focus {
          transform: translateY(0);
        }
      `}</style>
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
    </React.Fragment>
  );
};

export default SkipLink;
