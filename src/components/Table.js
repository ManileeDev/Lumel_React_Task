import React, { useState } from 'react'

const Table = () => {
  const initialData = {
    "rows": [
      {
        "id": "electronics",
        "label": "Electronics",
        "value": 1400, //this value needs to be calculated from the children values (800+700)
        "input" : "",
        "children": [
          {
            "id": "phones",
            "label": "Phones",
            "value": 800,
            "input" : "",
          },
          {
            "id": "laptops",
            "label": "Laptops",
            "value": 700,
            "input" : "",
          }
        ]
      },
      {
        "id": "furniture",
        "label": "Furniture",
        "value": 1000, //this need to be calculated from the children values (300+700)
        "input" : "",
        "children": [
          {
            "id": "tables",
            "label": "Tables",
            "value": 300,
            "input" : "",
          },
          {
            "id": "chairs",
            "label": "Chairs",
            "value": 700,
            "input" : "",
          }
        ]
      }
    ]
  }
  const handleChange = (e,id) => {
    console.log(id)
    //  setTableData(TableData,{...TableData[id].input : e.target.value})
  }
  const [TableData, setTableData] = useState(initialData)
  const varience = 400
  return (
    <div className='container'>
      <table className='table' border="1px">
        <thead>
          <td>Label</td>
          <td>Value</td>
          <td>Input</td>
          <td>Allocation %</td>
          <td>Allocation Value</td>
          <td>Varience</td>
        </thead>
        <tbody>
          {TableData?.rows.map(data => (
            (!data.children ? <tr key={data.id}>
              <td>{data.label}</td>
              <td>{data.value}</td>
              <td><input type="text" value={data.input} onChange={handleChange(data.id)}/></td>
              <td><button>Alloc %</button></td>
              <td><button>Alloc Val</button></td>
              <td>{varience ?? ""}</td>
            </tr> :
              <tr>
                <td>{data.label}</td>
                <td>{data.children[0].value + data.children[1].value}</td>
                <td><input type="text" value={data.input} onChange={handleChange}/></td>
                <td><button>Alloc %</button></td>
                <td><button>Alloc Val</button></td>
                <td>{varience ?? ""}</td>
                {data.children.map(child => (
                  <tr key={child.id}>
                    <td>{child.label}</td>
                    <td>{child.value}</td>
                    <td><input type="text" value={child.input} onChange={handleChange}/></td>
                    <td><button>Alloc %</button></td>
                    <td><button>Alloc Val</button></td>
                    <td>{varience ?? ""}</td>
                  </tr>
                ))}
              </tr>)
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
