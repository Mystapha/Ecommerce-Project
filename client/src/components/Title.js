import React from 'react'
import { useSelector } from 'react-redux'

function Title() {
  
const user=useSelector((state)=>state.user?.user)
  return (
    
  <div style={{height:"60px",display:"flex",justifyContent:"space-around",padding:"8px"}}>
    <div style={{marginTop:"-25px",display:"flex",justifyContent:"flex-start"}}>
    <a href='https://www.facebook.com/search/top?q=express%20shop'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
</svg></a>
<a href='https://www.instagram.com/'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 30 30">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg></a>
<a href='https://x.com/?lang=fr'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 30 30">
<path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295	C22.92,5.084,21.534,4.436,20,4.436c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215	c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439	c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23	c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705	c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396	c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
</svg></a>
    </div>
      <a href="https://expressshop.tn/" class="header-logo-link">
<img src="https://expressshop.tn/wp-content/uploads/2022/04/Logo-smaaaaallll.png.webp" alt="Express Shop" class="img-header-logo" width="153" height="47"/>
</a>
{!user?<div>
<button class="favorite styled" type="button" style={{marginTop:"-5px",textAlign:"center",border:"none",borderRadius:"10px"}}><a href='/Login'><img style={{width:"65px"}} src="/login.png" alt=""/></a></button>
<button class="favorite styled" type="button" style={{textAlign:"center",border:"none",borderRadius:"10px" ,marginLeft:"5px"}}><a href='/Register'><img style={{width:"45px"}} src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png" alt=""/></a></button>
</div>:null}
 </div>
  
  )
}

export default Title
