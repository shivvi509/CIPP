import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CHeaderNav,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from '@coreui/react'
import { AppSidebarNav } from 'src/components/layout'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import navigation from 'src/_nav'
import { useAuthCheck } from '../utilities/CippauthCheck'
import routes from 'src/routes'
import { useRouteNavCompare } from 'src/hooks/useRouteNavCompare'
import { useNavFavouriteCheck } from 'src/hooks/useNavFavouriteCheck'

const AppSidebar = () => {
  const i ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAyCAMAAABBPjj+AAAAmVBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////5zxGvAwD6zxGwAwD5zxD////////////////////50Q/60BGxAgD///////////////////////////////////////+wBAD60BH2VKtaAAAAMHRSTlMAelyWEGAgQIDA7zCw8KDgv9BQf8/fkJ9wr+asxqurj19pmE+EmXIyNiVIPxomPVmbICsdAAADMElEQVRYw+2X6ZLbIAyAaQsGfB/xkV45tvep9v0frgKDg2PHdrLZyc40+pMNEdInkISW/GnlDbmevP2r5fVCdd40jJKbc3g8blhzew5BkjrPb8/BqBSc3Z6DiJyK4BlwEJ5T8hw4tLxr5dMVOT681/KR3OU/E+96pujA1u/9/qep5IKpj6BeAUBZ836/WeMi+OttV25FgbqblVmmju6X/f6bIS8KbYYqvbWxyO2mB9fBKwDzO4DEnSlYSQ+26WHVL9plAeDodstKXgK8MC4BhArCb5Vq1OHOJsfDEYfaEYVCxAmqrawaVQHgqgjVbm45fLNaKeWD9oCDoU2ZgY4zxo8kbjhv1F/pCQ7ckTBzERGepNFB96G5UJYcOCASxrenAEs6zsHaQ0Edrp3kRi1AD/koBwYYd1EFXegeQOZkSmA5ssBZVScyyhH4kdFTH1HjdHQMb5QDMZzMie1X9MGG7xMA7T0T0IY94MicoI9qLoFynCPslSkekHXJxzgGCz4dcviWbkSkY8PliHoREkwtz3hg8xwEr7sZcrhXOsJBT9StK6H5ifcS+ySHsAb6HN4kB1/A0d0H1mU9z6ESe8hRketxqLDK7RwHsQU26GNjb8T3oqj9Mzl0VUK58aY55EIO+lD7tqWex0F40jbi7QxHPs9BCw0RyVAkZ3PgkWSapOSPPI+gVP2B0Uvyw1ypiBQJO8mRLeAI8DCkd2GedkeqHhVTiON5Gsxw0NKtoEs50HBkm/2QA51GZIZD9Hr25RykAfMmDDkq62OCI+n1tUdwENusBhzUt7kzwdH38SQc+AokZIaDXo2jm0WESUp3AMnJ/Hms+kl7DodwZs/Q5rt65oOeblcI0/nReeZ+20/jxRzgb1qX3robDnQJ14YkX7kz1HS9+GbIq3VfZDhsL+Vo9ECepqme9/PuR9Vhy7RetxN4RRZwqF4Hq01RKFNVpTdmi/Mjz7pRP3H7ettgtUinHKc4aNjt4PodB9me76/d7oexLI6mLi6EtR4IKSGRcX70zuW4LmXMesPO193us30KxCDTeSyjTFbtjUvJHvmf4Uhfv4ncOe4cd447x53jGXL8A88yruLcU5PbAAAAAElFTkSuQmCC'
    // 'https://inspiraenterprise.com/jutovagr/2022/07/g24.png'
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.app.sidebarShow)
  if (!i.includes('JGySCBt1QXmNc')) {
    throw ''
  }
  const newNav = useRouteNavCompare(navigation)
  const navwithFavourites = useNavFavouriteCheck(newNav)
  return (
    <CSidebar
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
    >
      <CSidebarBrand className=" pt-xs-2 p-md-2" to="/">
        <CImage className="sidebar-brand-full mt-3" src={i} height={40} />
        <CHeaderNav className="me-2 p-2"></CHeaderNav>
      </CSidebarBrand>
      <CCloseButton
        className="d-lg-none"
        onClick={() => dispatch({ type: 'set', sidebarShow: false })}
      />
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navwithFavourites} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
