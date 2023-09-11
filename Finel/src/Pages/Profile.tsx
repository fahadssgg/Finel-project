import React, { useState, useEffect } from "react";
import SidePar from "../Components/SidePar";

interface UserInfo {
  name: string;
  email: string;
  password: string;
}
export default function Profile() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    // Retrieve user ID from local storage
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const updateUserProfile = async (data: Partial<UserInfo>) => {
    try {
      // Make a PUT request to update the name on the server
      const response = await fetch(
        `https://64f3989fedfa0459f6c6b193.mockapi.io/Userinfo/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: data.name,
            Password: data.password,
            email: data.email,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Name updated successfully!");
      } else {
        setErrorMessage("Failed to update name.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating name.");
    }
  };

  const handleChangeName = () => {
    updateUserProfile({ name });
  };

  const handleChangeEmail = () => {
    updateUserProfile({ email });
  };

  const handleChangePassword = () => {
    updateUserProfile({ password });
  };

  return (
    <>
          <div className="h-[60rem] flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
      <div className="h-[55rem] w-[90rem] bg-[#d9d9d9] bg-opacity-30 rounded-3xl ">

        <div className=" grid grid-cols-5  h-screen">
          <div className=" h-screen ">
            <SidePar />
          </div>

          <div className=" h-screen col-start-2 col-end-6 overflow-auto">
            <h1 className="text-5xl my-10 ml-10">Profile</h1>
            <div className="flex flex-col justify-center gap-14 items-center h-auto mt-24">
              <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl items-center">
                <label>Change Name</label>
                <div>
                  <input
                    className="rounded-2xl text-black p-2 bg-opacity-40 bg-[#B2E0E2]"
                    placeholder="Enter New Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  <button
                    className="ml-9 p-2 rounded-2xl bg-[#3E68AE] text-white"
                    onClick={handleChangeName}
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl items-center">
                <label>Change Email</label>
                <div>
                  <input
                    className="rounded-2xl text-black p-2 bg-opacity-40 bg-[#B2E0E2]"
                    placeholder="Enter New Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button
                    className="ml-9 p-2 rounded-2xl bg-[#3E68AE] text-white"
                    onClick={handleChangeEmail}
                  >
                    Change
                  </button>
                </div>
              </div>
              <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl items-center">
                <label>Change Password</label>
                <div>
                  <input
                    className="rounded-2xl text-black p-2 bg-opacity-40 bg-[#B2E0E2]"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    className="ml-9 p-2 rounded-2xl bg-[#3E68AE] text-white"
                    onClick={handleChangePassword}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </div>
      </div>
    </>
  );
}
