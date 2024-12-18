"use client";
import { useState } from "react";
import Header from "../(components)/Header";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux";
import { setIsDarkMode, setIsNotification } from "@/state"; // Import setIsNotification

type UserSetting = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSetting[] = [
  { label: "Username", value: "akshansh_singh", type: "text" },
  { label: "Email", value: "akshanshsingh00@gmail.com", type: "text" },
  { label: "Notification", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
];

const Settings = () => {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);
  const dispatch = useDispatch();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const isNotification = useAppSelector((state) => state.global.isNotification);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const toggleIsNotification = () => {
    dispatch(setIsNotification(!isNotification));
  };

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    const setting = settingsCopy[index];

    if (setting.label === "Dark Mode" && setting.type === "toggle") {
      toggleDarkMode();
      setting.value = !isDarkMode;
    } else if (setting.label === "Notification" && setting.type === "toggle") {
      toggleIsNotification();
      setting.value = !isNotification;
    } else {
      setting.value = !setting.value as boolean;
    }

    setUserSettings(settingsCopy);
  };

  return (
    <div className="">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-23 px-4 uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-23 px-4 uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr className="hover:bg-blue-50" key={setting.label}>
                <td className="py-2 px-4">{setting.label}</td>
                <td className="py-2 px-4">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer  
                        transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                      value={setting.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...userSettings];
                        settingsCopy[index].value = e.target.value;
                        setUserSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
