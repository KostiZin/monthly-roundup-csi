import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import data from "./chats.js";

const chatData = data;

export default class Chart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    return (
      <LineChart
        width={730}
        height={600}
        data={chatData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="2024" stroke="#8884d8" />
        <Line type="monotone" dataKey="2023" stroke="#82ca9d" />
      </LineChart>

      //   <ResponsiveContainer width="100%" height="100%">
      //     <LineChart
      //       width={500}
      //       height={300}
      //       data={data}
      //       margin={{
      //         top: 5,
      //         right: 30,
      //         left: 20,
      //         bottom: 5,
      //       }}
      //     >
      //       <CartesianGrid strokeDasharray="3 3" />
      //       <XAxis dataKey="name" />
      //       <YAxis />
      //       <Tooltip />
      //       <Legend />
      //       <Line
      //         type="monotone"
      //         dataKey="pv"
      //         stroke="#8884d8"
      //         activeDot={{ r: 8 }}
      //       />
      //       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      //     </LineChart>
      //   </ResponsiveContainer>
    );
  }
}