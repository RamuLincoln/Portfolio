import React from 'react';
import './Works.css';
import qrcode from './QRcode.png';
import phone from './phone.png';
import pf from './pf1.png';

const Works = () => {
  return (
    <section id='Works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <div className='worksImgs'>
            <div className='workscontent'>
                <img src={qrcode} alt='QRcode' className='worksImg' />
                <div className='worksdesc'>
                    <div className='worktitle'>Project : QRcode</div>
                    <div className='workpara'>This is a practice project of QRcode scanner page from frontend mentor</div>
                    <div className='worktech'>Technologies</div>
                    <div className='workpara'>HTML5, CSS</div>
                    <div className='workllinks'>
                        <button className='btn'><a href='https://ramu-qr-code.netlify.app' rel="noreferrer" target="_blank">Website</a></button>
                        <button className='btn'><a href='https://github.com/RamuLincoln/QRcode' rel="noreferrer" target="_blank">Github</a></button>
                    </div>
                </div>
            </div>
            <div className='workscontent'>
                <img src={phone} alt='phone' className='worksImg' />
                <div className='worksdesc'>
                    <div className='worktitle'>Project : Mobile store</div>
                    <div className='workpara'>This is a mobile store website where you can view, add and delete the number of items</div>
                    <div className='worktech'>Technologies</div>
                    <div className='workpara'>React JS, Redux, SCSS</div>
                    <div className='workllinks'>
                        <button className='btn'><a href='https://ramu-phone-site.netlify.app/' rel="noreferrer" target="_blank">Website</a></button>
                        <button className='btn'><a href='https://github.com/RamuLincoln/react' rel="noreferrer" target="_blank">Github</a></button>
                    </div>
                </div>
            </div>
            <div className='workscontent'>
                <img src={pf} alt='portfolio' className='worksImg' />
                <div className='worksdesc'>
                    <div className='worktitle'>Project : Portfolio</div>
                    <div className='workpara'>I have created my own Portfolio to showcase my skills. </div>
                    <div className='worktech'>Technologies</div>
                    <div className='workpara'>React JS</div>
                    <div className='workllinks'>
                        <button className='btn'><a href='https://ramu-port-folio.netlify.app' rel="noreferrer" target="_blank">Website</a></button>
                        <button className='btn'><a href='https://github.com/RamuLincoln/Portfolio' rel="noreferrer" target="_blank">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works