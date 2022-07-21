import React from "react";

export default function AdminLoggin({ credentials, fnSubmit, setCredentials }) {
  return (
    <div className="flex items-center justify-center h-screen w-screen pb-[200px] loggin-bg">
      <div className="bg-[#e8e5e5] h-[300px] flex justify-center items-center rounded-md w-[40vw]">
        <form
          className="flex flex-col w-[60%] items-center"
          onSubmit={fnSubmit}
        >
          <label className="py-1 self-start">Name *</label>
          <input
            type="text"
            className="w-[100%]"
            value={credentials.name || ""}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                name: e.target.value,
              })
            }
          />
          <label className="py-1 mt-5 self-start">Password *</label>
          <input
            type="password"
            className="w-[100%]"
            value={credentials.password || ""}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
          <button
            type="onSubmit"
            className="bg-[blue] hover:bg-blue-500 text-white font-bold py-2 rounded w-[80px] mt-8 text-center"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
