import { useEffect } from "react";

const usePaypalScript = (clientId) => {
  useEffect(() => {
    const paypalScript = document.createElement("script");

    paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    paypalScript.async = true;

    document.body.appendChild(paypalScript);

    return () => {
      document.body.removeChild(paypalScript);
      // Reset any leftover PayPal related properties
      Object.keys(window).forEach((key) => {
        if (/paypal|zoid|post_robot/.test(key)) {
          delete window[key];
        }
      });
    };
  }, [clientId]);
};

export default usePaypalScript;
