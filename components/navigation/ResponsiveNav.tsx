"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function ResponsiveNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <Header
        isMobileOpen={isMobileOpen}
        onToggleMobile={handleToggleMobile}
      />
      <Sidebar
        isOpen={isMobileOpen}
        onClose={handleCloseSidebar}
      />
    </>
  );
}