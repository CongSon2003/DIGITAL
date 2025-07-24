import { Breadcrumb } from "component";
import React, { useState } from "react";
import { FaStreetView } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { apiSendMail } from "apis";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSend = async (data) => {
    console.log(data);
    setIsLoading(true);
    const result = await apiSendMail(data);
    console.log(result);
    if (result.success) {
      setIsLoading(false);
      toast.success("Mail sent successfully");
      reset({
        name: "",
        phone: "",
        email: "",
        text: "",
      });
    }
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <Breadcrumb title={"Contact Us"} pages={"Contact Us"} />
      <div className="w-full bg-white flex justify-center font-[Poppins] pb-[20px]">
        <div className="w-main flex flex-col gap-4">
          <div className="grid grid-cols-2 text-sm">
            <div className="text-[#505050] col-span-1">
              <p>
                Sed vestibulum faucibus felis, sit amet facilisis tellus.
                Aliquam erat volutpat. Sed consectetur ipsum velit, quis rhoncus
                libero egestas eget.
              </p>
              <ul className="flex gap-2 flex-col">
                <li className="flex items-center gap-2">
                  <FaStreetView color="red" />
                  <span>
                    {" "}
                    Address: 474 Ontario St Toronto, ON M4X 1M7 Canada
                  </span>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <TiTick color="red" />
                    <span>Opening hours</span>
                  </div>
                  <ul className="ml-5">
                    <li>Mon-Fri : 11.00 - 20.00</li>
                    <li>Sat: 10.00 - 20.00</li>
                    <li>Sun: 19.00 - 20.00</li>
                  </ul>
                </li>
                <li className="flex items-center gap-2">
                  <CiMail color="red" />
                  <span> Email: support@tadathemes.com </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone color="red" />
                  <span> Phone: (+123)345 678 xxx </span>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <form
                onSubmit={handleSubmit(handleOnSend)}
                className="flex flex-col gap-[10px]"
              >
                <div className="w-full grid grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="name" hidden>
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border py-[8px] px-[10px] bg-[#f6f6f6]"
                      autoComplete="name"
                      id="name"
                      {...register("name", { required: "This is required" })}
                      placeholder="Name"
                    />
                    <span className="text-main">{errors?.name?.message}</span>
                  </div>
                  <div className="col-span-1 pl-[10px]">
                    <label htmlFor="email" hidden>
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      className="w-full border py-[8px] px-[10px] bg-[#f6f6f6]"
                      id="email"
                      {...register("email", {
                        required: "This is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Email"
                    />
                    <span className="text-main">{errors?.email?.message}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="PhoneNumber" hidden>
                    Phone number
                  </label>
                  <input
                    autoComplete="mobile"
                    id="PhoneNumber"
                    {...register("phone", { required: "This is required" })}
                    className="w-full border py-[8px] px-[10px] bg-[#f6f6f6]"
                    placeholder="Phone Number"
                  />
                  <span className="text-main">{errors?.phone?.message}</span>
                </div>
                <div>
                  <textarea
                    className="w-full bg-[#f6f6f6] py-[8px] px-[10px] h-[120px] border"
                    placeholder="Message"
                    {...register("text", { required: "This is required" })}
                  ></textarea>
                  <span className="text-main">{errors?.text?.message}</span>
                </div>
                <div className="w-full flex justify-end text-center">
                  {isLoading ? (
                    <button
                      disabled
                      type="submit"
                      className="hover:bg-[#333333] cursor-not-allowed py-[11px] px-[15px] bg-main text-white relative flex justify-center rounded text-center"
                    >
                      Loading
                      <PulseLoader className="mt-2" color="white" size={5} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="hover:bg-[#333333] py-[11px] px-[15px] bg-main text-white relative flex justify-center rounded text-center"
                    >
                      Send
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
