

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
          label: "T-Shirts",
          href: "female/t-shirts",
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
        {
          label: "Sweaters",
          href: "female/sweater",
          isDropDown:false,
        }
     ]
   },
   {
    label:"Male",
    href:"/male",
    isDropDown:true,
    dropDownItem:[
      {
        label: "Sweaters",
        href: "male/sweater",
        isDropDown:false,
      },
      {
        label: "Jackets",
        href: "male/jacket",
        isDropDown:false,
      },  
   ]
  },
  {
    label:"Kids",
    href:"/kids",
    isDropDown:false,
  },
  {
    label:"All Products",
    href:"/allProduct",
    isDropDown:false,
  },
]
