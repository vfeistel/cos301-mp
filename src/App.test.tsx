import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(() => {
    cleanup();
})

describe("App", () => {
    it("renders the App component", () => {
        render(<App />)
        screen.debug();
    })
    it("has a link to src/App.tsx", () => {
        render(<App />)
        expect(screen.getByText("src/App.tsx")).toBeDefined();
    })
})
