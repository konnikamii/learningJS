export { render };

import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

/* To enable Client-side Routing:
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
export const clientRouting = true;

// Or we enable viewport prefetching for any device without a mouse: mobile and tablets (but
// not laptops that have a touch display).
// export const prefetchStaticAssets = window.matchMedia("(any-hover: none)")
//   .matches
//   ? "viewport"
//   : "hover";

// Whether your UI framework allows the hydration to be aborted. (Allowing vite-plugin-ssr
// to abort the hydration if the user clicks on a link before the hydration finished.)
// React users should set hydrationCanBeAborted to true. (Other frameworks,
// such as Vue, crash if the hydration is aborted.)
export const hydrationCanBeAborted = true;

// Create custom page transition animations
export { onPageTransitionStart };
export { onPageTransitionEnd };

// The onHydrationEnd() hook is called after the render() hook finishes for the
// first page the user navigates to (the onHydrationEnd() hook isn't called for
// subsequent page navigation).
export { onHydrationEnd };

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  //if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById("react-root");
  if (!root) throw new Error("DOM element #react-root not found");
  if (Page) {
    // For SSR pages
    hydrateRoot(
      root,
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    );
  } else {
    // For SPA pages
    // You might want to handle SPA navigation here, for example using client-side routing libraries
  }
}

function onPageTransitionStart(pageContext: PageContextClient) {
  console.log("Page transition start");
  // `pageContext.isBackwardNavigation` is also set at `render(pageContext)`
  // and `onPageTransitionEnd(pageContext)`.
  console.log("Is backwards navigation?", pageContext.isBackwardNavigation);
  // For example:
  document.body.classList.add("page-transition");
}

function onPageTransitionEnd(pageContext: PageContextClient) {
  console.log("Page transition end");
  console.log(pageContext);
  // For example:
  document.body.classList.remove("page-transition");
}

function onHydrationEnd() {
  console.log("The page is now interactive");
}
