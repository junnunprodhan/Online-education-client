// import React from 'react';
// import { useState } from 'react';

// const Toggle = () => {
//     const [selected, setSelected] = useState(true);
//     return (
//         <div className='flex items-center'>
//             <div
//                 onClick={() => setSelected(!selected)}
//                 className={classNames('flex w-16 bg-gray-500 mr-2 rounded-full transition-all duration-500',
//                     {
//                         'bg-green-500 ': selected,
//                     }

//                 )}
//             >
//                 <span
//                     className={classNames('w-6 h-6  bg-white rounded-full transition-all duration-500 shadow-xl',
//                         {
//                             'ml-10': selected,
//                         }
//                     )}
//                 />
//             </div>
//             <div className='text-black font-semibold '>{selected ? "Light" : "Dark"}</div>

//         </div>
//     );
// };

// export default Toggle