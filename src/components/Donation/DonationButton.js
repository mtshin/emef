import React from "react";

// Custom components
import Button from "components/CustomButtons/Button.js";

export default function DonationButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value={process.env.REACT_APP_PAYPAL_DONATION_EMAIL} />
      <input type="hidden" name="item_name" value="Evergreen Mission and Education Foundation 2016 INC." />
      <input type="hidden" name="currency_code" value="USD" />
      <Button color="primary" type="submit" name="submit">
        Donate
      </Button>
    </form>
  );
}
