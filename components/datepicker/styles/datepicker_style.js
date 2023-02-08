import css from 'styled-jsx/css'
// import {mediaBreakPoints} from 'public/globalCss/mediaBreakPoints'
export const datepickerStyle = css.global `
                .triangle {
                       width: 0;
                       height: 0;
                       border-style: solid;
                       border-width: 0 10.5px 15px 10.5px;
                       border-color: transparent transparent #FFFFFF transparent;
                       transform: rotate(0deg);
                       display: none;
                 }
            
                 .react-select__control{
                    height: 19px;
                    min-height: 19px !important;
                    border: 0 !important;
                    display: flex !important;
                    justify-content: center !IMPORTANT;
                    align-items: center !important;
                    grid-area: none !important;
                    width: 180px !important;
                    margin: 0 auto !important;
                    background: transparent !important;
                 }
                 
                 .react-select__indicators {
                    display: none !important;
                 }
                 
                 .react-select__placeholder{
                     text-align: center !important;
                 }
                 
                 .react-select__value-container{
                     border: 0 !Important;
                 }
                 
                 .react-select__input-container{
                     padding: 0 !important;
                     margin: 0 !important;
                     border: 0 !Important;
                 }
                 
                 .react-select__input{
                      border: 0 !Important;
                 }
                 
                 .react-select__menu {
                      width: 271px !important;
                    margin-top: 26px !important;
                    border: 1px solid #A5BFE8;
                    box-shadow: none;
                    border-radius: 0;
                 }
                 
                 .react-select__single-value{
                    text-align: center;
                 }
                 
                  @media only screen and (max-width: 1000px) {
                  
                  .react-select__menu {
                      width: 100% !important;
                      margin-top: 18px !important;
                      border: 0;
                      box-shadow: none !important;
                    }
                        
                 }
                 .react-select__option--is-selected{
                    color: #A5BFE8;
                    background: transparent;
                 }
                 .form-control-actions{
                     gap: 10px;
                     padding: 10px 0;
                  }
                  .form-control-actions > div{
                     flex: 1;
                  }
                  
                 .close-picker-mobile{
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    left: 0;
                    top: 0;
                    z-index: 2;
                 }
                     
                 .react-select__menu-list{
                    padding: 22px 20px !important;
                 }
                     
                .select-component{
                   //width: 245px;
                   min-height: 320px;
                }  
                
                .check-availability{
                   margin: 0 auto;
                }
                
                .check-availability button{
                   min-width: 162px !important;
                }
                .check-availability--mobile button{
                       min-width: 262px !important;
                }
                .form-picker{
                   min-width: 220px;
                    // @media (max-width: 0.0002px) {
                    //     margin: 0;
                    // }
                 }
                 
                 .form-promo input{
                    width: 80px;
                    border: 0;
                    text-align: center;
                    background: transparent;
                    text-transform: uppercase;
                 }
                 
                  .close-modal{
                    position:fixed;
                    width: 100vw;
                    height: 100vh;
                    z-index: 1;
                    left: 0;
                    top: 0;
                  }
                  .separator{
                    padding: 4px 0;
                  }
                  .form-container{
                    position: absolute;
                    width: 988px;
                    background: #ffff;
                    bottom: 85px;
                    transform: translateX(-50%);
                    left: 50%;
                    z-index: 100;
                    padding-left: 12px
                     
                  }
                  .form-content{
                     // min-height: 320px;
                     max-height: calc(100vh - 300px);
                     overflow: auto;
                  }
                  .form-container--mobile{
                    position: fixed;
                    width: 375px;
                    bottom: 0;
                    transform: inherit;
                    left: inherit;
                    z-index: 100;
                    padding-left: 12px;
                    padding-right: 12px;
                    right: 0;
                  }
                  
                  
                  .check-availability--mobile{
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    margin: 0 auto;
                    z-index: 100;
                  }
                  
                  .form-container .form-container-input{
                      padding: 16px 10px;
                      margin: 10px 0;
           
                  }
                  
                  .form-separator{
                     padding: 0 !important;
                     margin: 10px 12px !important;
                     border-left: 1px solid #DBDDEA;
                     
                  }
                  
                  .form-container .form-container-input.active{
                      background: #EDF2FA;
                      
                  }
                
                
                  
                  .form-container > div:nth-child(1){
                      border-left: 0;
                  }
                  
                @media only screen and (max-width: 1000px) {
                   .react-select__menu::after{
                      display: none;
                   }
                  .form-container .form-container-input.active{
                      background: transparent;
                      border: 1px solid #A5BFE8;
                  }
                  .form-container {
                     max-width: 400px;
                     overflow: hidden;
                     display: flex;
                     flex-wrap: nowrap !important;
                  }
                  
                  .form-container > div {
                      // border-left: 0;
                      // border-top: 1px solid #DBDDEA;
                      // max-width: 350px;
                      // margin: 0 auto;
                  }
                  
                  .form-separator{
                      display: none;
                  }
                        
               }
               
                     @media only screen and (max-width: 375px) {
                          .form-container {
                              width: 100%;
                          }
                     }
               
`