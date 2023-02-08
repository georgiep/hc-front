/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Template1 from '../Template1'

jest.mock('next/dynamic', () => () => {
    const DynamicComponent = () => null;
    DynamicComponent.displayName = 'LoadableComponent';
    DynamicComponent.preload = jest.fn();
    return DynamicComponent;
});

let TesTData = {
    "title": "Rooms & Suites",
    "subtitle": "Rooms & Suites",
    "image": "/images/pic.jpg",
    "css": {
        "title": {
            "desktop": {
                "fontStyle": "normal",
                "fontWeight": 400,
                "fontSize": "62px",
                "lineHeight": "74px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "tablet": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "mobile": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            }
        },
        "subtitle": {
            "desktop": {
                "fontStyle": "normal",
                "fontWeight": 400,
                "fontSize": "62px",
                "lineHeight": "74px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "tablet": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "mobile": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            }
        },
        "image": {
            "desktop": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "tablet": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            },
            "mobile": {
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24px",
                "lineHeight": "29px",
                "color": "#ffffff",
                "fontFamily": "Chronicle Display"
            }
        }
    }
}

describe('Template2 Testing', () => {
    it('should render headings', async () => {
        render(<Template1 data={TesTData}/>)
        const heading = await screen.findAllByRole('heading')

        // await screen.debug()
        // console.log(heading.length)
        expect(heading.length > 0).toBe(true)
        // expect(heading).toBeInTheDocument()

    })

})