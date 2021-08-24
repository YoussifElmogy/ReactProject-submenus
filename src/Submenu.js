import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, page: { page, links },
    location,} = useGlobalContext();
  const container =useRef(null);

  useEffect(()=>{
    const submenu = container.current;
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

  })
  const [columns, setColumns] = useState('col-2')

 
  return <div ref={container} className={`${isSubmenuOpen?'submenu show':'submenu'}`}>
    
    <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </div>
}

export default Submenu
