import React from 'react'

const AvatarCard = ({user}) => {
  return (
    <div>
        <div className="bg-red-100 flex justify-end items-center p-2">
        <h1 className="mr-2 font-medium text-gray-800">
          {user.data?.FullName
            ? `${user.data.FullName.firstName} ${user.data.FullName.lastName}`
            : "Guest"}
        </h1>

        <div className="bg-red-500 text-white rounded-full px-3 py-1">
          {user?.data?.FullName.firstName
            ? `${user.data.FullName.firstName[0].toUpperCase()}${user.data.FullName.lastName[0].toUpperCase()}`
            : "G"}
        </div>
      </div>
    </div>
  )
}

export default AvatarCard
