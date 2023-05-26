import React from 'react'
import MasterService from '../Services/MasterService'
function AllStockItem({securityMaster,onClickDelete}) {
   
  return (
    <div>
        <div>
                <div className="container">
                    <br></br>
                    <br></br>
                    <table className="table table-bordered">
                        <thead>
                        { 
                            <tr>
                                <th>Exchange</th>
                                <th>Country</th>
                                <th>Currency</th>
                                <th>ISIN Number</th>
                                <th>Symbol</th>
                                <th>CompanyName</th>
                                <th>Series</th>
                                <th>Sector</th>
                                <th>Industry</th>
                                <th>GICS</th>  
                                <th>Action</th> 
                            </tr>
}
                        </thead>
                        <tbody>
                            {
                             
                             securityMaster.map(item=>
                                (<tr key={item.isinNumber}>
                                    <td>{item.exchange}</td>
                                    <td>{item.country}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.isinNumber}</td>
                                    <td>{item.symbol}</td>
                                    <td>{item.nameOfCompany}</td>
                                    <td>{item.series}</td>
                                    <td>{item.sector}</td>
                                    <td>{item.industry}</td>
                                    <td>{item.gics}</td> 
                                    <td><div style={{display:'flex'}}><button className='btn btn-primary' style={{marginRight:"20px"}} onClick={()=>{console.log('I am update')}}>update</button>
                                    <button className='btn btn-danger' onClick={()=>{onClickDelete(item.isinNumber)}}>delete</button></div></td>
                                </tr>)
                                    
                             )
                                
                                
                           }
                        </tbody>

                    </table>
                </div>

            </div>
    </div>
  )
}

export default AllStockItem