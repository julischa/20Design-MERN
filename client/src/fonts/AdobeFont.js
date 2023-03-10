import { useCallback, useState } from "react";
import { useAdobeFonts } from "react-adobe-fonts";

const AdobeFont = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const onActive = useCallback(() => {
    setIsLoading(false);
    setIsActive(true);
  }, []);

  useAdobeFonts({
    kitId: "itc-avant-garde-gothic-pro",
    onLoading,
    onActive,
  });

  return (
    <div>
      <div>isLoading: {isLoading ? "true" : "false"}</div>
      <div>isActive: {isActive ? "true" : "false"}</div>
    </div>
  );
};

export default AdobeFont;
