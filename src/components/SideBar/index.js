
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBtn,
    SideBarRoute
} from '../SideBar/SliderElemnts'


const SideBar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
                <Icon onClick={toggleSidebar}>
                    <CloseIcon >

                    </CloseIcon>
                </Icon>
                <SideBarMenu>
                    <SideBarLink href='#pizza'>  Pizzas</SideBarLink>
                    <SideBarLink href='#dessert' >Dessert</SideBarLink>
                    <SideBarLink  href='#fastfood' > Fast Food</SideBarLink>

                </SideBarMenu>
                <SideBtn>
                    <SideBarRoute to='/'>Order Now</SideBarRoute>
                </SideBtn>
            </SidebarContainer>
        </>
    )
}

export default SideBar