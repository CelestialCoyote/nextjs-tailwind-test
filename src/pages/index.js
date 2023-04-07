import Image from 'next/image';
import image1 from '../../public/images/husky-blows-bubbles.gif';
import image2 from '../../public/images/husky-dancing.gif';
import image3 from '../../public/images/husky-flys.gif';


export default function Home() {

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center space-y-8'>
			<h1 className='text-3x1'>The Siberian Husky App</h1>
			<div className='relative w-48 h-48 overflow-x-hidden rounded-full ring-2 ring-purple-500 ring-offset-4'>
				<Image
					objectFit='cover'
					src={image1}
					alt='Husky gif 1'
					layout='fill'
					priority
				/>
			</div>
			<div className='relative w-48 h-48 overflow-x-hidden rounded-full ring-2 ring-purple-500 ring-offset-4'>
				<Image
					objectFit='cover'
					src={image2}
					alt='Husky gif 1'
					layout='fill'
					priority
				/>
			</div>
			<div className='relative w-48 h-48 overflow-x-hidden rounded-full ring-2 ring-purple-500 ring-offset-4'>
				<Image
					objectFit='cover'
					src={image3}
					alt='Husky gif 1'
					layout='fill'
					priority
				/>
			</div>
		</div >
	)
}
