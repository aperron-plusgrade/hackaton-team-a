import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from './Button'
import { Logo } from './Logo'
import { useAppStore } from '@/store'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const ChatbotContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  z-index: 1000;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
  }
`

const ChatbotButton = styled.button<{ hasNotification?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  ${({ hasNotification, theme }) => hasNotification && `
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      right: 8px;
      width: 12px;
      height: 12px;
      background: ${theme.colors.sunshine};
      border-radius: 50%;
      border: 2px solid white;
    }
  `}
`

const ChatWindow = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  height: 400px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0)'};
  transform-origin: bottom right;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  pointer-events: ${({ isOpen }) => isOpen ? 'auto' : 'none'};
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 280px;
    height: 350px;
  }
`

const ChatHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const ChatMessages = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Message = styled.div<{ isBot?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  ${({ isBot }) => !isBot && 'flex-direction: row-reverse;'}
`

const MessageBubble = styled.div<{ isBot?: boolean }>`
  max-width: 80%;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ isBot, theme }) => 
    isBot ? theme.colors.gray[100] : theme.colors.primary};
  color: ${({ isBot, theme }) => 
    isBot ? theme.colors.gray[800] : 'white'};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.4;
`

const MessageAvatar = styled.div<{ isBot?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ isBot, theme }) => 
    isBot ? theme.colors.secondary : theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
`

const ChatInput = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

interface ChatMessage {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses = [
  "🌞 Don't forget to bring sunscreen for your beach day in Nassau!",
  "🏊‍♀️ The pool deck is perfect today - grab your swimsuit!",
  "🍽️ Your dinner reservation is at 7 PM - smart casual dress code.",
  "🌧️ Looks like rain in Cozumel - perfect time for the spa!",
  "🎭 Tonight's show starts at 8 PM in the main theater.",
  "☕ The coffee shop opens at 6 AM if you're an early bird!",
  "🛍️ Duty-free shopping closes at 6 PM today.",
  "🏃‍♂️ The fitness center has yoga at 7 AM tomorrow morning."
]

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [hasNotification, setHasNotification] = useState(true)
  const { currentPassenger } = useAppStore()

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: ChatMessage = {
      id: '1',
      text: `Hi ${currentPassenger?.name.split(' ')[0] || 'there'}! 👋 I'm your cruise assistant. I can help you with reminders, recommendations, and questions about your trip!`,
      isBot: true,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])

    // Send periodic helpful reminders
    const interval = setInterval(() => {
      if (!isOpen) {
        setHasNotification(true)
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
        const reminderMessage: ChatMessage = {
          id: Date.now().toString(),
          text: randomResponse,
          isBot: true,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, reminderMessage])
      }
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [currentPassenger, isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setHasNotification(false)
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for your question! Let me help you with that. 😊",
        "Great question! I'd recommend checking with guest services for the most up-to-date information.",
        "That sounds like fun! Have you checked out the activities in your trip map?",
        "I'm here to help! Is there anything specific you'd like to know about your cruise?",
        "Excellent choice! Don't forget to make a reservation if needed."
      ]
      
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <ChatbotContainer isOpen={isOpen}>
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          <ChatTitle>
            <Logo size="sm" hideText />
            Cruise Assistant
          </ChatTitle>
          <CloseButton onClick={handleToggle}>
            <X size={20} />
          </CloseButton>
        </ChatHeader>
        
        <ChatMessages>
          {messages.map((message) => (
            <Message key={message.id} isBot={message.isBot}>
              <MessageAvatar isBot={message.isBot}>
                {message.isBot ? '🤖' : '👤'}
              </MessageAvatar>
              <MessageBubble isBot={message.isBot}>
                {message.text}
              </MessageBubble>
            </Message>
          ))}
        </ChatMessages>
        
        <ChatInput>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
          />
          <SendButton 
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            <Send size={16} />
          </SendButton>
        </ChatInput>
      </ChatWindow>
      
      <ChatbotButton 
        onClick={handleToggle}
        hasNotification={hasNotification}
        data-testid="chatbot-button"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </ChatbotButton>
    </ChatbotContainer>
  )
}