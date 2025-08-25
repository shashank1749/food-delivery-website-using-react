import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

 const Category=[

    {
        id:1,
        name:"ALL",
        icon:<TiThSmallOutline className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdFreeBreakfast className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:3,
        name:"soups",
        icon:<TbSoup className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:5,
        name:"maincourse",
        icon:<MdFoodBank className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className='h-[60px] w-[60px] text-green-500'/>,
    },
    {
        id:7,
        name:"burger",
        icon:<GiHamburger className='h-[60px] w-[60px] text-green-500'/>,
    }



]

export default Category