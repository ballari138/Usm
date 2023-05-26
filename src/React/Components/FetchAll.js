import React, { useState,useEffect } from 'react'
import MasterService from '../Services/MasterService';
import Pagination from './Pagination';
import AllStockItem from './AllStockItem';
import Nav from './Nav';

function FetchAll() {
    const [currentPage, setCurrentPage] = useState(1);
  const [pharmaciesPerPage, setPharmaciesPerPage] = useState(20);
  const [securityMaster,setSecurityMaster]=useState({
    data:[],
  loading:true});

  const onClickDelete=(isinNumber)=>{
    MasterService.deleteSingleRow(isinNumber).then((Response)=>{
      setSecurityMaster({
          data:Response.data,
          loading:false
      }     
) 
console.log(securityMaster.data)
  }
  ) 
}
        useEffect(()=>{
            MasterService.getAllData().then((Response)=>{
                setSecurityMaster({
                    data:Response.data,
                    loading:false
                }     
        )
                console.log(securityMaster.data)
            }
            ) 
        },[])
        
        const lastPharmacyIndex = currentPage * pharmaciesPerPage;
        const firstPharmacyIndex = lastPharmacyIndex - pharmaciesPerPage;
        const currentPharmacies = securityMaster.data.slice(
          firstPharmacyIndex,
          lastPharmacyIndex
        );
  return <> 
  <Nav></Nav>
  <div className="container">
  <AllStockItem securityMaster={currentPharmacies} onClickDelete={onClickDelete}></AllStockItem>
  <Pagination
              totalPharmacies={securityMaster.data.length}
              pharmaciesPerPage={pharmaciesPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Pagination>
  </div>
  </>
}

export default FetchAll