/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import ResumeDeck from "./components/ResumeDeck";
import DigitalTwinChat from "./components/DigitalTwinChat";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ResumeDeck />
      <DigitalTwinChat />
      <Analytics />
    </div>
  );
}

