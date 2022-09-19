import React from 'react'

export const FooterMenu = ({MenuItems, MenuTitle }) => {
const items = Object.values(MenuItems);
  return (
    <div className="lg:m-4">
        <h2 className="uppercase my-10 letter-sp">{MenuTitle}</h2>
        <ul  className="uppercase font-bold">
            {items.map(item=>(<li  key={items.indexOf(item)} className="leading-10 tracking-wider letter-sp">{item}</li>))}
        </ul>
    </div>
  )
}
