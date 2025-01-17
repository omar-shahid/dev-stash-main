// app/providers.tsx
"use client";

import Link, { LinkProps } from "next/link";
import { SaasProvider } from "@saas-ui/react";
import React from "react";

const NextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} />
);

NextLink.displayName = "NextLink";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SaasProvider linkComponent={NextLink}>{children}</SaasProvider>;
}
