# Test Assignment: wewantwaste

This project implements a user interface for selecting skips (waste containers).

## Approach

The primary goal was to create a clean, responsive, and user-friendly interface for displaying and selecting different skip sizes.

Key aspects of the approach include:

*   **Technology Stack:**
    *   Next.js 14 (App Router) for the React framework.
    *   TypeScript for type safety and improved developer experience.
    *   Tailwind CSS for utility-first styling.
    *   Shadcn/ui for pre-built, accessible UI components, which were customized as needed.
*   **Component-Based Architecture:** The UI is broken down into reusable React components (e.g., `SkipCard`, `SelectedSkipNotification`).
*   **Responsive Design:** Ensured the layout adapts to different screen sizes (though specific breakpoints and detailed testing might be out of scope for a quick setup).
*   **State Management:** Local component state with `useState` for simple interactions.
*   **User Experience:** Focused on clear presentation of options and feedback to the user upon selection.

## Setup & Running

1.  Clone the repository.
2.  Install dependencies: `pnpm install`
3.  Run the development server: `pnpm dev`
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
