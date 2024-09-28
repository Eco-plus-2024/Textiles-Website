import AuthenticationIcon from "@/assets/icons/authentication-icon";
import CalendarIcon from "@/assets/icons/calendar-icon";
import ChartIcon from "@/assets/icons/chart-icon";
import DashboardIcon from "@/assets/icons/dashboard-icon";
import ElementIcon from "@/assets/icons/element-icon";
import FormIcon from "@/assets/icons/form-icon";
import MasterIcon from "@/assets/icons/master-icon";
import ProfileIcon from "@/assets/icons/profile-icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import TableIcon from "@/assets/icons/table-icon";

export const menuGroups = [
  {
    // name: "MENU",
    menuItems: [
      {
        icon: DashboardIcon,
        label: "Dashboard",
        route: "/",
        // children: [{ label: "eCommerce", route: "/" }],
      },
      {
        icon: MasterIcon,
        label: "Masters",
        route: "#",
        children: [
          { label: "Category", route: "/category" },
          { label: "Brand", route: "/brand" },
        ],
      },
      {
        icon: CalendarIcon,
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: ProfileIcon,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: FormIcon,
        label: "Forms",
        route: "#",
        children: [
          { label: "Form Elements", route: "/forms/form-elements" },
          { label: "Form Layout", route: "/forms/form-layout" },
        ],
      },
      {
        icon: TableIcon,
        label: "Tables",
        route: "/tables",
      },
      {
        icon: SettingsIcon,
        label: "Settings",
        route: "/settings",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: ChartIcon,
        label: "Chart",
        route: "/chart",
      },
      {
        icon: ElementIcon,
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Alerts", route: "/ui/alerts" },
          { label: "Buttons", route: "/ui/buttons" },
        ],
      },
      {
        icon: AuthenticationIcon,
        label: "Authentication",
        route: "#",
        children: [
          { label: "Sign In", route: "/auth/signin" },
          { label: "Sign Up", route: "/auth/signup" },
        ],
      },
    ],
  },
];
