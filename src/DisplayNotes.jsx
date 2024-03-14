import React, { Fragment, useContext } from 'react'
import { TaskContextApi } from './TaskProvider'

const DisplayNotes = () => {
  let {selective, handleCategory, task, handleDelete, handleUpdate} = useContext(TaskContextApi)

  let {selectedCategory} = selective;
  return (
    <section className='displaySection'>
      <div className="selectedNotes">
        <div className="selectDisplayBlock"
        name="selectedCategory"
        value={selectedCategory}
        onChange={handleCategory}
        >
          <label htmlFor="">Select the category</label>
          <input type="radio" name="selectedCategory" value="all"/><span>All</span>
          <input type="radio" name="selectedCategory" value="general"/><span>General</span>
          <input type="radio" name="selectedCategory" value="technical"/><span>Technical</span>
          <input type="radio" name="selectedCategory" value="official"/><span>Official</span>
        </div>
      </div>

      <main className='displayBlock'>
        <div className='displayContent'>
          {task.length==0 ? "Loading...." : task.length>0 && task.map((value)=>{
            return selectedCategory=="all" ? (
              <div className='output'>
                <h1 className='outputval'>Title: {value.title}</h1>
                <p className='outputval'>Description: {value.description}</p>
                <p className='outputval'>Category: {value.category}</p>
                <div className='bthCont'>
                  <button className='btn' onClick={()=>handleUpdate(value.id)}>Update</button>
                  <button className='btn' onClick={()=>handleDelete(value.id)}>Delete</button>
                </div>

              </div>
            ) : (
              selectedCategory==value.category && (
                <div className='output'>
                <h1 className='outputval'>Title: {value.title}</h1>
                <p className='outputval'>Description: {value.description}</p>
                <p className='outputval'>Category: {value.category}</p>
                <div className='btnCont'>
                  <button className='btn' onClick={()=>handleUpdate(value.id)}>Update</button>
                  <button className='btn' onClick={()=>handleDelete(value.id)}>Delete</button>
                </div>

              </div>
              )
            )
            
          })}
        </div>
      </main>
    </section>
  )
}

export default DisplayNotes