import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from './components/ui/button';
import { getImageUrl } from './lib/utils';
import CoolImage from './cool.webp';

export default function Dashboard() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-center my-12">
      <img className="w-56 rounded" src={getImageUrl(CoolImage)}></img>
      <h1 className="mt-4 text-4xl font-bold text-neutral-800 mb-0">
        Dashboard Remote app!
      </h1>
      <div className="mt-6 flex gap-4 items-center">
        <p className="w-[100px] mb-0">
          Value: <span className="font-bold">{count}</span>
        </p>
        <Button
          size={'icon'}
          className="rounded-full"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
}
