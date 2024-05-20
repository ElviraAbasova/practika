import React, { useEffect } from 'react'
import { getAllData } from '../../../service/requests'
import { productsURL } from '../../../service/api'
import { useSelector, useDispatch } from 'react-redux'
import { AddDatas } from '../../../redux/slices/productsSlice'

const Cards = () => {
    const dispatch = useDispatch()
    const datas = useSelector(state=> state.products.datas)
    useEffect(()=>{
        getAllData(productsURL).then(res=> {
            dispatch(AddDatas(res))


        })
       

    },[])
    
  return (
    <section id='cards'>
        <div className="container cards">
            <h3>POPULAR PRODUCTS</h3>
            <h2>OUR PRODUCTS</h2>
            <p>Lorem ipsum dolor,  facere eveniet itaque at quas dicta tempora maxime doloremque  orem ipsum dolor, sit amet consectetur adipisicing elit. Ad facere eveniet itaque at quasnda repudiandae esse.</p>

            <div className="posts">
                {datas && datas.map(data=>{
                    return(
                        <div className="post">
                            <div className="image">
                        <img src={data.image} alt="" />

                            </div>
                        <h3>{data.title}</h3>
                        <div className="rate">
                        <div className="star">
                        <i class="fa-solid fa-star"></i>
                        {data.stars}
                        </div>
                        <div className="like">
                        <i class="fa-solid fa-heart"></i>
                        29
                        </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetu aesentium, doloremque.</p>
                        <div className="button">
                            <button >CARD</button>
                            <button className='view'>VIEW</button>
                        </div>
                        
                        </div>

                    )
                })}
              
                
               
            </div>
        </div>
    </section>
  )
}

export default Cards