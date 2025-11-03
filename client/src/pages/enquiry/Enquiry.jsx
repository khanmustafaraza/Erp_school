import React from "react";
import { FaUserAlt, FaPhoneAlt, FaBook } from "react-icons/fa";
import Input from "components/inputs/Input";
import Navbar from "components/navbar/Navbar";
import HomeFooter from "components/footer/homefooter/HomeFooter";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import { MdMessage } from "react-icons/md";
import { useAuth } from "store/authcontext/AuthContext";

const Enquiry = () => {
  // todo ================== use Auth =========================
  const { state, handleEnquiryChange, handleEnquirySubmit } = useAuth();

  return (
    <>
    {/* todo ============= navbar =========== */}
      <Navbar />

    {/* todo ============= navbar =========== */}
      <div className=" min-h-screen bg-linear-to-br from-indigo-50 to-blue-100 flex items-center justify-center">

        {/* ================= parent container ================= */}
        <div className=" w-full overflow-hidden grid md:grid-cols-2 p-4">
          {/* ================ Left Side — Image ======================*/}
          <div className="flex items-center justify-center p-8">
            <img
              src="en.png"
              alt="Enquiry illustration"
              className="w-full max-w-md object-contain"
              />
          </div>
              {/* ================ Left Side — Image ======================*/}

          {/* =============== Right Side — Form ================== */}
          <div className="p-2 border rounded-sm bg-white shadow border-gray-100">

            {/* ??????????? title ??????????????? */}
            <h2 className="text-3xl font-bold text-indigo-700 mb-3">
              Enquiry Form
            {/* ??????????? title ??????????????? */}
            </h2>
            <p className="text-gray-500 mb-8">
              Fill in the details below and we’ll get back to you shortly.
            </p>
                {/*  ===========form start =================  */}
            <form onSubmit={handleEnquirySubmit} className="space-y-5">
              {/* Two-column layout for inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* full name */}
                <Input
                  label="Full Name"
                  icon={<FaUserAlt />}
                  iconType="react"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={state.enquiry.fullName}
                  onChange={handleEnquiryChange}
                />
                                {/* full name */}

                {/* phone number */}
                <Input
                  label="Phone Number"
                  icon={<FaPhoneAlt />}
                  iconType="react"
                  type="tel"
                  name="phone"
                  placeholder="+1 234 567 890"
                  value={state.enquiry.phone}
                  onChange={handleEnquiryChange}
                />

                {/* phone number */}

                {/* SUBJECT */}
                <Input
                  label="Subject"
                  icon={<FaBook />}
                  iconType="react"
                  type="text"
                  name="subject"
                  placeholder="Subject of enquiry"
                  value={state.enquiry.subject}
                  onChange={handleEnquiryChange}
                />

                {/* SUBJECT */}
              </div>

              {/* Message box (full width) */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={state.enquiry.message}
                  onChange={handleEnquiryChange}
                  className="w-full border border-gray-300 rounded-md p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                ></textarea>
              </div>
                            {/* Message box (full width) */}

{/* =============BTN HANDLE SUBMIT =============== */}
              <div className="text-right">
                <HandleBtnSubmit
                  icon={<MdMessage className="text-2xl text-white" />}
                  text="Send Enquiry"
                />
              </div>
              {/* =============BTN HANDLE SUBMIT =============== */}

            </form>
            {/* form */}
          </div>
        </div>
                {/* ================= parent container ================= */}

      </div>

      <HomeFooter />
    </>
  );
};

export default Enquiry;
