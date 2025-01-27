import WalletButton from "components/WalletButton"
import { Logo } from "resources/Images"

import { useWeb3React } from "@web3-react/core"

import "./style.scss"

const Navbar = () => {
  const { account } = useWeb3React()

  return (
    <div className="navbar flex">
      <div className="navbar-wrapper container flex">
        <div className="navbar-first flex">
          <a className="navbar-logo" href="https://www.luckybunny.farm">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-last">
          <WalletButton>
            {account === undefined || account === ""
              ? "Connect"
              : `${account.slice(0, 4)}...${account.slice(-4)}`}
          </WalletButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar
