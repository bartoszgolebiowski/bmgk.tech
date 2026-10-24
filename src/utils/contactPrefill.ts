const CONTACT_PREFILL_EVENT = "bmgk:contact-prefill";

/**
 * Fills the contact form message from another section (for example the
 * "custom generator" or "AI early access" calls to action) before the browser
 * scrolls to #contact.
 */
export const requestContactPrefill = (message: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<string>(CONTACT_PREFILL_EVENT, { detail: message })
  );
};

export const subscribeToContactPrefill = (listener: (message: string) => void) => {
  const handlePrefill = (event: Event) => {
    const message = (event as CustomEvent<string>).detail;

    if (message) {
      listener(message);
    }
  };

  window.addEventListener(CONTACT_PREFILL_EVENT, handlePrefill);

  return () => window.removeEventListener(CONTACT_PREFILL_EVENT, handlePrefill);
};
