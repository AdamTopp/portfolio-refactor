import Introduction from "./Introduction/Introduction.component"
import Principles from "./Principles/Principles.component"
import TitleScreen from "./TitleScreen/TitleScreen.component"
import LogoTitle from "./LogoTitle/LogoTitle.component"
import WorkTable from "./WorkTable/WorkTable.component"
import Technologies from "./Technologies/Technologies.component"

function Experience() {
  return (
    <>
      <TitleScreen />
      <Introduction />
      <Principles />
      <LogoTitle />
      <WorkTable />
      <Technologies />
    </>
  )
}

export default Experience
