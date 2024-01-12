import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hook'
import { changeTab } from '../Redux/reduxSlice'

const Community: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const tabValue = useAppSelector(state => state.reduxSlice.selectedTab)
    console.log('tabValue', tabValue)
    useEffect(() => {}, [tabValue])
    return (
        <div
            className={`bg-[#FFB400] ${
                tabValue === 3 ? 'w-full h-screen' : 'w-40  sticky'
            }  transform transition-all duration-300`}
            onClick={() => {
                dispatch(changeTab(3))
            }}
        >
            <p>Tab 2 Content</p>
        </div>
    )
}
export default Community
