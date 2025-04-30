import React from 'react';

const AvatarCard = ({ user }) => {
  const fullName = user?.data?.FullName;
  const firstName = fullName?.firstName || "";
  const lastName = fullName?.lastName || "";

  return (
    <div>
      <div className="text-white flex justify-end items-center p-2">
        <h1 className="mr-2">
          {fullName ? `${firstName} ${lastName}` : "Guest"}
        </h1>

        <div className="bg-red-500 rounded-full px-3 py-1">
          {fullName ? `${firstName[0].toUpperCase()}${lastName[0]?.toUpperCase() || ""}` : "G"}
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
