import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CartContext } from "../../Context";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  streetAddress: "",
  apartmentNo: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  cardExpiration: "",
  cardCvv: "",
  cardHolderName: "",
};

export default function CheckoutForm() {
  const [value, setValue] = useState({});
  const [steps, setSteps] = useState(1);
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  console.log(value);

  return (
    <div className="flex flex-col justify-start gap-2 w-6/12 mx-auto">
      <h1 className="text-5xl font-bold p-8 text-center">Checkout Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required."),
          lastName: Yup.string().required("Last is required."),
          email: Yup.string().required("Email is required."),
          phone: Yup.string().required("Phone is required."),
          address: Yup.string().required("Address is required."),
          streetAddress: Yup.string().required("Street address is required."),
          apartmentNo: Yup.number().required("Apartment no is required."),
          city: Yup.string().required("City is required."),
          state: Yup.string().required("State is required."),
          zip: Yup.number().required("Zip is required."),
          cardNumber: Yup.number().required("Card number is required."),
          cardExpiration: Yup.date().required("Card expiration is required."),
          cardCvv: Yup.number().required("Card cvv is required."),
          cardHolderName: Yup.string().required(
            "Card holder name is required."
          ),
        })}
        onSubmit={(values) => {
          if (values) setValue(values);
          navigate("/cart");
          clearCart();
        }}
      >
        <Form className="flex flex-col gap-4 text-xl">
          {steps === 1 && (
            <>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="firstName">First Name</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="firstName"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="lastName"
                  id="lastName"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="lastName"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="email">Email</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="email"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="phone">Phone</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="tel"
                  name="phone"
                  id="phone"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="phone"
                  component="div"
                />
              </div>
              <div>
                <button
                  className={`bg-blue-400 p-2 rounded-md ${
                    steps === 1 && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Prev
                </button>
                <button
                  className="bg-blue-400 p-2 rounded-md"
                  onClick={() => setSteps(2)}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {steps === 2 && (
            <>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="address">Address</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="address"
                  id="address"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="address"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="streetAddress">Street Address</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="streetAddress"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="apartmentNo">Apartment No</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="number"
                  name="apartmentNo"
                  id="apartmentNo"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="apartmentNo"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="city">City</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="city"
                  id="city"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="city"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="state">State</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="state"
                  id="state"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="state"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="zip">Zip</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="number"
                  name="zip"
                  id="zip"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="zip"
                  component="div"
                />
              </div>

              <div>
                <button
                  className="bg-blue-400 p-2 rounded-md"
                  onClick={() => setSteps(1)}
                >
                  Prev
                </button>
                <button
                  className="bg-blue-400 p-2 rounded-md"
                  onClick={() => setSteps(3)}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {steps === 3 && (
            <>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="cardNumber">Card Number</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="cardNumber"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="cardExpiration">Card Expiration</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="date"
                  name="cardExpiration"
                  id="cardExpiration"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="cardExpiration"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="cardCvv">Card CVV</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="number"
                  name="cardCvv"
                  id="cardCvv"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="cardCvv"
                  component="div"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="cardHolderName">Card Holder Name</label>
                <Field
                  className="outline-none border-b-2 p-2 rounded-md"
                  type="text"
                  name="cardHolderName"
                  id="cardHolderName"
                />
                <ErrorMessage
                  className="text-red-600 text-xl bg-red-100 border-l-2 border-red-600 p-3"
                  name="cardHolderName"
                  component="div"
                />
              </div>
              <div>
                <button
                  className="bg-blue-400 p-2 rounded-md"
                  onClick={() => setSteps(2)}
                >
                  Prev
                </button>
                <button
                  type="submit"
                  className="bg-blue-400 p-2 rounded-md"
                  onClick={() => setSteps(4)}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {steps === 4 && (
            <>
              <div>
                Your order for:
                <ul>
                  {cartItems?.map((product) => (
                    <li
                      key={product.id}
                      className="rounded-lg p-8 w-full bg-white shadow-md flex gap-5 items-center "
                    >
                      <img
                        src={product?.images[0]}
                        alt={product.name}
                        className="w-60 h-full object-cover "
                      />
                      <div className=" flex flex-col gap-5">
                        <h2 className="text-2xl font-bold line-clamp-1">
                          {product.title}
                        </h2>

                        <p>Quantity: {product.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col p-5 gap-3">
                  <h1 className="text-2xl font-bold">Order overview</h1>
                  <h2>Total: ${getCartTotal()}</h2>
                  <p>Via Credit Card</p>
                  <p>Credit Card Holder: {value.cardHolderName}</p>
                  <h2>Shipping Address: </h2>
                  <p>{value.city}</p>
                  <p>{value.address}</p>
                  <p>{value.apartmentNo}</p>
                  <p>{value.streetAddress}</p>
                </div>
              </div>
            </>
          )}
        </Form>
      </Formik>
    </div>
  );
}
