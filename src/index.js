import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://07cdf3bf133c4b808d8b3ee1148bf5d0@o1034454.ingest.sentry.io/6035535",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  release: process.env.SENTRY_RELEASE,
});

ReactDOM.render(<App />, document.getElementById("app"));
