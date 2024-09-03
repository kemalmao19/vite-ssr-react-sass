import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Layout from "./app/Layout";
import { Router } from "./Router";

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Layout>
        <StaticRouter location={"/" + url}>
          <Router />
        </StaticRouter>
      </Layout>
    </React.StrictMode>,
    options,
  );
}
