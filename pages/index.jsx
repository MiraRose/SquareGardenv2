
  import {useState} from 'react';

      function Header({title}) {
        return(<h1>{title}</h1>)
      }

      function SideMenu() {
        return(
          <div class="side-menu">
             <Header title="Square Gardening v2" />
          </div>
        )
      }

      export default function HomePage() {
        return(
          <div>
           
            <SideMenu/>
            
          </div>
        );
      }

