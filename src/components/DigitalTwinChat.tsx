import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

const PRESET_QUESTIONS = [
  "What is your core MarTech stack?",
  "How did your science background help your career?",
  "Tell me about your Mercedes-Benz project.",
  "What campaigns won the ADMAN Awards?"
];

export default function DigitalTwinChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Sawatdee ka! 🙏 I am Natthaporn's AI Digital Twin. Ask me anything about my 10+ years of digital marketing, project coordination, or science-driven marketing strategies!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setErrorStatus(null);
    const newChat: ChatMessage = { role: "user", text };
    setMessages((prev) => [...prev, newChat]);
    setInputValue("");
    setIsLoading(true);

    try {
      const chatHistoryForAPI = messages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        text: msg.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: chatHistoryForAPI
        })
      });

      if (!res.ok) {
        throw new Error(`Failed to consult AI Twin (Status ${res.status})`);
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("Could not connect to the Digital Twin. Operating in safe offline mode.");
      // Soft fallback so the app continues gracefully
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `[Offline Twin] I'm currently unable to query my primary neural matrix, but I can tell you that Natthaporn has a deep expertise in Enterprise MarTech (Adobe Experience Manager, Salesforce), Data Analytics (Adobe, Power BI), and SEO campaigns! You can also email her directly at nattha.maionmue@gmail.com.`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Sawatdee ka! 🙏 Chat is reset. Feel free to ask about my professional campaign strategies or technical qualifications!"
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <>
      {/* Floating Action Trigger Button - Block style from design guide */}
      <button
        id="btn-open-chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 border-2 border-black dark:border-white shadow-xl px-5 py-4 transition-all duration-150 font-mono text-xs font-bold tracking-widest uppercase rounded-none cursor-pointer"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-black dark:bg-zinc-400 rounded-none animate-ping" />
        </div>
        <span>CONSULT AI TWIN_</span>
      </button>

      {/* Floating Chat Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6 pointer-events-none bg-black/10 dark:bg-black/30 backdrop-blur-xs">
            <motion.div
              id="ai-chat-window"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md h-[40rem] max-h-[85vh] bg-white dark:bg-black border-2 border-black dark:border-white shadow-2xl rounded-none flex flex-col pointer-events-auto overflow-hidden text-black dark:text-white"
            >
              {/* Card Ribbon Header with the decorative slashes */}
              <div className="bg-black text-white px-5 py-4 flex items-center justify-between border-b border-black dark:border-white relative pattern-stripes-dark">
                {/* Visual Decorative Hash Corner Marks */}
                <div className="absolute top-0 left-4 text-xs font-mono text-zinc-400 select-none">////</div>
                
                <div className="flex items-center gap-2.5 relative z-10">
                  <div className="w-8 h-8 rounded-none border border-white bg-white text-black flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-tight uppercase leading-none">Natthaporn Maionmue</h3>
                    <p className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-bold mt-1">AI Digital Twin v1.3</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 relative z-10">
                  <button
                    onClick={clearChat}
                    title="Clear Conversation"
                    className="p-1.5 border border-white hover:bg-white hover:text-black text-white transition-all rounded-none cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 border border-white hover:bg-white hover:text-black text-white transition-all rounded-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Message log area with custom scrollbars */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-50 dark:bg-zinc-950">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Role Avatar Indicator */}
                    <div className={`w-7 h-7 rounded-none flex items-center justify-center shrink-0 border ${
                      msg.role === "user"
                        ? "bg-white dark:bg-black border-black dark:border-white text-black dark:text-white"
                        : "bg-black text-white border-black dark:bg-white dark:text-black"
                    }`}>
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Chat Bubble card */}
                    <div className={`max-w-[80%] rounded-none p-3 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-black text-white border border-black dark:bg-white dark:text-black"
                        : "bg-[#E5E5E5] text-black border border-zinc-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-800"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-none bg-black text-white flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-[#E5E5E5] text-black border border-zinc-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 rounded-none p-3 border flex items-center gap-2 text-xs font-mono">
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-none animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-none animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-none animate-bounce" />
                      </span>
                      <span>Consulting memories...</span>
                    </div>
                  </div>
                )}

                {errorStatus && (
                  <div className="flex gap-2 items-center bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white rounded-none p-2.5 text-[11px] font-mono">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorStatus}</span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Preset recruiter/client prompt questions helper */}
              <div className="p-3 border-t border-black dark:border-white bg-white dark:bg-black">
                <div className="flex items-center gap-1.5 text-[9px] text-[#737373] dark:text-zinc-400 font-mono tracking-wider uppercase font-bold mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>CONSULTING TEMPLATES_</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scrollbar">
                  {PRESET_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      disabled={isLoading}
                      className="text-[10px] font-mono text-left px-3 py-1.5 rounded-none bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border border-black dark:border-white transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="p-3 bg-white dark:bg-black border-t border-black dark:border-white flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask the digital twin..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2 rounded-none bg-white dark:bg-zinc-900 border border-black dark:border-white text-xs focus:outline-none focus:ring-0 text-black dark:text-white placeholder:text-zinc-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 rounded-none bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 border border-black dark:border-white disabled:opacity-40 transition-colors flex items-center justify-center shrink-0 cursor-pointer text-xs font-mono font-bold"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
