import Accordin from "./components/Accordin";
import Tabs from "./components/Tabs";
import ModalExample from "./components/ModalExample";
import Tooltip from "./components/ToolTip";
import Dropdown from "./components/DropDown";
import Pagination from "./components/Pagination";
import DataTable from "./components/DataTable";
import ThemeToggle from "./components/ThemeToggle";
import Toast from "./components/Toast";
import SearchBar from "./components/SearchBar";
import FormValidation from "./components/FormValidation";
import SwiggyDashboard from "./components/SwiggyDashboard";

import accordinVideo from "./Recordings/Accordin.mp4";
import tabsVideo from "./Recordings/TabsRecording.mp4";
import modalVideo from "./Recordings/ModalRecording.mp4";
import tooltipVideo from "./Recordings/ToolTipRecording.mp4";
import dropdownVideo from "./Recordings/DropDownRecording.mp4";
import paginationVideo from "./Recordings/PaginationRecording.mp4";
import dataTableVideo from "./Recordings/DataTableRecording.mp4";
import themeToggleVideo from "./Recordings/ThemeToggleRecording.mp4";
import toastVideo from "./Recordings/Toast NotificationRecording.mp4";
import searchVideo from "./Recordings/SearchRecording.mp4";
import formVideo from "./Recordings/FormValidationRecording.mp4";
import swiggyRecording from "./Recordings/swiggyRecording.mp4";
export const components = [
  {
    id: 1,
    title: "Accordion",
    type: "modal",
    description: "Expandable/collapsible sections for FAQs.",
    icon: "📜",
    component: <Accordin />,
    previewVideo: accordinVideo
  },
  {
    id: 2,
    title: "Tabs",
    type: "modal",
    description: "Switch between multiple views.",
    icon: "🗂️",
    component: <Tabs />,
    previewVideo: tabsVideo
  },
  {
    id: 3,
    title: "Modal/Dialog",
    type: "modal",
    description: "Popup for confirmations or messages.",
    icon: "🪟",
    component: <ModalExample />,
    previewVideo: modalVideo
  },
  {
    id: 4,
    title: "Tooltip",
    type: "modal",
    description: "Hover/focus hints for inline help.",
    icon: "ℹ️",
    component: <Tooltip />,
    previewVideo: tooltipVideo
  },
  {
    id: 5,
    title: "Dropdown",
    type: "modal",
    description: "Select from a list of options.",
    icon: "⬇️",
    component: <Dropdown />,
    previewVideo: dropdownVideo
  },
  {
    id: 6,
    title: "Pagination",
    type: "modal",
    description: "Navigate through lists and tables.",
    icon: "📑",
    component: <Pagination />,
    previewVideo: paginationVideo
  },
  {
    id: 7,
    title: "Data Table + Progress Bars",
    type: "modal",
    description: "Table with rows and progress indicators.",
    icon: "📊",
    component: <DataTable />,
    previewVideo: dataTableVideo
  },
  {
    id: 8,
    title: "Theme Toggle",
    type: "modal",
    description: "Switch between light and dark mode.",
    icon: "🌞🌙",
    component: <ThemeToggle />,
    previewVideo: themeToggleVideo
  },
  {
    id: 9,
    title: "Toast Notifications",
    type: "modal",
    description: "Auto-hiding success/error/info alerts.",
    icon: "🔔",
    component: <Toast />,
    previewVideo: toastVideo
  },
  {
    id: 10,
    title: "Search Bar",
    type: "modal",
    description: "Search with typeahead suggestions.",
    icon: "🔍",
    component: <SearchBar />,
    previewVideo: searchVideo
  },
  {
    id: 11,
    title: "Form Validation",
    type: "modal",
    description: "Forms with real-time error checking.",
    icon: "📝",
    component: <FormValidation />,
    previewVideo: formVideo
  },
  {
    id: 12,
    title: "Swiggy Dashboard",
    type: "page",
    description: "Food ordering dashboard with filters & cart.",
    icon: "🍔",
    component: <SwiggyDashboard />,
    previewVideo: swiggyRecording
  }
];