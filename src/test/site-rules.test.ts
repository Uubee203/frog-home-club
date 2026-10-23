import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { PHONE_DISPLAY, SMS_HREF, TEL_HREF, localBusinessSchema } from "@/lib/site";

describe("contact rules", () => {
  it("Call links dial (469) 608-0583", () => {
    expect(TEL_HREF).toBe("tel:4696080583");
    expect(PHONE_DISPLAY).toBe("(469) 608-0583");
  });

  it("Text links open SMS to (469) 608-0583", () => {
    expect(SMS_HREF).toBe("sms:4696080583");
  });

  it("LocalBusiness schema carries the phone number", () => {
    expect(localBusinessSchema.telephone).toBe("+14696080583");
  });
});

describe("site pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of ["/", "/lawn-care", "/junk-removal", "/about", "/contact"]) {
    it(`has a page at ${path}`, () => {
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
