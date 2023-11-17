import React from 'react'
import '../components/admin.css'
import custom from '../images/Custom.png'



const Admin = () => {
  return (
    
    <div>
       <div>
           <h1>Social, Hebbal on Dhun Jam</h1>
       </div>

       
         <div className='admin'>
         <p>Do you want to charge your
                <br />customers for requesting songs? <br /><br />
                Custom song request amount- 
                <br /><br />Regular song request amounts <br /> from high to low</p>

               

               
              

            <div>
                <div>
                    <input type="radio" />
                    <div>
                        <input type="radio" />
                    </div>
                    
                </div>

                <div>
                <div>
                    <input type="text" />
                    <br /> <br />
                </div>
                <div className='admin2'>

                    
                   <div>
                    <input type="text" className='admin2' />
                   </div>
                   <div>
                    <input type="text" className='admin2'/>
                   </div>
                   <div>
                    <input type="text" className='admin2' />
                   </div>
                   <div>
                    <input type="text" className='admin2'/>
                   </div>
                    
                </div>
                </div>
            </div>

               
               
              

        
         </div>

         <img src={custom} alt="" />
         <br /> <br />

         <div>
            <button className='button'>Save</button>
         </div>
         
           

                


    </div>
  )
}

export default Admin;