import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

      <div className="user">
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="info">
          <span>john</span>
          <p>Posted 2 Days ago</p>
        </div>
        <div className="edit">
        <Link to={`/write?edit=2`}>
          <span>edit</span>
        </Link>
        <span>delete</span>
        </div>
      </div>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias incidunt sint saepe minima nemo eos ex totam obcaecati placeat, temporibus non nam quasi voluptate quod repudiandae cum, at magni?</h1>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation</p>



      </div>

    <Menu/>
    </div>
  )
}

export default Single