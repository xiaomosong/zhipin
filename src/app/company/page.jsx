"use client";
import React from "react";

const Company = async () => {
  const p = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
  };
  await p();
  return <div>公司</div>;
};

export default Company;
