'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import * as XLSX from 'xlsx';

const MenuStatisticsComponent = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [menuStatistics, setMenuStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://vercelbackend-ashy.vercel.app/api/order/menu-statistics${selectedDate ? `?date=${selectedDate}` : ''}`);
        setMenuStatistics(response.data.menuStatistics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const exportToExcel = () => {
    const data = Object.keys(menuStatistics).map((menu) => ({
      MenuName: menu,
      Quantity: menuStatistics[menu].count,
      MenuCount: menuStatistics[menu].totalQuantity,
      TotalAmount: menuStatistics[menu].totalPrice,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'MenuStatistics');
    XLSX.writeFile(wb, 'menu_Report.xlsx');
  };

  return (
    <>
     <Navbar />
    <div className="container mx-auto mt-6 p-8 bg-white rounded-md shadow-md font-sans">
      <h1 className="text-3xl font-bold mb-4">Menu Report</h1>
      <div className="mb-4">
        <label className="mr-2">Select Date:</label>
        <input type="date" className='border rounded-md text-gray-700 p-1 text-sm' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        <button class="text-orange-600 ml-4 font-bold py-1 rounded-full text-sm bg-orange-100 mr-2 px-2 shadow-md" onClick={exportToExcel}>Export to Excel</button>
        </div>
      <div className='max-w-5xl pl-44'>
      <table className="w-full border border-gray-300 text-center">
        <thead className='text-base bg-zinc-100 text-yellow-700 border'>
          <tr className="bg-gray-200 text-center">
            <th className="py-2 px-4 border">Menu Name</th>
            {/* <th className="py-2 px-4 border">Menu Count</th> */}
            <th className="py-2 px-4 border">Quantity</th>
            <th className="py-2 px-4 border">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(menuStatistics).map((menu, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{menu}</td>
              {/* <td className="py-2 px-4 border">{menuStatistics[menu].count}</td> */}
              <td className="py-2 px-4 border">{menuStatistics[menu].totalQuantity}</td>
              <td className="py-2 px-4 border">{menuStatistics[menu].totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
};

export default MenuStatisticsComponent;
