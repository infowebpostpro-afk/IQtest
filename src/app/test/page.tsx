import React from 'react';
import type { Metadata } from 'next';
import { TestClient } from './TestClient';

export const metadata: Metadata = {
  title: 'Free Online IQ Test – Take the 20-Question Reasoning Assessment',
  description:
    'Take our free 20-question online IQ test. Solve original numerical, logical, abstract, and spatial puzzles with instant results, accuracy analysis, and clear explanations. No signup needed.',
};

export default function TestPage() {
  return <TestClient />;
}
