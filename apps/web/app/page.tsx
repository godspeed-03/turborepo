import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/Button";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
<div className=" w-screen h-screen flex items-center justify-center bg-slate-900 text-gray-800 ">
  <Button className="p-28 hover:bg-white hover:text-black shadow-lg">WEB</Button>
</div>
  );
}
