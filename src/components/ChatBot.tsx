import { useState } from "react";
import { MessageCircle, Send, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/enhanced-button";

interface Message {
  type: "bot" | "user";
  text: string;
  links?: { label: string; url: string; icon?: JSX.Element }[];
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Olá! Como posso ajudar você hoje? Escolha uma das opções abaixo:"
    }
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const questions = [
    {
      question: "Ver resultados e estratégias",
      answer: "Confira nossos resultados ao vivo e histórico completo:",
      links: [
        { label: "Canal Telegram", url: "https://t.me/+hovOygBawbg5YWIx", icon: <Send className="w-4 h-4" /> },
        { label: "Instagram", url: "https://www.instagram.com/traderpriceforex/", icon: <Instagram className="w-4 h-4" /> }
      ]
    },
    {
      question: "Como funciona a cópia?",
      answer: "Veja o passo a passo completo de como configurar e começar a copiar:",
      links: [
        { label: "Tutorial no YouTube", url: "https://www.youtube.com/@traderpriceforex", icon: <Youtube className="w-4 h-4" /> },
        { label: "Suporte Telegram", url: "https://t.me/+hovOygBawbg5YWIx", icon: <Send className="w-4 h-4" /> }
      ]
    },
    {
      question: "Quero tirar dúvidas",
      answer: "Fale diretamente com nosso suporte:",
      links: [
        { label: "Chat Telegram", url: "https://t.me/+hovOygBawbg5YWIx", icon: <Send className="w-4 h-4" /> },
        { label: "WhatsApp", url: "https://chat.whatsapp.com/BXKuHdOCUnW0ohYuZySyMk?mode=ems_share_c", icon: <MessageCircle className="w-4 h-4" /> }
      ]
    },
    {
      question: "Ver conteúdo educacional",
      answer: "Acesse nosso conteúdo sobre Forex e Copy Trading:",
      links: [
        { label: "YouTube", url: "https://www.youtube.com/@traderpriceforex", icon: <Youtube className="w-4 h-4" /> },
        { label: "Instagram", url: "https://www.instagram.com/traderpriceforex/", icon: <Instagram className="w-4 h-4" /> }
      ]
    }
  ];

  const handleQuestionClick = (q: typeof questions[0]) => {
    setSelectedQuestion(q.question);
    setMessages([
      ...messages,
      { type: "user", text: q.question },
      { type: "bot", text: q.answer, links: q.links }
    ]);
  };

  const handleReset = () => {
    setMessages([
      {
        type: "bot",
        text: "Olá! Como posso ajudar você hoje? Escolha uma das opções abaixo:"
      }
    ]);
    setSelectedQuestion(null);
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          Como Podemos Ajudar?
        </h2>
        
        {/* Chat Container */}
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="p-4 md:p-6 space-y-4 min-h-[300px] max-h-[500px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                  {message.links && (
                    <div className="mt-3 space-y-2">
                      {message.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm bg-background hover:bg-background/80 text-foreground px-3 py-2 rounded-lg transition-colors"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Questions / Reset */}
          <div className="border-t border-border p-4 md:p-6 bg-muted/30">
            {!selectedQuestion ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {questions.map((q, index) => (
                  <Button
                    key={index}
                    variant="soft"
                    size="lg"
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-sm md:text-base justify-start h-auto py-3 px-4"
                  >
                    {q.question}
                  </Button>
                ))}
              </div>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="w-full"
              >
                Ver outras opções
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
