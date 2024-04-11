
import './App.css'
import {FaArrowRightArrowLeft} from 'react-icons/fa6'
import { useState } from 'react'
function App() {

  const [convertedAmount,setConvertedAmount] = useState('')

  const usdToZigRate = 13.8928;
  const usdToZwlRate = 33886.69;
  const zigToZwlRate = 2498.72;

  const handleConversion =(e)=>{
    e.preventDefault();
    const amountInput = document.getElementById('amount')
    const fromSelect = document.getElementById('fromCurrency')
    const toSelect = document.getElementById('toCurrency')


    const amount = parseFloat(amountInput.value)
    const fromCurrency = fromSelect.value
    const toCurrency = toSelect.value

    let convertedAmount;

    if(fromCurrency === 'USD' && toCurrency === 'ZiG'){
      convertedAmount = amount * usdToZigRate
    }
    else if (fromCurrency === 'USD' && toCurrency === 'ZWL') {
      convertedAmount = amount * usdToZwlRate;
    } else if (fromCurrency === 'ZiG' && toCurrency === 'USD') {
      convertedAmount = amount / usdToZigRate;
    } else if (fromCurrency === 'ZiG' && toCurrency === 'ZWL') {
      convertedAmount = amount * zigToZwlRate;
    } else if (fromCurrency === 'ZWL' && toCurrency === 'USD') {
      convertedAmount = amount / usdToZwlRate;
    } else if (fromCurrency === 'ZWL' && toCurrency === 'ZiG') {
      convertedAmount = amount / zigToZwlRate;
    }

    setConvertedAmount(convertedAmount)
  }

  return (
    <>
     <div className='flex bg-[#9c93ff] min-h-screen justify-center'>
     <div className='bg-slate-100 w-96 h-auto p-8 rounded-md my-auto'>
        <header>
          <h2 className='text-xl font-semibold text-center underline'>Currency Exchange Calculator</h2>
            <p className='text-[14px] font-semibold mt-3 tracking-wider '>1 USD = {usdToZigRate} ZiG | 1 USD = {usdToZwlRate} ZWL | 1 ZiG = {zigToZwlRate} ZWL |</p>
        </header>
        <form className='my-6' onSubmit={handleConversion}>
          <div>
            <p className='text-sm mb-1'>Enter Amount</p>
            <input type="number" id='amount' className={'h-9 w-full border-2 border-slate-700 outline-none px-4 rounded'}/>
          </div>
          <section className='flex items-center justify-between mt-3'>
            <div>
              <p className='text-sm mb-1'>From</p>
              <div className='flex h-9 w-28'>
                {/* <img src="https://flagsapi.com/BE/shiny/64.png"/> */}
                 <select id='fromCurrency' className='w-auto border-2 border-slate-700 outline-none px-4 rounded'>
                  <option value="USD">USD</option>
                  <option value="ZiG">ZiG</option>
                  <option value="ZWL">ZWL</option>
                 </select>
              </div>
            </div>

              <div className='mt-8'>
                <p><FaArrowRightArrowLeft /></p>
              </div>

            <div>
              <p>To</p>
              <div className='flex h-9 w-28'>
                {/* <img src="https://flagsapi.com/BE/shiny/64.png"/> */}
                 <select id='toCurrency' className='w-auto border-2 border-slate-700 outline-none px-4 rounded'>
                 <option value="ZiG">ZiG</option>
                  <option value="USD">USD</option>
                  <option value="ZWL">ZWL</option>
                 </select>
              </div>
            </div>
          </section>

          {/* <div className='mt-5 mb-7'>
           <p> I USD = 13.5 ZiG</p>
          </div> */}
          <button className='bg-[#675AFE] rounded-md text-white hover:opacity-95 py-3 px-2 w-full mt-5 mb-7' >Convert</button>
        </form>

        <input type="text" name="" id="" value={convertedAmount} readOnly className='h-9 w-full border-2 border-[#675AFE] outline-none px-4 rounded'/>
      </div>
     </div>
    </>
  )
}

export default App
