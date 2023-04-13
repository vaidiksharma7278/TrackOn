
import { FaAngleDown } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

// import { setAuth } from "redux/authSlice";
import toast from "react-hot-toast";

import { Menu, Transition } from "@headlessui/react";
import {  Fragment } from "react";
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import  avatar from "../Images/avatar.png"
import logo from "../Images/logo.png"
export default function Navbar2() {
//   const { isAuth, user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const router = useNavigate();

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       await logout();
//       dispatch(setAuth({ data: null }));
//       toast.success("logged out");
//       router("/");
//     } catch (e) {
//       toast.error("unable to logout");
//     }
//   };
// const [ user, setLoginUser] = useState({})

const user=localStorage.getItem('user');
let navigate=useNavigate();
const logout =()=>{
 
  localStorage.clear();

  navigate('/');
}
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-16 bg-white">
      <div className="flex items-center justify-between w-11/12 mx-auto lg:w-10/12 ">
        <div>
          <Link to="/">
            <a className="flex items-center gap-2">
              <img
                alt="trackOn-logo"
                src={logo}
                className="object-contain w-13 h-9"
              />
              <h1 className="hidden font-bold tracking-tight uppercase cursor-pointer lg:block">
                <span className="text-3xl text-blue-500">Track</span>On
              </h1>
            </a>
          </Link>
        </div>
          {user ? 
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <a className="text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50 btn-sm">
                Profile
              </a>
            </Link>
            <Dropdown  user={user} logout={logout} />
          </div>
          : (
        <div className="flex items-center gap-4">
            <Link to="/login">
              <p className="font-bold btn btn-ghost hover:bg-blue-50">Login</p>
            </Link>
          <Link to="/signup">
             <button className="font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50">
               Register
              </button>
            </Link>
           </div>
         )}
      </div>
    </nav>
  );
}

function Dropdown({ user, logout}) {
  /* eslint-disable react/display-name */
//   const CustomLink = forwardRef((props, ref) => {
//     let { href, children, ...rest } = props;
//     return (
//       <Link href={href}>
//         <a ref={ref} {...rest}>
//           {children}
//         </a>
//       </Link>
//     );
//   });

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center gap-2">
            <div className="cursor-pointer avatar">
              <div className="w-10 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img
                  alt="avatar"
                  src={avatar}
                  className="object-top"
                />
              </div>
            </div>
            <FaAngleDown className="cursor-pointer" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-4 mt-2 space-y-4 origin-top-right bg-white divide-y divide-gray-100 shadow-lg md:p-6 md:w-96 rounded-xl ring-opacity-5 focus:outline-none">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer avatar">
                <div className="w-20 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="avatar"
                    src={avatar}
                    className="object-top"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold">{user?JSON.parse(user).name:""}</h2>
                <h3 className="text-sm font-semibold">{user?JSON.parse(user).email:""}</h3>
              </div>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link to="/dashboard">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <MdOutlineDashboard className="text-base font-bold" />
                    Dashboard
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/explore">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <FiBook className="text-base font-bold" />
                    Explore Courses
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <AiOutlineUser className="text-base font-bold" />
                    Profile
                  </a>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link href="/dashboard/settings">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <BiCog className="text-base font-bold" />
                    Settings
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={logout}
                  className="flex items-center w-full p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl"
                >
                  <TbLogout className="text-base font-bold" />
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
