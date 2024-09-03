"use client"
import CountUp from 'react-countup'

/* Here we are inserting the counter animation and then adding it to the total 
balance amount in the TotalBalanceBox component */

/* We are doing this because we will need to make this Component client side 
and typically all components start as server side */



// here we accept the amount as a prop and then pass it to the CountUp component
const AnimatedCounter = ({amount }: {amount: number}) => {
  return (
    <div>
        <CountUp end={amount} prefix='$' decimal="," decimals={2} duration={2.75} />
    </div>
  )
}

export default AnimatedCounter