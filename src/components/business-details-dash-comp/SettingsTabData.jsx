const settingTabData = [
    {
        content: (
            <div className="">
                <form className="mt-7">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                htmlFor="full_name"
                                className="block mb-2 text-sm font-medium text-gray-900  "
                            >
                                full name <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                                placeholder="jays"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="full_name"
                                className="block mb-2 text-sm font-medium text-gray-900  "
                            >
                                last name <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                                placeholder="acad"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex-col flex gap-5 mb-6  w-full">
                        <div>
                            <label
                                htmlFor="email_address"
                                className="block mb-2 text-sm font-medium text-gray-900  "
                            >
                                email address <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="email"
                                id="email_address"
                                name="email_address"
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                                placeholder="jaysalimi.msme@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone_number"
                                className="block mb-2 text-sm font-medium text-gray-900  "
                            >
                                phone number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex flex-row gap-0 items-center">
                                <select
                                    name=""
                                    style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                                    id=""
                                    className="block w-[30%] p-4 text-gray-900 rounded-s-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                                >
                                    <option value="">+234</option>
                                </select>
                                <input
                                    type="tel"
                                    id="phone_number"
                                    name="phone_number"
                                    style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                                    className="block w-[70%] p-4 text-gray-900 rounded-e-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                                    placeholder="090 345 567 55"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    {
        content: (
            <div className=""></div>
        )
    },
    {
        content: (
            <div className=""></div>
        )
    },
    {
        content: (
            <div className=""></div>
        )
    },
    {
        content: (
            <div className=""></div>
        )
    },
    {
        content: (
            <div className=""></div>
        )
    },
];

export default settingTabData;