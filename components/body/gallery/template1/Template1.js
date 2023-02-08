import ImageLoader from 'components/commons/image/ImageLoader'

const Template1 = ({data}) => {

    const {items,css} = data;

    return(
        <>
            <div className={"single-gallery-container f-l w-100"}>
                <div className={"single-gallery-container-inner row no-gutters"}>

                    {
                        items && items.map((item,i) => {

                            return(
                                <div
                                    className={`${Counter[i] === 'left' && 'col-md-8' || 'col-md-4'} image w-100`}
                                    key={i}
                                >
                                    <ImageLoader
                                        src={item}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        type="relative"/>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <style jsx>{`
          
            .single-gallery-container{
                padding: 80px 0 55px 0;
            }
            
            .single-gallery-container-inner{
               max-width: 1167px;
               margin: 0 auto;
            }
            
            .image{
               height: 468px;
               padding-bottom: 14px;
            }
            
            .image:nth-child(2n){
                padding-left: 14px;
            }
            
          `}</style>
        </>
    )
}

export default Template1

const Counter = {
    0: 'left',
    1: 'right',
    2: 'right',
    3: 'left',
    4: 'left',
    5: 'right',
    6: 'right',
    7: 'left',
    8: 'left',
    9: 'right',
    10: 'right',
    11: 'left',
    12: 'left',
    13: 'right',
    14: 'right',
    15: 'left',
    16: 'left',
    17: 'right',
    18: 'right',
    19: 'left',
    20: 'left',
    21: 'right',
    22: 'right',
    23: 'left',
    24: 'left',
    25: 'right',
    26: 'right',
    27: 'left',
    28: 'left',
    29: 'right',
    30: 'right',
    31: 'left',
}