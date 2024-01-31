import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_TEST_API_SECRET, {
  apiVersion: '2023-10-16',
});

async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'jpy',
        product_data: {
          name: 'Test Product',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  console.log(session.id);

  return session.url;
}

// この関数を呼び出してCheckoutセッションを作成し、URLを取得
createCheckoutSession().then(url => {
  console.log(`Checkout at: ${url}`);
}).catch(error => {
  console.error('Error:', error);
});

// async function retrieveCheckoutSession(sessionId: string) {
//   const session = await stripe.checkout.sessions.retrieve(sessionId);
//   console.log(session);
// }
