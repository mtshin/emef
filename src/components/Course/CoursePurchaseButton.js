import React from "react";

import { PayPalButton } from "react-paypal-button-v2";

// Snackbar notifications on successful transaction
import { useSnackbar } from "notistack";

// Custom components
import Button from "components/CustomButtons/Button.js";

// eslint-disable-next-line react/prop-types
export default function CoursePurchaseButton({ amount, easLegacyPurchaseOverride, eamcsLegacyPurchaseOverride }) {
  // snackbar notification state
  const { enqueueSnackbar } = useSnackbar();
  const legacyEmail = () => {
    if (easLegacyPurchaseOverride) {
      return process.env.REACT_APP_PAYPAL_EAS_EMAIL;
    } else if (eamcsLegacyPurchaseOverride) {
      return process.env.REACT_APP_PAYPAL_EAMCS_EMAIL;
    }
  };

  // Legacy Paypal button that allows for personal accounts to accept payments
  const legacyPayButton = (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_xclick" />
      <input type="hidden" name="business" value={legacyEmail()} />
      <input type="hidden" name="lc" value="US" />
      <input type="hidden" name="item_name" value="EAS Class Purchase" />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="hidden" name="button_subtype" value="services" />
      <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHosted" />
      <Button color="primary" type="submit" name="submit" disabled={!amount}>
        Purchase Class
      </Button>
    </form>
  );
  const smartPayButton = (
    <PayPalButton
      amount={amount}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onSuccess={(details) => {
        console.log(details);
        // Transaction completed
        enqueueSnackbar(`Thank you, ${details.payer.name.given_name}! Your payment was successfully processed.`, {
          variant: "success",
          autoHideDuration: 5000
        });
      }}
      onCancel={() => {
        // Transaction cancelled
        enqueueSnackbar(`Payment cancelled.`, {
          variant: "info",
          autoHideDuration: 5000
        });
      }}
      onError={(error) => {
        let errorMsg = error;
        if (amount === 0) {
          errorMsg = "Please select at least one payment option or enter a non-zero custom payment.";
        }
        enqueueSnackbar(`Transaction failed! ${errorMsg}`, {
          variant: "error",
          autoHideDuration: 5000
        });
      }}
    />
  );

  return easLegacyPurchaseOverride || eamcsLegacyPurchaseOverride ? legacyPayButton : smartPayButton;
}
