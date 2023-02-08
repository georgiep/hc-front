import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Router,{ useRouter } from 'next/router'
// import { StateContext } from 'context/DataContext'
// import { bodyListDynamic } from 'components/dynamicComponents'
// import { fetchNextData } from "next/dist/shared/lib/router/router"

export default function PrefetchLink({ children, pathname, api, width, external }) {
  const router = useRouter()
  // const { language, referrer, schema } = useContext(StateContext)

  const [prefetchLink, setPrefetchLink] = useState(false)
  //const url = `/Page?lang=${language}&api=${api}&pathName=${pathname}&referrer=${referrer}`
  const url = `/Page?pathName=${pathname}&referrer=aquavista`
 
  if(external){
    return(
        <a href={pathname} target={'_blank'}>{children}</a>
    )
  }
  // const dataURL = new URL('http://localhost:5554' + url)

  // useEffect(() => {
  //   if (prefetchLink)
  //     schema.pages.map(
  //       page =>
  //         page.api === api && page.components.map(d => bodyListDynamic[d.component_name][d.template].render.preload())
  //     )
  // })

  // if (params) {
  //   Object.entries(params).forEach(([key, value]) => {
  //     dataURL.searchParams.append(key, value)
  //   })
  // }
  // console.log(dataURL)
  // console.log(dataURL.toString())
  // console.log(dataURL)
  // console.log(dataURL.toString())
  // console.log(pathname)
  // console.log('---')
  // const dataHref = Router.router?.pageLoader.getDataHref({
  //   href: dataURL.toString(),
  //   asPath: pathname,
  //   skipInterpolation: false,
  //   locale: Router.locale,
  // })
  // //
  // // console.log(dataHref)
  // if (dataHref) {
  //   if (prefetchLink){
  //
  //     const ss = Router.router?._getServerData(dataHref)
  //     console.log(ss)
  //     console.log('log', dataHref)
  //     // console.log(fetchNextData)
  //     router.prefetch('http://localhost:5554' + dataHref)
  //   //  {dataHref: dataHref, inflightCache: true , isPrefetch: true , hasMiddleware: false, isServerRender: false , parseJSON: true , persistCache: true , isBackground:true, unstable_skipClientCache:true}
  //     fetch('http://localhost:5554' + dataHref).then((data)=>console.log(data))
  //   //   fetchNextData( {dataHref: dataHref, inflightCache: false , isPrefetch: true , hasMiddleware: false, isServerRender: false , parseJSON: true , persistCache: false , isBackground:false, unstable_skipClientCache:false})
  //   }
  // }

  return (
    <div
      // onMouseEnter={() => setPrefetchLink(true)}
      className={pathname === router.asPath ? 'link active-link' : 'link'}
    >
      <Link href={url} as={pathname} prefetch={false}>
          {children}
      </Link>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        .link {
          display: inherit;
          height: 100%;
          width: ${width || 'initial'};
        }
        .active-link a {
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}
