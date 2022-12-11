import React, { useState } from 'react';

const CardPortfolio = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='fas fa-heart'></i>
            {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal} >
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* ----------------Popup modal */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'>
            <div className='modal-cont d_flex'>
              <div className='modal-img left'>
                <img src={props.image} alt="" />
              </div>
              <div className='modal-text right'>
                <span>Featured - Design</span>
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis possimus provident iure cumque quia labore unde quod consequatur inventore nulla, quas blanditiis quam explicabo iusto animi voluptatem quo aperiam!</p>
                <div className='button f_flex mtop'>
                  <button className='btn_shadow'>
                    LIKE THIS
                  </button>
                  <button className='btn_shadow'>
                    VIEW PROJECT <i className='fas fa-chevron-right'></i>
                  </button>
                </div>
                <button className='close-modal btn_shadow' onClick={toggleModal}>
                  <i className='fas fa-times'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default CardPortfolio;
