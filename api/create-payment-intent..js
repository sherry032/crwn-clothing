require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  request,
  response
) {

  try {
    const { amount } = JSON.parse(request.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    response.status(200).json({
      body: JSON.stringify({ paymentIntent }),
    });

  } catch (error) {
    console.log({ error });

    response.status(400).json({
      body: JSON.stringify({ error }),
    });
  }

  
}

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};