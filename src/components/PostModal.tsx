import axios from "axios";
import React, { useState } from "react";

function PostModal(props: any) {
  const { setOption } = props;
  const emptyState: any = {
    itemName: "",
    itemID: "",
    itemPrice: "",
    itemAvailability: false,
    itemDate: null,
  };
  const [newitem, setNewitem]: any = useState(emptyState);
  const [addSuccess, setAddSuccess]: any = useState(false);
  const [addtried,setaddtried]:any=useState(false)
  const [loading,setloading]:any=useState(false)

  const inputHandler=(e:any)=>{
    const tempItem = newitem;

    if(e.target.name==="itemAvailability") 
       tempItem[`${e.target.name}`]=e.target.checked;
    else 
        tempItem[`${e.target.name}`]=e.target.value 
    setNewitem(tempItem)
  }

  const addItem=async(newItem:any)=>{
    await axios.post(`http://localhost:8000/add-item`,newItem).then((res:any)=>{
     setloading(false)
     if(res.data.createdAt){
      setAddSuccess(true)
     }

    }).catch((err)=>{
     console.log("ERROR",err)
    })
}

  const handleSubmit=()=>{
    if(newitem.itemName===""||
       newitem.itemID===""||
       newitem.itemPrice===""||
       newitem.itemDate===""
    ){
      alert("PLEASE GIVE VALID INPUTS")
    }
    else{
      setloading(true)
      setaddtried(true)
      addItem(newitem);
    }

  }


  return (
    <div
      onClick={(e: any) => e.stopPropagation()}
      className="bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm min-h-[400px]"
    >
      <div className="text-[30px] font-bold text-left">New Item</div>
      <div className=" p-1">
        { !addtried?
        <form>
          <div className="flex flex-col my-4 ">
            <span className="text-left font-semibold text-[14px] my-0">
              Item Name
            </span>
            <input
              required
              onChange={inputHandler}
              name="itemName"
              className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"
              placeholder="eg: Product 1"
              type="text"
            />
          </div>
          <div className="flex flex-col my-4 ">
            <span className="text-left font-semibold text-[14px] my-0">ID</span>
            <input
            required
            onChange={inputHandler}
            name="itemID"
              className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"
              placeholder="eg:101"
              type="text"
            />
          </div>

          <div className="flex flex-col my-4 ">
            <span className="text-left font-semibold text-[14px] my-0">
              Price
            </span>
            <input
            required
            onChange={inputHandler}
            name="itemPrice"
              className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"
              placeholder="eg: 10$"
              type="text"
            />
          </div>

          <div className="flex flex-row my-4 ">
            <input
            // required
            onChange={inputHandler}
            name="itemAvailability"
              className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"
              type="checkbox"
            />
            <span className="text-left font-semibold text-[14px] ml-2 my-0">
              Availability
            </span>
          </div>

          <div className="flex flex-col my-4 ">
            <span className="text-left font-semibold text-[14px] my-0">
              Manufacture date
            </span>
            <input
            required
              onChange={inputHandler}
              name="itemDate"
              className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"
              type="date"
            />
          </div>
        <div className="flex justify-end flex-row  mt-10 gap-3">
          <button
            onClick={() => setOption("none")}
            className="text-center text-[14px] font-semibold flex rounded-sm flex-row items-center w-fit px-3 py-1  text-black "
          >
            Cancel
          </button>
          <button
          type="submit"
          onClick={handleSubmit}
           className="bg-[#0E0C0C] text-center text-[14px] flex rounded-sm flex-row items-center w-fit px-3 py-1  text-white font-medium">
            Add Item
          </button>
        </div>
        </form>:null
        }
        {
          loading && addtried?
          <div className="mt-[15%]  text-[18px]">Loading...</div>:null
        }
        {
          addSuccess && !loading &&   addtried?
          <div className="mt-[15%] font-semibold text-[18px]">Item Successfully Added :)</div>:
          null
        }

      </div>
    </div>
  );
}

export default PostModal;
