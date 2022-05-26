

import React from 'react'
import Emoji from '../Emoji.json'
class Emojidata extends React.Component{
    constructor(){
        super()
        this.state={
            Emojisearch:''
        }
    }
    Emojisearch=(e)=>{
        this.setState({
            Emojisearch:e.target.value
        })
        
    }
    render(){
        return(
            <div className='searchbar'>
                <h1>Emoji  search</h1>
                <input type='text' placeholder='search...........' onChange={this.Emojisearch} />
                {Emoji.filter(Emoji=>{
                    return(
                        Emoji.title.toLowerCase().includes(this.state.Emojisearch.toLowerCase())

                        
                        ||Emoji.symbol.toLowerCase().includes(this.state.Emojisearch.toLowerCase())


                    )
                }).map(Emoji=>{
                    return(
                        <div className='input'>
                        <div className='emoji'>
                            {Emoji.symbol}
                            {Emoji.title}
                        </div>
                        </div>
                    )
                })
                }
                
            </div>
        )
    }
}
export default Emojidata

// function Emoj() {
  
//     return (
//       <div className="App">
//         <h1> Emoji Search</h1>
//         {
//           function handleChange(){
//             console.log('hello');
//           }
//         }
//             <input  type='text'  placeholder='searchbar' onChange={handleChange()}/>
//               {
//               Emoji.map(Emoji=>{
//               return(
//               <div className='emoji'>
//                 {
//                   Emoji.symbol
//                 }
//                 {Emoji.title}
//               </div> 
//             )
//           })

//         }
        
//       </div>
//     );
//   }
  
//   export default Emoj;
  







// function Emoj() {
  
//     return (
//       <div className="App">
//         <h1> Emoji Search</h1>
//         {
//           function handleChange(){
//             console.log('hello');
//           }
//         }
//             <input  type='text'  placeholder='searchbar' onChange={handleChange()}/>
//               {
//               Emoji.map(Emoji=>{
//               return(
//               <div className='emoji'>
//                 {
//                   Emoji.symbol
//                 }
//                 {Emoji.title}
//               </div> 
//             )
//           })

//         }
        
//       </div>
//     );
//   }
  
//   export default Emoj;
  