'use client'

import { useRouter } from "next/navigation";
import Items from "../component/Items";
import { useEffect, useState } from "react";

const Page = () => {
  const [ blog, setBlog ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ loading, setLoading ] = useState(true);
  const router = useRouter();

  {loading ? <p>Loading...</p> : blog.map((item) => (
    <div key={item.id}>
      <Items data={item} />
    </div>
  ))}


  const fetchData = async () => {
    const rawData = await fetch(`https://dev.to/api/articles?per_page=9&page=${page}`);
    const data = await rawData.json();
    setLoading(true);
    setLoading(false);
    setBlog(data);
  }
  console.log(blog);

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/Page1')
  }

  const handleInputValue = () => {
    setPage(page + 1);
    console.log(page)
  }

  const handleInputValueNegative = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <div className="navbar">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="icon"/>
        <div className="nav-stuff">
          <div className="nav-contact">Contact</div>
          <div className="nav-about-us">About Us</div>
        </div>
          <img src="https://www.svgrepo.com/show/343494/profile-user-account.svg" className="user-icon" onClick={handleClick}/>
      </div>
        <div className="page-center">
          {blog.map((item, index) => {
            return (
              <div>
                <div key={item.id}>
                <Items data={item} />
                </div>
              </div>
            )
          })}
      </div>
      <div className="newPageContainer">
        <img src="https://www.svgrepo.com/show/67833/left-arrow.svg" className="back-arrow" onClick={handleInputValueNegative}/>
        <div className="newPageNumber">{page}</div>
        <img src="https://www.svgrepo.com/show/27797/right-arrow.svg" className="next-arrow" onClick={handleInputValue}/>
      </div>
    </div>
    
  )
}

export default Page;