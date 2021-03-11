import react, { useState, useEffect } from 'react'

import { getImageTargetURL } from '../../api/backend';


export default function GetImage() {
    useEffect( () => {
        const refreshWindow = async () => {
            let currentURL = window.location.href;

            let urlArray = currentURL.split("/");       // only width, length 4.  width + height, length 5
            // console.log( `urlArray = ${ urlArray } whose length is ${ urlArray.length }` );

            let width = parseInt( urlArray[4], 10 );
            let height = ( urlArray.length === 6 )? parseInt( urlArray[5], 10 ) : width;
            console.log( `width = ${ width }, height = ${ height }` );

            let targetURL = await( getImageTargetURL( width, height ) );
            console.log( `targetURL = ${ targetURL } with type = ${ typeof( targetURL ) }` );
            if ( targetURL === "" ) {
                alert("抱歉，我们暂时没有该尺寸的图片给您");
            }
            else {
                window.location.href = targetURL;
            }
        };
        refreshWindow();
    }, [] );

    return (
        <div>Hello World!</div>
    );
}