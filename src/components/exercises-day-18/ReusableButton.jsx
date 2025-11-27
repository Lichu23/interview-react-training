import React from 'react'

// 2. Create a Counter With Reusable Button Component (≈10 minutes)

// Goal: Test component composition, props, and basic logic.

// Requirements:

// Create a counter component with:

// “Increment”

// “Decrement”

// “Reset”

// Build a reusable <ActionButton> component that takes:

// label

// onClick

// Use the reusable component for all three buttons.

// What it evaluates:
// Props, component reuse, event handling.


export default function ActionButton({label, onClick}) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
