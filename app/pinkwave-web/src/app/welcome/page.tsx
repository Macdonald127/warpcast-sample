import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'post',
      label: '🎀 Join the PinkWave 🎀',
    },
  ],
  image: {
    aspectRatio: '1:1',
    src: `http://static.socialdev.club/pinkwave/join.png`,
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/welcome`,
});

export const metadata: Metadata = {
  other: {
    ...frameMetadata,
  },
  title: 'pinkwave',
};

export default function Page() {
  return (
    <>
      <h1>WELCOME TO PINKWAVE</h1>
    </>
  );
}
