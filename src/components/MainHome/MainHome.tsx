import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import Food from '../Food'
import Retail from '../Retail'
import Community from '../Community'
import { useAppDispatch, useAppSelector } from '../../Redux/hook'
import { changeTab } from '../../Redux/reduxSlice'
import dataNewKind from './dataNewKind'

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { FacebookOutlined } from '@mui/icons-material'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined'

export default function MainHome() {
    const dispatch = useAppDispatch()
    const tabValue = useAppSelector(state => state.reduxSlice.selectedTab)
    console.log('tabValue', tabValue)

    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [tabValue])

    return (
        <div className="flex h-full">
            <div
                className={`${
                    tabValue === 0 ? 'w-full h-full' : 'w-40'
                } transform transition-all duration-500`}
                onClick={() => {
                    dispatch(changeTab(0))
                }}
            >
                {/* LOGO */}
                <img
                    src={logo}
                    alt=""
                    className={`${
                        tabValue === 0 ? 'pt-14 pl-14 ' : 'w-40 pt-20'
                    } transform transition-all  ease-in-out  duration-1000 px-1`}
                />

                {/* INTRO */}
                <div
                    className={`${
                        tabValue !== 0
                            ? 'hidden scale-50'
                            : `flex flex-col scale-100 transition-all delay-700 duration-700 ease-in-out`
                    }`}
                >
                    <div className=" pt-28 pb-20 font-thin px-14 font-CormorantGaramond text-[84px] leading-[90px] space-x-0 max-w-[1000px] ">
                        Canal Street Market is a carefully curated retail
                        market, food hall & community space open year-round at
                        265 Canal Street.{' '}
                        <Link to={'/'} className="styleNib">
                            Support Small Business{' '}
                        </Link>
                        this weekend!
                    </div>
                    {/* IMAGE MAIN PIC */}
                    <div
                        className={`' h-screen w-full ' ${
                            scrollPosition > 400
                                ? 'opacity-100 delay-300'
                                : 'opacity-0 '
                        } "transform transition-opacity ease-in duration-300 opacity-100"`}
                    >
                        <img
                            style={{ opacity: scrollPosition / 300 }} // Adjust the opacity based on the scroll position
                            className="h-full w-full object-cover imgcheck"
                            src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg"
                            alt=""
                        />
                    </div>
                    {/* 3 MAIN PIC */}
                    <div className=" p-[60px] ">
                        <div className="mb-[60px] leading-[125px] max-w-[650px] font-CormorantGaramond text-[113px]">
                            A New Kind of Market
                        </div>
                        <div
                            className={` ${
                                scrollPosition > 1100
                                    ? 'opacity-100 delay-300'
                                    : 'opacity-0 '
                            } flex justify-between  font-SpaceMono text-[14px] font-medium "transform transition-opacity ease-in duration-300 opacity-100"`}
                        >
                            {dataNewKind.map((data, index) => (
                                <div
                                    key={index}
                                    style={{ opacity: scrollPosition / 1100 }}
                                >
                                    <div className="h-[386px] w-[285px] mb-7">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={data.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[285px]">
                                        <div>
                                            {data.des}
                                            <p>{data.desp}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* MARKET EVENT */}
                    <div className="pt-[60px] px-[60px] pb-[150px]">
                        <div className="flex items-center justify-center py-[60px]">
                            <div
                                className=" w-1/3 flex justify-center
                            "
                            >
                                <span className="text-[62px] text-white textStroke">
                                    活動
                                </span>
                            </div>
                            <div className="flex text-center font-CormorantGaramond text-[100px] leading-[100px]  justify-center items-center flex-wrap">
                                Market Events
                            </div>
                            <div className="w-1/3 flex justify-center">
                                <span className="text-[62px] text-white textStroke">
                                    活動
                                </span>
                            </div>
                        </div>
                        <div className="styledot flex-wrap  pt-[75px] pb-[100px] flex text-center font-SpaceMono">
                            <div className="w-1/3">
                                <span>09/21</span>
                                <p>Small Business Retail Pop Up Weekend!</p>
                            </div>
                            <div className="w-1/3">
                                <span>02/07</span>
                                <p className="max-w-[300px]">
                                    New Balance x Paperboy Paris by Greenhouse @
                                    Canal Street Market
                                </p>
                            </div>
                            <div className="w-1/3">
                                <span>12/11</span>
                                <p>Hack City 12/11</p>
                            </div>
                            <div className=" absolute -bottom-6 w-full">
                                <button className=" bg-white border border-black p-[20px] w-[180px]">
                                    see all
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* LOCATION */}
                    <div className=" px-[60px] flex justify-between space-x-3">
                        <div className="locationdash py-[90px] px-[30px] w-[445px] h-[337px] flex items-center justify-center">
                            <Link
                                to={
                                    'https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013,+USA/@40.71911,-74.0007458,16.25z/data=!4m6!3m5!1s0x89c2598a1e84d31b:0x7289f0a7b82b00f4!8m2!3d40.7190858!4d-74.0008853!16s%2Fg%2F11hdg9n3tx?entry=ttu'
                                }
                            >
                                <span className=" font-CormorantGaramond text-[65px] text-center">
                                    265 Canal St. New York, NY
                                </span>
                            </Link>
                        </div>
                        <div className=" locationdash locationdashNoPadding w-[445px] h-[337px] ">
                            <Link
                                to={
                                    'https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013,+USA/@40.71911,-74.0007458,16.25z/data=!4m6!3m5!1s0x89c2598a1e84d31b:0x7289f0a7b82b00f4!8m2!3d40.7190858!4d-74.0008853!16s%2Fg%2F11hdg9n3tx?entry=ttu'
                                }
                            >
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    {/* BECOME VENDORS */}
                    <div className="p-[60px]">
                        <div className="vendor text-center mb-[60px]">
                            <div className=" font-CormorantGaramond text-[50px] mb-3">
                                Interested in becoming a vendor?
                            </div>
                            <button className="p-[15px] w-[180px] border border-black font-SpaceMono">
                                click here
                            </button>
                        </div>
                        <div className="flex justify-between space-x-20 mb-[60px]">
                            <div className="follow flex flex-col justify-center items-center text-center font-SpaceMono flex-1 ">
                                <span>
                                    <CreateOutlinedIcon
                                        style={{ fontSize: '39px' }}
                                    />
                                </span>
                                <p className="pt-4">Email us</p>
                            </div>
                            <div className=" follow flex flex-col justify-center items-center text-center  font-SpaceMono flex-1 ">
                                <span>
                                    <FacebookOutlined
                                        style={{ fontSize: '39px' }}
                                    />
                                </span>
                                <p className="pt-4">Follow us on FaceBook</p>
                            </div>

                            <div className=" follow flex flex-col justify-center items-center text-center  font-SpaceMono flex-1 ">
                                <span>
                                    <TravelExploreOutlinedIcon
                                        style={{ fontSize: '39px' }}
                                    />
                                </span>
                                <p className="pt-4">Watch us on Google</p>
                            </div>
                        </div>
                        {/* NEW LETTER */}
                        <div className="mb-[40px] locationdash locationdashNoPadding padding8 flex w-full font-SpaceMono items-center justify-center">
                            <div className="text-[22px] mr-[60px] max-w-[260px]">
                                Stay up to date with our newsletter
                            </div>
                            <div className="  w-[518px] h-[57px] border-2 border-black flex items-center">
                                <input
                                    className="flex-1 outline-none px-4"
                                    type="text"
                                    placeholder="Email"
                                />
                                <span className="px-4">
                                    <ArrowRightAltOutlinedIcon />
                                </span>
                            </div>
                        </div>
                        {/* FOOTER */}
                        <div className="flex justify-between">
                            <div>Copyright Canal Street Market 2019</div>
                            <div className=" underline">Privacy Policy</div>
                            <div>
                                Site by{' '}
                                <span className=" line-through">Zero</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Food />
            <Retail />
            <Community />
        </div>
    )
}
