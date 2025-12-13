const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const siteId = import.meta.env.VITE_ANALYTICS_SITE_ID as string | undefined;

const send = (type: string, payload: Record<string, unknown>) => {
  if (!endpoint || !siteId) return;
  const body = JSON.stringify({ siteId, type, ts: Date.now(), ...payload });
  try {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {}
};

export const trackPageview = (path: string, referrer?: string) => {
  const ua = navigator.userAgent;
  const screenSize = `${window.screen.width}x${window.screen.height}`;
  send("pageview", { path, referrer, ua, screen: screenSize });
};

export const trackEvent = (name: string, props?: Record<string, unknown>) => {
  send("event", { name, props });
};
