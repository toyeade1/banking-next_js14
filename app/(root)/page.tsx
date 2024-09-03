import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const logginIn = { firstName: "Akintoye"}
  return (
    <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
{/* here i am using the HeaderBox component */}
{/* i am passing the type, title and user props to the component */}
{/* When creating frontend components they are encased in self-closing tags */}
        <HeaderBox
            type="greeting"
            title= "Welcome"
            user={logginIn?.firstName || "Guest"}
            subtext=" Acess all of your bank accounts from one hub. Application by Toye"
             />
        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>

    </div>
    </section>
  )
}

export default Home
