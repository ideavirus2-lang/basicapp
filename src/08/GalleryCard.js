import React from 'react'

export default function GalleryCard({item}) {
    // const item = {
    //         "galContentId": "3591024",
    //         "galContentTypeId": "17",
    //         "galTitle": "하도해수욕장",
    //         "galWebImageUrl": "https://tong.visitkorea.or.kr/cms2/website/24/3591024.jpg",
    //         "galCreatedtime": "20251231160030",
    //         "galModifiedtime": "20261116202132",
    //         "galPhotographyMonth": "202509",
    //         "galPhotographyLocation": "제주특별자치도 제주시 구좌읍",
    //         "galPhotographer": "김계호",
    //         "galSearchKeyword": "하도해수욕장, 제주특별자치도 제주시, 제주도, 바다, 바닷가, 보트, 자전거, 사진기자단, 프레임코리아3기"
    // }

    //배열
    let sptags = item.galSearchKeyword.includes(',') ? item.galSearchKeyword.split(',') : [item.galSearchKeyword];
    sptags = sptags.map(kw => <span
                                className='inline-block bg-gray-200
                                          rounded-full px-3 py-1
                                          text-sm font-semibold
                                          text-gray-700 mr-2 mb-2'
                                key = {kw}>{kw}</span>)

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='h-48 w-full'
            src={item.galWebImageUrl.includes('http:')
                ? item.galWebImageUrl.replace('http:','https:')
                : item.galWebImageUrl}
            alt = {item.galTitle}/>

        <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>
                {item.galTitle}
            </div>

            <div className='text-gray-700'>
                {item.galPhotographyLocation}
            </div>            
        </div>
        
        <div className='px-6 pt-4 pb-2'>
            {sptags}
        </div>
      
    </div>
  )
}
