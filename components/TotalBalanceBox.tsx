import AnimatedCounter from './AnimatedCounter'
import DoughutChart from './DoughutChart'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
            Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                {/* since the above element is a p tag, to avoid hydration errors
                we will change this to a div */}
                <div className='total-balance-amount flex-center gap-2'>
                    {/* here we are using the formatAmount utility function we created 
                    to render the amount in a more readable format */}
                    {/* This ANIMATED COUNTER is a client side component we created */}
                    <AnimatedCounter amount={totalCurrentBalance}/>
                    {/* {formatAmount(totalCurrentBalance)} */}
                    <span className='text-sm font-normal'>
                        USD
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
