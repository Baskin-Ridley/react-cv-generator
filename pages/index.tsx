import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <LeftSide/>
      <div className="hidden lg:block">
        <RightSide/>
      </div>

    </div>
  )
}