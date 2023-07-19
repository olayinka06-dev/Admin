import React from 'react';

const Message = () => {


    return (
        <div className="">
            <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
                <div className="w-full flex justify-between">
                    <div className="w-full">
                        <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Message</p>
                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div>
                        <label
                            htmlFor="business_name"
                            className="block mb-2 text-sm font-medium text-gray-900  "
                        >
                            topic 
                        </label>

                        <input
                            type="text"
                            id="trade_name"
                            name="trade_name"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                            placeholder="bank statement"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900  "
                        >
                            your message 
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                            placeholder="your message going along the way...!"
                            required
                            name="description"
                            cols="10"
                            rows="5"
                        ></textarea>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Message;