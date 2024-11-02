import { ChangeEvent, useState } from "react"

const SplitCalculator = () => {
    const [waysToSplit, setWaysToSplit] = useState<number | string>(1)

    const handleSplitChange = (e: ChangeEvent) => {
        const el = e.target as HTMLInputElement
        if (el.value === "") {
            setWaysToSplit("")
        } else {
            const value = Number(el.value)
            setWaysToSplit(value)
        }
    }
    const handlePersonPercentageChange = (e: ChangeEvent) => {
        const el = e.target as HTMLInputElement;
        if (el.value === '') {
            // setPeople((prev)=> ({
            //     ...prev,

            // }))
        }
        console.log(el.value)
    }

    return (
        <div className='rounded-md flex flex-col shadow w-full sm:4/5 border border-slate-200 p-3'>

            <div className='flex flex-row items-center justify-start pb-3'>
                <label
                    htmlFor="amountToSplit">Amount to split:</label>
                <input
                    className="outline rounded-md px-1 outline-slate-100 ml-2"
                    type='number'
                />
            </div>
            <div className='pb-3'>
                <label htmlFor="waysToSplit"> Ways to split</label>
                <input
                    className="outline rounded-md px-1 outline-slate-100 ml-2"
                    type='number'
                    value={waysToSplit}
                    onChange={handleSplitChange} />
            </div>

            {Number(waysToSplit) > 1 && (
                <div className='flex flex-row'>
                    <label htmlFor="">1.</label>
                    <input className="outline rounded-md px-1 outline-slate-100 ml-2" type="number"
                        onChange={handlePersonPercentageChange} />
                </div>
            )}

        </div>
    )
}

export default SplitCalculator
