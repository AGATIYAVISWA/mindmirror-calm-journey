
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Save, Sparkles } from 'lucide-react';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');

  const dailyPrompts = [
    "How are you really feeling today?",
    "What's one thing you're grateful for right now?",
    "Describe a moment that brought you peace today.",
    "What would you tell a friend who was feeling like you do?",
    "What's weighing on your mind lately?",
    "How did you show kindness to yourself today?",
    "What's one small step you can take towards feeling better?",
    "Describe your energy level and what might be affecting it.",
    "What are three words that describe your current mood?",
    "What's something you're looking forward to?"
  ];

  React.useEffect(() => {
    const randomPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];
    setCurrentPrompt(randomPrompt);
  }, []);

  const handleSave = () => {
    if (entry.trim()) {
      alert('Your journal entry has been saved! 💙\n\nRemember: every step in your mental health journey matters.');
      setEntry('');
      // Generate new prompt after saving
      const randomPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];
      setCurrentPrompt(randomPrompt);
    } else {
      alert('Please write something before saving your entry.');
    }
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getNewPrompt = () => {
    const randomPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];
    setCurrentPrompt(randomPrompt);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Journal Space
          </h1>
          <p className="text-lg text-muted-foreground">
            A safe place to explore your thoughts and feelings
          </p>
        </div>

        {/* Date Display */}
        <Card className="glass-card mb-6 gentle-shadow">
          <CardContent className="flex items-center justify-center py-4">
            <Calendar className="mr-3 text-calm-blue" size={20} />
            <span className="text-lg font-medium">Today's Date: {getCurrentDate()}</span>
          </CardContent>
        </Card>

        {/* Daily Prompt */}
        <Card className="glass-card mb-6 gentle-shadow">
          <CardHeader>
            <CardTitle className="flex items-center text-soft-lavender">
              <Sparkles className="mr-2" size={20} />
              Daily Reflection Prompt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic text-foreground mb-4">"{currentPrompt}"</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={getNewPrompt}
              className="border-soft-lavender text-soft-lavender hover:bg-soft-lavender hover:text-white smooth-transition"
            >
              Get New Prompt
            </Button>
          </CardContent>
        </Card>

        {/* Journal Entry Area */}
        <Card className="glass-card gentle-shadow">
          <CardHeader>
            <CardTitle>Write Your Heart Out</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Start writing... Let your thoughts flow freely. This is your safe space."
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              className="min-h-[300px] resize-none text-base leading-relaxed border-2 border-calm-blue/20 focus:border-calm-blue focus:ring-calm-blue rounded-xl"
            />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {entry.length} characters written
              </span>
              
              <Button 
                onClick={handleSave}
                className="bg-gradient-to-r from-gentle-green to-green-400 hover:from-green-400 hover:to-green-500 text-white smooth-transition transform hover:scale-105 shadow-lg"
              >
                <Save className="mr-2" size={18} />
                Save Entry
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <div className="text-center mt-8">
          <div className="glass-card rounded-2xl p-6 max-w-md mx-auto gentle-shadow">
            <p className="text-sm text-muted-foreground italic">
              "The greatest revolution of our generation is the discovery that human beings, 
              by changing the inner attitudes of their minds, can change the outer aspects of their lives."
            </p>
            <p className="text-xs text-muted-foreground mt-2">- William James</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
