import * as React from "react";
import { useRouter, Router, NextRouter } from "next/router";

const findActive = (
  router: NextRouter,
  items: { name: string; href: string }[]
) => {
  return (
    items.find((item) => router.asPath.includes(item.href))?.href || "#hero"
  );
};

const useCurrentHref = (items: { name: string; href: string }[]) => {
  const router = useRouter();
  const [active, setActive] = React.useState(() => findActive(router, items));

  const handleChangeUrl = React.useCallback((id) => setActive(id), [setActive]);

  React.useEffect(() => {
    Router.events.on("hashChangeStart", handleChangeUrl);
    return () => Router.events.off("hashChangeStart", handleChangeUrl);
  });

  return { active };
};

export default useCurrentHref;
