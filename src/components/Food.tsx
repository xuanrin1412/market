import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hook'
import { changeTab } from '../Redux/reduxSlice'

const Food: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const tabValue = useAppSelector(state => state.reduxSlice.selectedTab)
    console.log('tabValue', tabValue)
    useEffect(() => {}, [tabValue])
    return (
        <div
            className={`bg-[#5EA3EC] ${
                tabValue === 1 ? 'w-full h-screen' : 'w-40'
            } transform transition-all duration-300`}
            onClick={() => {
                dispatch(changeTab(1))
            }}
        >
            <p>Tab 2 Content</p>
        </div>
    )
}
export default Food
