import React, { useState } from "react";
import logo from '../ui/logo1.svg';

function  Sidebar(){
     
    const [nav, setNav] =useState([
        { label :"Home", slug :"/", icon: "icon-home"},
        { label :"Discover", slug :"discover", icon: "icon-price-tag"},
        { label :"Categories", slug :"cates", icon: "icon-list"},
        { label :"My Courses", slug :"my-courses", icon: "icon-briefcase"},
    ])
    const [currentPage ,setCurrentPage] =  useState([

    ])
    var navigation = [];
    for(let i=0;i< nav.length;i++){
        navigation.push(
            <li key ={"nav" + i + " " + nav[i].slug}>
                <a href={nav[i].slug} className={"link bl noul flex c333" +(currentPage == nav[i].slug ? " on" : " ")}>
                    <div className={"ico  s20 "+ nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </a>
            </li>


        )
    }
    return(
        <div className="sidebar rel">
         <a href="#" className="logo b1">
            <img src={ logo } className="b1" />
         </a>
         <ul className="nav">
             {navigation}
            </ul>
            <div className="updated-course flex">
                <div className="icon-lamp-bright ico" />
                <div className="lbl s15 fontb c333">
                    Updated Courses
                    <h2 className="author s13 c777">by Anshu</h2>
                </div>

            </div>
            <div className="stats flex">
                <div className="stats-box-flex">
                    <div className ="ico ico-s24 icon-shield" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s13 c777">points</h2>
                </div>
                </div>
                <div className="stats-box-flex">
                    <div className ="ico icon-list2" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">complete</h2>
                </div>
                <div className="me flex">
                    <div className ="photo cfff s24">
                    
                    </div>
                    <div className="lbl s15  fontb c333">
                        Anshu 
                    </div>
                    
                </div>
            
        </div>
    )
}
export default Sidebar;