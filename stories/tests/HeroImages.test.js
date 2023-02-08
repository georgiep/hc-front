/**
 * @jest-environment jsdom
 */

import initStoryshots from '@storybook/addon-storyshots';

initStoryshots();

import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import * as stories from '../HeroImage.stories';

function renderWithWrapper(component, options) {
    const Wrapper = ({ children }) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );

    return render(component, { wrapper: Wrapper, ...options });
}

const { HeroImageWithBookWithUsTemplate, heroImage , heroImageWithText } = composeStories(stories);

test('renders HeroImageWithBookWithUsTemplate', async () => {
    renderWithWrapper( <HeroImageWithBookWithUsTemplate/> );
    // await screen.debug()
    expect(await screen.getByText(/this is a default text/i)).not.toBeNull();
});