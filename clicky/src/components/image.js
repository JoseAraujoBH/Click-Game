import React from 'react';

const ImageCard = ({ backgroundColor, selectedCharacter, onImageClick }) => {
	return (
		<div className='col s3'>
			<div className={`card hoverable ${backgroundColor} lighten-3`} onClick={() => { onImageClick(selectedCharacter) }}>
				<div className='card-image'>
					<img src={`assets/img/${selectedCharacter}.png`} alt='Characters' />
				</div>
			</div>
		</div>
	);
};

export default ImageCard;