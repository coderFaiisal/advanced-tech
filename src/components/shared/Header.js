import React from "react";
import logo from "../../../public/logo.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { HiChevronDown, HiSquare3Stack3D, HiMiniHome } from "react-icons/hi2";
import Image from "next/image";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsBuildingAdd,
} from "react-icons/bs";
import { IoCubeSharp } from "react-icons/io5";
import { CgSmartphoneRam } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "blue",
    name: "CPU/Processor",
    link: "/products?category=CPU/Processor",
    icon: BsFillCpuFill,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    name: "Motherboard",
    link: "/products?category=Motherboard",
    icon: BsFillMotherboardFill,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "green",
    name: "RAM",
    link: "/products?category=RAM",
    icon: CgSmartphoneRam,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "purple",
    name: "Power Supply Unit",
    link: "/products?category=Power Supply Unit",
    icon: ImPower,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "teal",
    name: "Storage Device",
    link: "/products?category=Storage Device",
    icon: LuHardDrive,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "cyan",
    name: "Monitor",
    link: "/products?category=Monitor",
    icon: FiMonitor,
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "pink",
    name: "Other",
    link: "/products?category=Other",
    icon: BsBuildingAdd,
    description: "Learn about our story and our mission statement.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map((list) => (
    <a href="#" key={list?.name}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className={`rounded-lg p-5 ${colors[list?.color]}`}>
          {React.createElement(list?.icon, {
            className: "h-6 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm"
          >
            {list?.name}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {list?.description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <HiSquare3Stack3D className="h-[18px] w-[18px]" />
              Categories
              <HiChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <HiChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <HiMiniHome className="h-[18px] w-[18px]" />
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <IoCubeSharp className="h-[18px] w-[18px]" />
          Products
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <SiCoinmarketcap className="h-[18px] w-[18px]" />
          Marketplace
        </ListItem>
      </Typography>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image src={logo} alt="logo" width={170} />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="gradient" size="sm" color="blue">
            PC Builder
          </Button>
          {/* <Button variant="gradient" size="sm"></Button> */}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross1 className="h-6 w-6" strokeWidth={2} />
          ) : (
            <HiMiniHome className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Sign In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;
