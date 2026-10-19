export type Attribution = {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  referrer: string | null;
  landingPage: string | null;
};

const KEY = 'kvarta_attr_v1';

export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') {
    return {
      utmSource: null, utmMedium: null, utmCampaign: null,
      utmContent: null, utmTerm: null, referrer: null, landingPage: null,
    };
  }

  const cached = localStorage.getItem(KEY);
  if (cached) {
    try { return JSON.parse(cached) as Attribution; } catch {}
  }

  const p = new URLSearchParams(window.location.search);
  const attr: Attribution = {
    utmSource: p.get('utm_source'),
    utmMedium: p.get('utm_medium'),
    utmCampaign: p.get('utm_campaign'),
    utmContent: p.get('utm_content'),
    utmTerm: p.get('utm_term'),
    referrer: document.referrer || null,
    landingPage: window.location.href,
  };

  localStorage.setItem(KEY, JSON.stringify(attr));
  return attr;
}
