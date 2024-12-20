import React from 'react'

const Cards = ({ item }) => {
    console.log(item);
  return (
    <>

    {/* there are still some issues here (responsiveness)  */}

    <div className="mt-4 my-3 p-3">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{ item.category }</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${ item.price }</div>
      <div className="badge badge-outline hover:bg-red-600 duration-300 hover:text-white cursor-pointer px-2 py-1 rounded-1g border-[2px] ">buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards