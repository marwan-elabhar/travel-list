import React from "react"

export default function Stats({items}) {
  if(!items.length) return <p className="stats"><em>Start adding some items to your packing list</em></p>
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((items.length /numPacked) * 100)
  
  return (
    <footer className="stats">
      <em>{percentage === 100 ? 'You got everything! Ready to go' : `You have ${items.length} items on your list and you already packed ${numPacked}`} </em>
    </footer>
  )

}