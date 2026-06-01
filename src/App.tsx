/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import ResumeDeck from "./components/ResumeDeck";
import DigitalTwinChat from "./components/DigitalTwinChat";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ResumeDeck />
      <DigitalTwinChat />
    </div>
  );
}

