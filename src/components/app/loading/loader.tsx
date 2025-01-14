import { type LoaderSizeMarginProps } from "react-spinners/helpers/props"
import PulseLoader from "react-spinners/PulseLoader"

type LoaderProps = LoaderSizeMarginProps & {
  // add here
}

export default function Loader(props: LoaderProps) {
  return (
    <PulseLoader
      size={12}
      margin={4}
      className="opacity-40"
      color="#3d369773"
      {...props}
    />
  )
}
