import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
function Category() {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="gird grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*first col*/}
                    <div>
                        <div>
                            <div className='py-10 pl-5 bg-gradient '></div>
                        </div>
                     </div>
                    {/*second col*/}
                    {/*third col*/}
                </div>
            </div>
        </div>
    )
}

export default Category

    < img src = { Image1 } alt = "Earphone" />
  <img src={Image2} alt="Earphone" />
  <img src={Image3} alt="Earphone" />