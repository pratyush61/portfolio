import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) =>{ 
return twMerge(clsx(inputs))
}

// This utility function combines clsx and tailwind-merge to create a class name string.
// It allows for conditional class names and ensures that conflicting Tailwind CSS classes are resolved correctly.
// It takes any number of class name inputs, merges them using clsx, and then resolves any conflicts using tailwind-merge.
  