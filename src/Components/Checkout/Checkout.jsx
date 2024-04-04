import React, { useState } from 'react'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import { COUNTRIES_AND_STATES } from '../../country-states'
import { useModals } from '../../useModal'
import ShowOrderModal from '../show-order'
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount'

const Checkout = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
  
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
      setSelectedState("");
    };
  
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
    };

    const showInvoice = useModals(["showInvoice"]);

    function toggleShowInvoiceModal() {
      showInvoice.toggleModal("showInvoice");
    }
  return (
   <>
   <ScrollToTopOnMount />
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">


{/* {navbarVisible ? (
  <svg
    className="md:hidden cursor-pointer w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 50 50"
    onClick={() => setNavbarVisible(!navbarVisible)}
  >
    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
  </svg>
) : (
  <svg
    className="md:hidden cursor-pointer"
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    onClick={() => setNavbarVisible(!navbarVisible)}
  >
    <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
  </svg>
)} */}


<section className="relative border h-[300px] md:h-[400px]">
<div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

<img
  src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Best-Background-Image.jpg?id=836"
  alt=""
  className="w-full h-full object-cover"
/>

<div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-12 items-center justify-center h-full w-full">
  <h1 className="font-medium md:font-semibold text-[40px] md:text-[60px] w-full sm:w-[550px] md:w-[560px] text-center leading-snug md:leading-[72px]">
    Checkout Details
  </h1>
</div>
</section>

<section className="relative p-10 md:px-[130px] md:py-[130px] flex flex-col md:flex-row gap-8 items-center md:items-start w-full justify-center">
<div className="flex flex-col gap-8 items-start w-full justify-center md:pr-8 md:border-r">
  <div className="flex flex-col gap-2.5 text-[#181616] items-start justify-center md:w-[720px]">
    <h2 className="text-[32px] font-medium">Billing details</h2>
  </div>

  <div className="w-full md:w-[720px]">
    <form className="mx-auto w-full flex flex-col gap-5">
      <div className="flex flex-col w-full gap-5 md:flex-row">
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
          placeholder="Last Name"
          required
        />
      </div>

      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
        placeholder="Company name (optional)"
        required
      />

      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] pr-20"
      >
        <option className="text-[17px]" value="">
          Select a country / region
        </option>
        {Object.entries(COUNTRIES_AND_STATES.country)?.map(
          ([code, name]) => (
            <option key={code} value={code} className="text-[17px]">
              {name}
            </option>
          )
        )}
      </select>

      <div className="flex flex-col w-full gap-5 md:flex-row">
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
          placeholder="Street Address"
          required
        />

        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
          placeholder="Apartment, suite, etc. (optional)"
          required
        />
      </div>

      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
        placeholder="Town / City"
        required
      />

      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
      >
        <option value="" className="text-[17px]">
          Select a state
        </option>
        {COUNTRIES_AND_STATES.states[selectedCountry]?.map(
          ({ code, name }) => (
            <option key={code} value={code} className="text-[17px]">
              {name}
            </option>
          )
        )}
      </select>

      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
        placeholder="ZIP / Postal Code"
        required
      />

      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
        placeholder="Phone"
        required
      />

      <input
        type="email"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
        placeholder="Email Address"
        required
      />
    </form>

    <div className="flex flex-col gap-5 mt-10 text-[#181616] items-start justify-center md:w-[720px]">
      <h2 className="text-[32px] font-medium">Additional Details</h2>

      <textarea
        id="message"
        rows={7}
        className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300"
        placeholder="Your Message"
      ></textarea>
    </div>
  </div>
</div>

<div className="flex flex-col gap-[15px] items-start w-full justify-center">
  <h4 className="font-bold text-[#a20401] leading-[28px]">
    PAYMENT DETAILS
  </h4>

  {/* <div className="flex mt-[-5px] flex-col items-center justify-center w-full">
    <div className="flex items-center justify-between py-[15px] w-full border-b">
      <h4 className="text-[#707070] font-medium text-[13px]">
        PRODUCT
      </h4>
      <h4 className="text-[#707070] font-medium text-[13px]">
        SUBTOTAL
      </h4>
    </div>
    <div className="flex items-center justify-between py-[15px] w-full border-b">
      <h4 className="text-[#161616] font-medium text-[16px]">
        Cabinet Wall Mounted × 1
      </h4>
      <h4 className="text-[#161616] font-medium text-[16px]">
        $199.00
      </h4>
    </div>
    <div className="flex items-center justify-between py-[15px] w-full border-b">
      <h4 className="text-[#707070] font-medium text-[13px]">
        SUBTOTAL
      </h4>
      <h4 className="text-[#161616] font-medium text-[16px]">
        $199.00
      </h4>
    </div>
    <div className="flex items-center justify-between py-[15px] w-full border-b">
      <h4 className="text-[#707070] font-medium text-[13px]">TOTAL</h4>
      <h4 className="text-[#a20401] font-medium text-[16px]">
        $199.00
      </h4>
    </div>
  </div> */}

  <div className="flex flex-col items-start justify-center w-full gap-5">
    <p className="text-[#707070] font-normal text-[13px]">
      You are about to make payment for Digital Marketing and Branding
      Service.
    </p>

    <textarea
      id="message"
      rows={7}
      className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300 mt-[-10px]"
      placeholder="Kindly type in this box the service description"
    ></textarea>

    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <p className="text-gray-500 font-medium">₦</p>
      </div>

      <input
        type="text"
        defaultValue="25,000 - 37,000"
        className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] ps-10"
        placeholder="Amount"
        required
      />
    </div>

    <p className="text-[#707070] mt-[-15px] font-normal text-[13px]">
      Note: Fee charged is decided by the specific type service, and
      based on service demand. It may be lesser or higher.
    </p>
  </div>

  <h4 className="font-bold text-[#a20401] leading-[28px]">
    PAYMENT METHODS
  </h4>

  <div className="w-full flex flex-col gap-2 items-start">
    <img
      src="https://help.zazzle.com/hc/article_attachments/360010513393"
      alt=""
      className="w-full"
    />
    <p className="text-[#707070] font-normal text-[13px]">
      Make payment using your debit, credit card & bank account
    </p>
  </div>

  <p className="text-[#161616] font-normal text-[16px] text-left">
    Your personal data will be used to process your order, support your
    experience throughout this website, and for other purposes described
    in our{" "}
    <Link
      to="/privacy-policy"
      className="text-[#a20401] cursor-pointer"
    >
      privacy policy.
    </Link>
  </p>

  <button
    type="submit"
    className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-[15px] hover:bg-green-600 w-full mt-[22px] transition-colors"
    onClick={toggleShowInvoiceModal}
  >
    Place Order
  </button>
</div>
</section>



<ShowOrderModal
show={showInvoice.modals.showInvoice.show}
toggle={toggleShowInvoiceModal}
/>
</div>
   </>
  )
}

export default Checkout