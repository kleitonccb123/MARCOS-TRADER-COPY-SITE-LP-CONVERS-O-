import { AnimatedDock } from "@/components/ui/animated-dock";
import { Instagram, MessageCircle, Send } from "lucide-react";

export const SocialDock = () => {
  const dockItems = [
    {
      link: "https://www.instagram.com/traderpriceforex/",
      Icon: <Instagram className="h-6 w-6" />,
      target: "_blank"
    },
    {
      link: "https://t.me/+hovOygBawbg5YWIx",
      Icon: <Send className="h-6 w-6" />,
      target: "_blank"
    },
    {
      link: "https://chat.whatsapp.com/BXKuHdOCUnW0ohYuZySyMk?mode=ems_share_c",
      Icon: <MessageCircle className="h-6 w-6" />,
      target: "_blank"
    }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <AnimatedDock items={dockItems} />
    </div>
  );
};