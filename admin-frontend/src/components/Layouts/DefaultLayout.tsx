"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const NO_SIDEBAR_ROUTES = ["/auth/signin","/auth/signup"];

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [shouldHideSidebar, setShouldHideSidebar] = useState(false);

  useEffect(() => {
    if (pathname) {
      setShouldHideSidebar(NO_SIDEBAR_ROUTES.includes(pathname));
    }
  }, [pathname]);

  if (shouldHideSidebar) {
    return <SimplePage>{children}</SimplePage>;
  }

  return (
    <PageWithSidebar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      {children}
    </PageWithSidebar>
  );
};

const SimplePage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {children}
    </div>
  </main>
);

interface PageWithSidebarProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({
  children,
  sidebarOpen,
  setSidebarOpen,
}) => (
  <div className="flex">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-1 flex-col lg:ml-72.5">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default DefaultLayout;