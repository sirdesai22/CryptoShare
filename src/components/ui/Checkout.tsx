import {
    Checkout,
    CheckoutButton
} from '@coinbase/onchainkit/checkout';

export default function CheckoutComponent() {
  return (
    <Checkout productId='my-product-id' >
      <CheckoutButton coinbaseBranded={true}/>
    </Checkout>
  )
}
