import React, { useState } from "react";
import axios from "axios";


const PaginationPage = (props,recipesPerPage) => {
  const numOfPages = [];
  const pages= 5;
 
  const [currentButton, setCurrentButton] = useState(1);
/*   let [length, setLegth] = useState(1);

  const [values, setValues] = useState({
    totalPage: 0
  });
  
  useEffect(async () => {
    const result = await axios("http://localhost:5001/api/recipes/length");
    setValues({ ...values, totalPage: 11 });

    debugger;
    const totalPage=Math.ceil(length / 3)
  }, []); */

  let [responseData, setResponseData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios("http://localhost:5001/api/recipes/length")
    .then((response) => {
      let count = Math.ceil(response.data/3);
      //debugger;
      for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
        
      }
      //debugger;
      setResponseData(count);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


  return (
    <div className="clearfix">
      {responseData}
      <ul className="Pagination">
        <li className={`${currentButton===1 ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link" 
        onClick={()=>setCurrentButton((prev) =>prev===1? prev :prev -1)}
        >Previous</a></li>
        {
            numOfPages.map((pages,index)=>{
                return (
                            <li key={index} className={`${currentButton===pages? 'page-item active': 'page-item'}`}><a href="#!" className="page-link"
                            onClick={()=>props.changePageNumber(pages) }
                            >{pages}</a></li>
                )
                
            })
        }
        <li className={`${currentButton===numOfPages.length ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link" 
        onClick={()=>setCurrentButton((prev) =>prev===numOfPages.length ? prev :prev +1)}
        >Next</a></li>
      </ul>
    </div>
  );
  };


export default PaginationPage;




/*  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b>out of <b>25</b> entries{" "}
      </div>
      <ul className="Pagination">
        <li className={`${currentButton===1 ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link" 
        onClick={()=>setCurrentButton((prev) =>prev===1? prev :prev -1)}
        >Previous</a></li>
        {
            numOfPages.map((page,index)=>{
                return (
                            <li key={index} className={`${currentButton===page? 'page-item active': 'page-item'}`}><a href="#!" className="page-link"
                            onClick={()=>setCurrentButton(page)}
                            >{page}</a></li>
                )
                
            })
        }



        <li className={`${currentButton===numOfPages.length ? 'page-item disabled':'page-item'}`}><a href="#!" className="page-link" 
        onClick={()=>setCurrentButton((prev) =>prev===numOfPages.length ? prev :prev +1)}
        >Next</a></li>
      </ul>
    </div>
  ); */ 