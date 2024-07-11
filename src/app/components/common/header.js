import React from 'react'
import '../common/css/header.css'

export default function Header({leftIcon='', title, rightIcon=''}) {
  return (
    <header class="header">
        {leftIcon && <div class="icon">
            {leftIcon}
        </div>}
        <div class="title" style={{textAlign:leftIcon ?'center':''}}>{title}</div>
        {rightIcon && <div class="icon right">
            {rightIcon}
        </div>}
    </header>
  )
}
