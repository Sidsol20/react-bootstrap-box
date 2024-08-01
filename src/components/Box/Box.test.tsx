import React from 'react';
import { render, screen } from '@testing-library/react';
import Box, { type BoxProps } from './Box';

const renderBox = (props?: Partial<BoxProps>) => render(<Box {...props}>Hello, World!</Box>);

describe('Box', () => {
    test('renders box component', () => {
        renderBox();

        const BoxElement = screen.getByText(/Hello, World!/i);

        expect(BoxElement).toBeInTheDocument();
    });

    test('renders box component as custom element', () => {
        renderBox({ as: 'section' });

        const BoxElement = screen.getByText(/Hello, World!/i);

        expect(BoxElement).toBeInTheDocument();
        expect(BoxElement.tagName).toBe('SECTION');
    });

    test('renders box component with custom class', () => {
        renderBox({ className: 'custom-class' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('custom-class');
    });

    test('renders box component with background color', () => {
        renderBox({ bg: 'primary' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('bg-primary');
    });

    test('renders box component with text color', () => {
        renderBox({ text: 'primary' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('text-primary');
    });

    test('renders box component with alignment', () => {
        renderBox({ align: 'middle' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('align-middle');
    });

    test('renders box component as invisible', () => {
        renderBox({ invisible: true });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('invisible');
    });

    test('renders box component as visible', () => {
        renderBox({ visible: true });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('visible');
    });

    test('renders box component with height', () => {
        renderBox({ h: '50' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('h-50');
    });

    test('renders box component with width', () => {
        renderBox({ w: '50' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('w-50');
    });

    test('renders box component with display property', () => {
        renderBox({ d: 'block' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('d-block');
    });

    test('renders box component with responsive display property', () => {
        renderBox({ d: { xs: 'none', sm: 'block' } });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('d-none');
        expect(screen.getByText(/Hello, World!/i)).toHaveClass('d-sm-block');
    });

    test('renders box component with flex property', () => {
        renderBox({ flex: 'row' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('flex-row');
    });

    test('renders box component with responsive flex property', () => {
        renderBox({ flex: { xs: 'row', sm: 'column' } });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('flex-row');
        expect(screen.getByText(/Hello, World!/i)).toHaveClass('flex-sm-column');
    });

    test('renders box component with justify content property', () => {
        renderBox({ justifyContent: 'center' });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('justify-content-center');
    });

    test('renders box component with responsive justify content property', () => {
        renderBox({ justifyContent: { xs: 'start', sm: 'end' } });

        expect(screen.getByText(/Hello, World!/i)).toHaveClass('justify-content-start');
        expect(screen.getByText(/Hello, World!/i)).toHaveClass('justify-content-sm-end');
    });
});
