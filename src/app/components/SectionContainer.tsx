"use client";
import React from "react";
import "../page.css"; 

type Props = {
  children: React.ReactNode;
  titulo: string;
};

const SectionContainer = ({ children, titulo }: Props) => {
  return (
    <div className="section-wrapper">
      <h1 className="main-title">{titulo}</h1>
      {children} 
    </div>
  );
};

export default SectionContainer;