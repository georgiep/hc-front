import css from 'styled-jsx/css'

export const guestsStyle = css.global `
                        .guests {
                          min-width: 74px;
                        
                          .triangle{
                             position: absolute;
                             margin-top: 30px;
                          }
                          
                          .guests-status {
                            border-radius: 5px;
                            cursor: pointer;
                            @media (max-width: 1000px) {
                              display: none;
                            }
                            &.active {
                            
                            }
                        
                            > div {
                              > div {
                                &:nth-child(2) {
                                  height: 19px;
                                }
                              }
                            }
                          }
                        
                          .bg-opacity {
                            position: fixed;
                            left: -100vw;
                            top: -100vh;
                            width: 200vw;
                            height: 200vh;
                            z-index: -1;
                            opacity: 0;
                            border-radius: 5px;
                          }
                          
                          .guests-options {
                            top: 98px;
                            margin-left: -24px;
                            border-radius: 0;
                            background: #fff;
                            position: absolute;
                            z-index: 10;
                            box-shadow: none;
                            border: 1px solid #A5BFE8;
                        
                            @media only screen and (max-width: 1000px) {
                                top: 0;
                                margin-left: 0;
                                border-radius: 10px;
                                background: #fff;
                                position: relative;
                                z-index: 10;
                                box-shadow: none;
                                border: 0;
                            }
                            
                         
                            //@media ($small) {
                            //  margin-right: 0 !important;
                            //  top: 114px;
                            //  left: 55px;
                            //
                            //  .rpt-headline-4 {
                            //    font-size: 13px;
                            //    font-weight: 400;
                            //  }
                            //}
                        
                            .options-values {
                              padding: 14px 0;
                              position: relative;
                              z-index: 0;
                              min-width: 287px;
                              margin-bottom: 15px;
                         
                               > div {
                                    align-items: center;
                               }
                               
                              &--option-value {
                                min-width: 41px;
                              }
                        
                              &--circle {
                                width: 36px;
                                height: 36px;
                                border: 1px solid;
                                border-radius: 50%;
                                background: transparent;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 24px;
                                display: inline-block;
                                align-items: center !important;
                                text-align: center;
                                padding: 0;
                                cursor: pointer;
                        
                                &--minus {
                                }
                              }
                        
                              > div {
                                padding: 5px 33px;
                        
                                //&:not(.close-options):hover {
                                //  background: $lightGrey;
                                //}
                                //
                                //&.active {
                                //  background: $lightGrey;
                                //}
                              }
                            }
                          }
                        }
`