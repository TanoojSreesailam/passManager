/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { IoIosCopy } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { AiFillDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Hero() {
  const [hide, setHide] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);

  const passwordRef = useRef();
  const ref = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleEye = () => {
    setHide(!hide);
  };

  const savePass = () => {
    if(form.site === "" && form.username=== "" && form.password===""){
      toast.warning(" Please type something to save", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(form.site === ""){
      toast.warning(" Please enter website URL to continue", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(form.username === ""){
      toast.warning(" Please enter username to continue", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(form.password === ""){
      toast.warning(" Please enter password to continue", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{

      console.log(form);
      setPasswordArray([...passwordArray, {...form, id:uuidv4()}]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
      console.log(passwordArray);
    }
  };

  const deletePass = (id) =>{
    if(id !== ""){
      toast.error(" Your password deleted.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("Deleting your password with id: ", id)
      setPasswordArray(passwordArray.filter(item=> item.id !== id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item)=> item.id !== id)));
    }
  }

  const addPass = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast.success("🦄 Hurray! Content copied", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="w-full py-16 h-full">
        <div className="md:px-6 px-2 flex flex-col g justify-center items-center py-2">
          <div className="">
            <h1 className="logo font-extrabold text-[#2f172f] md:text-2xl text-xl text-center ">
              <span className="text-green-600">&lt;</span>PassManager
              <span className="text-green-600">/&gt;</span>
            </h1>
            <p className="">Your own Password Manager</p>
          </div>

          <div className="flex flex-col gap-2 md:w-[60vw] w-full">
            <div className="w-full ">
              <input
                value={form.site}
                onChange={addPass}
                placeholder="Enter website URL"
                className="border-2 border-green-600 w-full py-2 rounded-full px-4"
                type="text"
                name="site"
                
              />
            </div>
            <div className="text-black md:flex-row flex flex-col gap-2 h-full relative">
              <input
                value={form.username}
                onChange={addPass}
                placeholder="Enter Username"
                className="text-black border-2 border-green-600 md:w-1/2 py-2 px-4 pr-12 rounded-full"
                type="text"
                name="username"
                
              />
              {!hide ? (
                <input
                  value={form.password}
                  onChange={addPass}
                  placeholder="Enter Password"
                  className="text-black border-2 border-green-600 md:w-1/2 py-2 px-4 pr-12 rounded-full"
                  type="password"
                  name="password"
                  
                />
              ) : (
                <input
                  value={form.password}
                  onChange={addPass}
                  placeholder="Enter Password"
                  className="text-black border-2 border-green-600 md:w-1/2 py-2 px-4 pr-12 rounded-full"
                  type="text"
                  name="password"
                  id=""
                />
              )}
              <div
                onClick={handleEye}
                className="absolute md:right-4 md:top-2 bottom-2 right-3 cursor-pointer"
              >
                {hide ? (
                  <BiSolidShow size={25} className="" />
                ) : (
                  <BiSolidHide size={25} className="" />
                )}
              </div>
            </div>
            <div  className="flex justify-center items-center mt-3">
              <button onClick={savePass} className="rounded-full py-3 px-8 flex items-center gap-2 bg-green-600 hover:bg-green-500 hover:border-slate-500 hover:border-1 font-bold text-sm uppercase ">
                Save
                <FaPlus/>
              </button>
              
            </div>
          </div>
          <div className="w-full lg:px-8 overflow-auto rounded-lg shadow">
            <h1 className="font-bold text-2xl  text-center  uppercase">
              Saved passwords
            </h1>
            <h2 className="font-bold text-xl pb-5 text-center pt-2">
              Your passwords
            </h2>
            {passwordArray.length === 0 && (
              <div className="text-lg text-gray-900 text-center">
                No passwords saved yet
              </div>
            )}
            {passwordArray.length != 0 && (
              <table className="table-auto w-full border border-black rounded-xl overflow-hidden p-2">
                <thead className="bg-green-600 border border-black">
                  <tr className="border border-black">
                    <th className=" text-start  p-2  border border-black">
                      Website URL
                    </th>
                    <th className=" text-start p-2 border border-black">
                      Usename
                    </th>
                    <th className=" text-start p-2 border border-black">
                      Password
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-green-100 text-black">
                  {passwordArray.map((item, i) => {
                    return (
                      <tr key={i} className="border border-black">
                        <td className="text-start p-2 border border-black ">
                          <div className="flex justify-between items-center w-full">
                            <a className="px-2 w-full" href={item.site}>{item.site}</a>
                            <div
                              onClick={() => {
                                copyText(item.site);
                              }}
                              className="cursor-pointer hover:text-green-800 text-zinc-800"
                            >
                              <IoIosCopy size={20}  />
                            </div>
                          </div>
                        </td>
                        <td className="text-start p-2">
                          <div className="flex justify-between items-center">
                            <a className="px-2" href={item.username}>{item.username}</a>
                            <div
                              onClick={() => {
                                copyText(item.username);
                              }}
                              className="cursor-pointer hover:text-green-800 text-zinc-800"
                            >
                              <IoIosCopy size={20} />
                            </div>
                          </div>
                        </td>
                        <td className="text-start p-2  border border-black">
                          <div className="flex justify-between items-center">
                            <a className="px-2" href={item.password}>{item.password}</a>
                            <div
                              
                              className="flex gap-2"
                            >
                              <IoIosCopy onClick={() => {
                                copyText(item.password);
                              }} className="cursor-pointer hover:text-green-800 text-zinc-800" size={20} />
                              <div onClick={()=> {deletePass(item.id)}} className="">
                                <AiFillDelete className="cursor-pointer hover:text-green-800 text-zinc-800" size={20}/>
                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
