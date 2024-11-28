import ScreenLg from "@/components/page-containers/screen-lg"
import Logo from "../components/logo"
import Controls from "../components/controls"
import SearchBlock from "../components/search-block"
const Header: React.FC = () => {
    return (
        <div className="border-b border-border-soft">
            <ScreenLg>
                <div className="items-center justify-between py-4 gap-8 lg:flex hidden">
                    <Logo />
                   <SearchBlock />
                  <Controls />
                </div>

                <div className="flex flex-col items-center justify-between py-4 gap-8 lg:hidden ">
                    <div className="flex items-center justify-between w-full">
                    <Logo />
                  <Controls />
                  </div>
                  <SearchBlock />
                </div>
            </ScreenLg>
        </div>
    )
}
export default Header