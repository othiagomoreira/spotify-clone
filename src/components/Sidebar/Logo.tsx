import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo Spotify"
      width={55}
      height={55}
      objectFit="cover"
    />
  );
};
