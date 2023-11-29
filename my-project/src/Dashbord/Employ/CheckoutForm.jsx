import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Components/hooks/useAxiosSecqure";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const CheckoutForm = ({salary , veryfi , month , amount , email}) => {
  console.log(salary , veryfi , month , amount);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret , setClintSecret] = useState();
  const [error, setError] = useState('');
  const [trangrstionId , setTrangistionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);

  const payment ={
    email,
    trangrstionId,
    month,
    amount,
  }
  
  useEffect(() => {
    
    axiosSecure.post('/create-payment-intent', { salary: salary })
      .then(res => {
        if (res.data && res.data.clientSecret) {
          console.log(res.data.clientSecret);
          setClintSecret(res.data.clientSecret);
        } else {
          console.error("Invalid response format:", res);
          // Handle the error, set an error state, etc.
        }
      })
      .catch(error => {
        console.error("Error fetching payment intent:", error);
        // Handle the error, set an error state, etc.
      });
  }, [axiosSecure, salary]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(salary);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("")
    }
    const {paymentIntent, error: confroError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || " Annunimas ",
            email: user?.email || " Annunimas ",
          },
        },
      },
    );
    if (confroError) {
      console.log(confroError);
    }else{
      console.log("payment entent " , paymentIntent);
      setTrangistionId(paymentIntent.id);
    }

    const res = await axiosSecure.post("/payment" , payment);
    // console.log(res);
  
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className=" flex justify-center items-center mt-2">
          <button
            className="p-4 rounded-full bg-blue-700 text-white my-4"
            type="submit"
            disabled={!stripe || !clientSecret || !veryfi }
          >
            Pay
          </button>
          
        </div>
        <p className="text-center text-red-700">{error}</p>
        
      </form>
    </div>
  );
};

export default CheckoutForm;