'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
    const data = 20;
  const str = "shubh"

  const handleClick = () => {
   router.push(`./Components/home?data=${data}&str=${str}`);
  };
  const handleClick2 = () => {
    router.push('./Components/About');
  };


  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <button onClick={handleClick}>Go to Home1</button>
      {/* <button onClick={handleClick2}>Go to About</button> */}
    </div>
  );
}
