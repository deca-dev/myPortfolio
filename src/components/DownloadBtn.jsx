import React from 'react'
import Pdf from '../assets/David-Castro-Resume.pdf'

const DownloadBtn = () => {
  return (
    <div>
        <a href={Pdf} download='CV' target="_blank" rel='noreferrer'>
            <button
              class="px-10 py-4 bg-blue-500 rounded-full drop-shadow-lg text-xl border text-white duration-300 hover:bg-amber-500"
              >

              <i class="fa-solid fa-download mr-3"></i>
              Download CV
            </button>
              </a>
          </div>
  )
}

export default DownloadBtn