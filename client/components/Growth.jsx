import React from 'react'

function Growth () {

return (
    <><div className='square' id={`square${props.id}`}>
       {todoList.map((todoItem) => {
                return <li key={todoItem.id}><TodoItem todo={todoItem} /> </li>
              })}
    </div>
    </>
)
}

export default Growth
