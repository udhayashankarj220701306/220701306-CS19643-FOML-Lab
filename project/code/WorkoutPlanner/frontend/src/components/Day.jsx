import React from 'react'
import { useUserStore } from '../stores/useUserStore';

const Day = (props) => {
  const {user} = useUserStore();
  const day =Math.ceil((new Date().getTime() - new Date(user.startDate).getTime())/(1000*60*60*24));

  // console.log(day);
  return (
    <div className={`flex-shrink-0 w-20 p-2 text-center rounded-full ${
    props.ithday < day
      ? "bg-red-500"
      : props.ithday === day
      ? "bg-green-500"
      : "bg-gray-900"
  } m-2 snap-start`}>
        <div className="text-white text-2xl font-semibold">{props.ithday}</div>
        <div className="text-white text-2xl text-gray-500">
            Day
        </div>
  </div>
  )
}

export default Day