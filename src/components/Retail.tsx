import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hook'
import { changeTab } from '../Redux/reduxSlice'

const Retail: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const tabValue = useAppSelector(state => state.reduxSlice.selectedTab)
    console.log('tabValue', tabValue)
    useEffect(() => {}, [tabValue])
    return (
        <div
            className={`bg-[#F64444] ${
                tabValue === 2 ? 'w-full h-screen' : 'w-40'
            } transform transition-all duration-300`}
            onClick={() => {
                dispatch(changeTab(2))
            }}
        >
            <p>Tab 2 Content</p>
        </div>
    )
}
export default Retail
