import React from 'react'

const AllProdCompo = () => {
  return (
    <div></div>
  )
}

export default AllProdCompo



// 'use client'
// import BASE_PATH_URL from "@/compoents/shared/Basepath";
// import { oneProductType } from "@/components/utils/SanityProductsTypes";

// import { Component,} from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Allcards from "./AllCards";

// export default class AllProdCompo extends Component<{ans:Array<oneProductType>}>{
//  st:number=3;
//  ed:number=6
//   state:{hasMore:boolean,items:Array<oneProductType>}={
// items:[...this.props.ans],
// hasMore:true,
//  }
   
//  fetchDataFromApiGradually = async (start: number, end: number) => {
//   const res = await fetch(`${BASE_PATH_URL}/api/products?start=${this.st}&end=${this.ed}`);
//   const dataToCheckAndSend = await res.json();

//   // console.log(dataToCheckAndSend);
//   if (dataToCheckAndSend.productArray === "Not found") {
//       this.setState({ hasMore: false })
//   }
//   return dataToCheckAndSend;
// }
    
//  onData=async()=>{
// // console.log(this.props?.ans)
// let allTogether = await this.fetchDataFromApiGradually(this.st, this.ed);
// if (allTogether.productArray !== "Not found") {
//     this.setState({
//         items: this.state.items.concat(allTogether.productArray)
//     })
// } else {
//     this.setState({
//         hasMore: false
//     })
// }
// this.st = this.st + 3;
// this.ed = this.ed + 3;
//  }

//     render(){
//         // console.log(this.props?.ans)
//         return(

//           <InfiniteScroll
//           dataLength={this.state.items.length}
//           next={this.onData}
//           hasMore={this.state.hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//               <p style={{ textAlign: 'center' }}>
//                   <b>Yay! You have seen it all</b>
//               </p>
//           }
//           className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
//       >

// {this.state.items.map((item: oneProductType, index: number) => (
  
//   <Allcards key={index} proDataSingle={item} />
// ))}

// </InfiniteScroll>

            

//         )
//     };
// }