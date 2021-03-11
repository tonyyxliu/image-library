/* -------------------
 * !!! api library !!!
 * ------------------- */

export const baseURL = "http://www.tonyliuyuxuan.cn:8888";

export async function getImageTargetURL( width, height ) {
    const targetURL = `${baseURL}/randomImage/${width}/${height}`;
    console.log( `targetURL = ${ targetURL }` );

    try {
        console.log( `fetch prepares to start` );
        let resp = await( fetch( targetURL, {
            method: "GET",
            mode: "cors",
        } ) );
        if ( resp.ok ) {
            console.log( `resp = ${ resp } with type = ${ Object.prototype.toString.call( resp ) }` );
            let json = await( resp.json() );
            console.log( `json = ${ JSON.stringify( json ) }` );
            return json["targetURL"];
        }
        else {
            console.log( `Failed to fetch: status ${ resp.status } with status text = ${ resp.statusText }` );
            return Promise.reject( new Error( `Failed to fetch: status ${ resp.status } with status text = ${ resp.statusText }` ) )
        }
    }
    catch( error ) {
        console.log( `Error occurs in getImageTargetURL: error ${ error }` );
        return Promise.reject( new Error( `Error occurs in getImageTargetURL: error ${ error }` ) );
    }
}




/* --------------------------------------------------
 * !!! fetch HMac by partialID, width, and height !!!
 * -------------------------------------------------- */
export async function verifyHMac( POSTobj ) {
    const targetURL = `${baseURL}/verifyHMac`;
    console.log( `target url = ${ targetURL }` );

    try {
        let resp = await( fetch( targetURL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify( POSTobj ),
        } ) );
        if ( resp.ok ) {
            let json = await( resp.json() );
            console.log( `verifyHMac: json = ${ JSON.stringify( json ) }` );
            return json["status"];
        }
        else {
            console.log( `verifyHMac fetch not ok: resp status = ${ resp.status } with text = ${ resp.statusText }` );
            return Promise.reject( new Error( `verifyHMac fetch not ok: resp status = ${ resp.status } with text = ${ resp.statusText }` ) );
        }
    }
    catch( error) {
        console.log( `verifyHMac failed to fetch: err = ${ error }` );
        return Promise.reject( new Error( `verifyHMac failed to fetch: err = ${ error }` ) );
    }
}