// "use client"
// import { BiCheck } from 'react-icons/bi';
// import Scrollbar from '@/components/ui/scrollbar';

// type ProgressProps = {
//   data: any;
//   status: number;
// };

// const ProgressBox: React.FC<ProgressProps> = ({ status, data }) => {

//   return (
//     <Scrollbar
//       className="w-full h-full"
//       options={{
//         scrollbars: {
//           autoHide: 'never',
//         },
//       }}
//     >
//       <div className="flex flex-wrap w-full flex-row pt-8 pb-10 justify-center">
//         {data?.data?.map((item: any, index: number) => (
//           <div className="block w-3/12" key={index}>
//             {status >= item?.serial ? (
//               <div className="text-center">
//                 <div className="relative">
//                   <span className="h-[33px] w-[33px] md:h-[55px] md:w-[55px] mx-auto border-solid border-2 md:border-4 border-white flex items-center justify-center bg-skin-primary rounded-full mb-3 z-10 relative">
//                     <BiCheck className="text-white" size={25} />
//                   </span>
//                   <div
//                     className={`absolute ${index === 0 ? 'w-1/2 end-0' : 'w-full start-0'
//                       } ${data?.data?.length - 1 === index && 'w-1/2 start-0'
//                       } top-1/2 transform-[1/2] h-[5px] bg-skin-primary`}
//                   ></div>
//                 </div>
//                 <p className="text-skin-base text-[12px] md:text-[14px] font-700">
//                   {item?.name}
//                 </p>
//               </div>
//             ) : (
//               <div className="text-center">
//                 <div className="relative">
//                   <span className="h-[33px] w-[33px] md:h-[55px] md:w-[55px] mx-auto border-solid border-2 md:border-4 border-white flex items-center justify-center bg-[#E2E7EC] rounded-full mb-3 z-10 relative">
//                     <BiCheck className="text-white" size={25} />
//                   </span>
//                   <div
//                     className={`absolute ${index === 0 ? 'w-1/2 end-0' : 'w-full start-0'
//                       } ${data?.data?.length - 1 === index && 'w-1/2 start-0'
//                       } top-1/2 transform-[1/2] h-[5px] bg-[#E2E7EC]`}
//                   ></div>
//                 </div>
//                 <p className="text-skin-base text-[12px] md:text-[14px] font-700">
//                   {item?.name}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </Scrollbar>
//   );
// };

// export default ProgressBox;

"use client"
import { BiCheck } from 'react-icons/bi';
import Scrollbar from '@/components/ui/scrollbar';

type ProgressProps = {
  data: any;
  status: number;
};

const ProgressBox: React.FC<ProgressProps> = ({ status, data }) => {
  return (
    <Scrollbar
      className="w-full h-full"
      options={{
        scrollbars: {
          autoHide: 'never',
        },
      }}
    >
      <div className="flex flex-wrap w-full flex-row pt-8 pb-10 justify-center">
        {data?.data?.map((item: any, index: number) => (
          <div className="block w-3/12" key={index}>
            {status >= item?.serial ? (
              <div className="text-center">
                <div className="relative">
                  <span className="h-[33px] w-[33px] md:h-[55px] md:w-[55px] mx-auto border-solid border-2 md:border-4 border-white flex items-center justify-center bg-skin-primary rounded-full mb-3 z-10 relative">
                    <BiCheck className="text-white" size={25} />
                  </span>
                  <div
                    className={`absolute ${index === 0 ? 'w-1/2 end-0' : 'w-full start-0'}
                    ${data?.data?.length - 1 === index && 'w-1/2 start-0'} 
                    ${item?.name === 'Доставлен' || item?.name === 'Получено' ? 'wefvwfbssss' : ''} 
                    top-1/2 transform-[1/2] h-[5px] bg-skin-primary`}
                  ></div>
                </div>
                <p className="text-skin-base text-[12px] md:text-[14px] font-700">
                  {item?.name}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="relative">
                  <span className="h-[33px] w-[33px] md:h-[55px] md:w-[55px] mx-auto border-solid border-2 md:border-4 border-white flex items-center justify-center bg-[#E2E7EC] rounded-full mb-3 z-10 relative">
                    <BiCheck className="text-white" size={25} />
                  </span>
                  <div
                    className={`absolute ${index === 0 ? 'w-1/2 end-0' : 'w-full start-0'}
                    ${data?.data?.length - 1 === index && 'w-1/2 start-0'} 
                    ${item?.name === 'Доставлен' || item?.name === 'Получено' ? 'wefvwfbssss' : ''} 
                    top-1/2 transform-[1/2] h-[5px] bg-[#E2E7EC]`}
                  ></div>
                </div>
                <p className="text-skin-base text-[12px] md:text-[14px] font-700">
                  {item?.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Scrollbar>
  );
};

export default ProgressBox;
