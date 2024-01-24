"use client";
import React from 'react'
import Navbar from '../components/Navbar';

const vendor = () => {
    return (
        <>
            <Navbar />
            <div className=' shadow-md mt-12'>
                <div className="p-1 text-left shadow-md grid grid-cols-2 gap-4">
                    <div className='ml-4'>
                        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-gray-400 text-left">
                            Vendor Payment
                        </h3>
                        <form>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Vendor Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                required
                            />
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Address
                            </label>
                            <input
                                type="text"
                                name="uniqueId"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                min={0}
                                required
                            />
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Mobile No.
                            </label>
                            <input
                                type="number"
                                name="price"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                required
                            />
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Payment By:
                            </label>
                            <input
                                type="text"
                                name="price"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                required
                            />
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Payment Date
                            </label>
                            <input
                                type="text"
                                name="price"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                required
                            />
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                Amount
                            </label>
                            <input
                                type="text"
                                name="price"
                                autoComplete="off"
                                className="w-full p-2 mb-2 border rounded-md"
                                required
                            />

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-orange-100 text-orange-600 hover:bg-orange-200 text-gray font-semibold p-2 px-4 rounded-full mt-4 w-72 mx-auto"
                                // onClick={addNewMenu}
                                >
                                    Add Menu
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className=" float-left pl-20 p-4 mt-4"> {/* Add more padding and margin */}
                        <table className=" min-w-md divide-y">
                            <thead className="text-base bg-zinc-100 text-yellow-700 "></thead>
                            <tbody>
                                <tr>
                                    <td className="text-base bg-zinc-100 p-4">
                                        Total
                                    </td>
                                    <td className="text-base bg-zinc-100 p-4"></td>
                                </tr>
                                <tr>
                                    <td className="text-base bg-zinc-100  p-4"> {/* Increase padding */}
                                        <strong>Total Cr:</strong>
                                    </td>
                                    <td className="text-base bg-zinc-100  p-4"> {/* Increase padding */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-base bg-zinc-100  p-4"> {/* Increase padding */}
                                        <strong>Total Dr:</strong>
                                    </td>
                                    <td className="text-base bg-zinc-100  p-4"> {/* Increase padding */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-base bg-zinc-100  p-4"> {/* Increase padding */}
                                        <strong>Grand Total:</strong>
                                    </td>
                                    <td className="text-base bg-zinc-100 p-4"> {/* Increase padding */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default vendor