import react, { useState, useEffect } from 'react';

import { Typography, Link } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

/* 引入样式表 */
import './index.css';

/* 引入组件模块 */
import FileUploader from './components/ImageUploader/ImageUploader';

export const rootURL = "http://www.tonyliuyuxuan.cn:3000/image-library";


export default function Index() {
	const styles = {
		lineheight: {
			lineHeight: "200%",
		},
	};

	return (
		<div className="main">
			<div className="header section">
				<div className="vertical-align-div">
					<div className="header-text">
						<Typography variant="h4" style={styles.lineheight}>
								<PhotoLibraryIcon fontSize="large" />
								Apartsa Image Library
						</Typography>
						<Typography variant="span" style={{fontSize: "22px",}}>
								Get a random picture of customized size by a simple URL
						</Typography>
					</div>
					<div className="header-img-div">
						<img 
							className="header-img"
							src="https://i.picsum.photos/id/1038/536/354.jpg?hmac=Hu6nao4zkSvq_pHo5pIssp8oYizJus3yfL956AXww70" />
					</div>
				</div>
			</div>

			<div className="instruction section">
				<div className="vertical-align-div">
					<Typography variant="h4" style={styles.lineheight}>
						Easy to use. Strong for customization.
					</Typography>
					<Typography style={styles.lineheight}>
						Add width and height in this URL, and you will get a random picture of this size.
					</Typography>
					<div className="white-link">
						<Link
							href={ `${rootURL}/200/300` }
							target="_blank"
							rel="noreferrer"
						>
							{ `${rootURL}/200/300` }
						</Link>
					</div>
					<Typography style={styles.lineheight}>
						If you want square picture, adding only one number is enough. 
					</Typography>
					<div className="white-link">
						<Link
							href={ `${rootURL}/400` }
							target="_blank"
							rel="noreferrer"
						>
							{ `${rootURL}/400` }
						</Link>
					</div>
				</div>
			</div>

			<div className="image-uploader-div section">
				<div className="vertical-align-div">
					<Typography variant="h5" style={styles.lineheight}>
						Feel free to submit your favorite pictures to us. Maybe you will see pictures from yourself someday in the future. 
					</Typography>
					<div className="image-uploader">
						<FileUploader />
					</div>
				</div>
			</div>

			<div className="footer section">
				<div className="vertical-align-div">
					<Typography style={ styles.lineheight }>
						{ `COPYRIGHT © 2021 `} 
						<Link
							href="https://apartsa.com/"
							target="_blank"
							rel="noreferrer"
						>
							Apartsa Co.Ltd
						</Link>
						{`. ALL RIGHTS RESERVED.` }
						<br />
						{ `THEME COPIED FROM ` }
						<Link
							href="https://picsum.photos/"
							target="_blank"
							rel="noreferrer"
						>
							Lorem Picsum
						</Link>
					</Typography>
				</div>
			</div>

		</div>
	);
}