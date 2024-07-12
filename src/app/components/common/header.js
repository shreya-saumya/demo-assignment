import React from 'react'
import '../common/css/header.css'

export default function Header({leftIcon='', title, rightIcon=''}) {
  return (
    <header className="header">
        {leftIcon && <div className="icon">
            {leftIcon}
        </div>}
        <div className="title" style={{textAlign:leftIcon ?'center':''}}>{title}</div>
        {rightIcon && <div className="icon right">
            {rightIcon}
        </div>}
    </header>
  )
}
