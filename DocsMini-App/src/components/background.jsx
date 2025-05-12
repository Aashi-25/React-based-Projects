import React from 'react'
import Foreground from './foreground';

function Background() {
  return (
    <div>
      <div className='absolute top-[5%] navbar w-full py-3 flex justify-center text-zinc-600 font-semibold text-xl'>Documents</div>

      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </div>
    )

}

export default Background;