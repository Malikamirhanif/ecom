

import React from 'react'
export interface navItems{
   label:string,
   href:string,
   isDropDown:boolean,
   dropDownItem?:Array<navItems>,
}


export const navBarArray:Array<navItems>=[
   {
     label:"Female",
     href:"/female",
     isDropDown:true,
     dropDownItem:[
      
        {
          label: "Dresses",
          href: "female/dresses",
          isDropDown:false,
        },
        {
          label: "Shirts",
          href: "female/shirts",
          isDropDown:false,
        },
        {
          label: "Pents",
          href: "female/pents",
          isDropDown:false,
        },
        {
          label: "Jackets",
          href: "female/jacket",
          isDropDown:false,
        },  
     ]
   },
   {
    label:"Male",
    href:"/female",
    isDropDown:true,
    dropDownItem:[
      
      {
        label: "Dresses",
        href: "female/dresses",
        isDropDown:false,
      },
      {
        label: "Shirts",
        href: "female/shirts",
        isDropDown:false,
      },
      {
        label: "Pents",
        href: "female/pents",
        isDropDown:false,
      },
      {
        label: "Jackets",
        href: "female/jacket",
        isDropDown:false,
      },  
   ]
  },
  {
    label:"Kids",
    href:"/female",
    isDropDown:false,
  },
  {
    label:"All Products",
    href:"/allProduct",
    isDropDown:false,
  },
]
