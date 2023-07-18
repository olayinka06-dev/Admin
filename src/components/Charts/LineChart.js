"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
const LineChartComponent = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [12, 13, 14, 15, 16, 20, 10],
        borderColor:
          "rgb(53, 162, 235)" /* 
        backgroundColor: "rgba(53, 162, 235, 0.5)", */,

        backgroundColor: (context) => {
          const bgColor = ["rgba(0, 204, 255, 0.2)", "rgba(254, 86, 33, 0.2)"];

          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { right, left },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(right, 0, left, 0);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.8, bgColor[1]);
          return gradientBg;
        },
      },
    ],
  };

  const option = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove the grid lines for the y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove the grid lines for the x-axis
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Set the line tension for curved edges
        borderWidth: 1, // Add a border width for better visibility of the line
      },
    },
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: false,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Set the line tension for curved edges
        borderWidth: 1, // Add a border width for better visibility of the line
      },
    },
  };

  return (
    <div className="container lg:flex-row flex flex-col lg:space-x-[20px]">
      <Line data={data} options={option} />
    </div>
  );
};

export default LineChartComponent;
