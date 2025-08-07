// HalomotButtonDemo.jsx
// Demo showcase for the HalomotButton component

import React from "react";
import { HalomotButton } from "@/components/ui/halomot-button";
import NotFoundPage from "@/components/ui/page-not-found";
import { FaRegSmile } from "react-icons/fa"; // Example icon

const HalomotButtonDemo = () => (
  <section>
    {/* Demo area: showcase several button variants */}
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '36px',
        justifyContent: 'center',
        alignItems: 'center', // <--- This centers all buttons vertically
        borderRadius: '8px',
        minHeight: '300px'
      }}
    >
      {/* Default button */}
      <HalomotButton 
        inscription="חלומות"
        backgroundColor="var(--halomot-button-background)"
        textColor="var(--halomot-button-foreground)"
        hoverTextColor="#fff"
        onClick={() => console.log("The 1st Halomot button has been clicked!")}
      />
      {/* Button with custom gradient, border radius, and icon */}
      <HalomotButton 
        inscription="עוד אחד"
        backgroundColor="var(--halomot-button-background)"
        textColor="var(--halomot-button-foreground)"
        borderWidth="3px"
        gradient="linear-gradient(135deg, #a123f4, #603dec)"
        outerBorderRadius="33px"
        innerBorderRadius="32px"
        hoverTextColor="#fff"
        onClick={() => console.log("The 2nd Halomot button has been clicked!")}
      />
      {/* Button with custom padding, fillWidth, and fixedWidth */}
      <HalomotButton 
        inscription="Custom padding"
        backgroundColor="var(--halomot-button-background)"
        textColor="var(--halomot-button-foreground)"
        padding="46px 24px"
        hoverTextColor="#fff"
        fillWidth={false}
        fixedWidth="200px"
        onClick={() => console.log("The 3rd Halomot button has been clicked!")}
      />
      {/* Always light-style button: white background, dark text, bright gradient, all props */}
      <HalomotButton
        inscription="That one has an icon and an href"
        backgroundColor="var(--halomot-button-background)"
        textColor="var(--halomot-button-foreground)"
        gradient="linear-gradient(90deg, #facc15 0%, #f472b6 100%)" // yellow to pink
        borderWidth="4px"
        outerBorderRadius="8px"
        innerBorderRadius="30px"
        padding="1.25rem 2.5rem"
        hoverTextColor="#fff"
        icon={<FaRegSmile />}
        fillWidth={false}
        href="https://www.github.com/Northstrix"
        onClick={() => console.log("The 4th Halomot button has been clicked!")}
      />
    </div>
  </section>
);

// NotFound Demo Component
const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <NotFoundPage />
    </div>
  );
};

export { HalomotButtonDemo, DemoOne };