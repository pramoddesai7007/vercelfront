
'use client';
import axios from 'axios';
import Link from 'next/link';
import { faLayerGroup, faTableCellsLarge, faTableList, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';

const Square = () => {
    const [counts, setCounts] = useState({
        todaysSale: 0,
        totalWorkingTables: 0,
        monthlySale: 0,
        totalStockAmount: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vercelbackend-ashy.vercel.app/api/hotel/counts');
                setCounts(response.data);
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="flex items-center text-gray-800 mb-2 mt-16 font-sans">
                <div className="p-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                           
                                <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                        <div className="rounded-full  p-4"> <FontAwesomeIcon icon={faLayerGroup} size="xl" color="blue" /></div>

                                    </div>
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500 font-medium">Today&aposs Sale</div>
                                        <div className="font-bold text-sm">
                                            {counts.sectionCount}
                                            </div>
                                    </div>
                                </div>
                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            
                                <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                        <div className=" rounded-full  p-4"> <FontAwesomeIcon icon={faTableCellsLarge} size="xl" color="green" /></div>
                                    </div>
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500 font-medium">Total Working Tables</div>
                                        <div className="font-bold text-sm">
                                            {counts.tableCount}
                                            </div>
                                    </div>
                                </div>
                           
                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            
                                <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                                        <div className=" rounded-full  p-4"> <FontAwesomeIcon icon={faTableList} size="xl" color="orange" /></div>
                                    </div>
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500 whitespace-nowrap font-medium">Monthly Sale</div>
                                        <div className="font-bold text-sm">
                                            {counts.mainCategoryCount}
                                            </div>
                                    </div>
                                </div>
                            
                        </div>


                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            
                                <div className="flex flex-row bg-white shadow-md rounded p-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                        <div className=" rounded-full  p-4"> <FontAwesomeIcon icon={faListUl} size="xl" color="red" /></div>
                                    </div>
                                    <div className="flex flex-col flex-grow ml-4">
                                        <div className="text-sm text-gray-500 font-medium">Total Stock Amount</div>
                                        <div className="font-bold text-sm">
                                            {counts.menuCount}
                                            </div>
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Square