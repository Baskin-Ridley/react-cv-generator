import LeftSide from "./components/sides/LeftSide"
import RightSide from "./components/sides/RightSide"
import Unique from "./components/experimental/Unique"

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div>
      <LeftSide/>
      <Unique/>
      <Unique/>
      </div>

      <div className="hidden lg:block">
        <RightSide/>
      </div>

    </div>
  )
}