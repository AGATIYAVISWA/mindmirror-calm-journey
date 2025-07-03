import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Heart, RefreshCw, CheckCircle } from 'lucide-react';

const Tips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [completedTips, setCompletedTips] = useState<number[]>([]);

  const tipCategories = {
    anxiety: [
      "Try the 4-7-8 breathing technique: inhale for 4, hold for 7, exhale for 8.",
      "Ground yourself with the 5-4-3-2-1 method: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
      "Write down three things you're grateful for right now.",
      "Take a gentle 10-minute walk outside and focus on nature around you.",
      "Listen to calming music or nature sounds for 15 minutes."
    ],
    stress: [
      "Practice progressive muscle relaxation starting from your toes.",
      "Set a timer for 10 minutes and do something creative - draw, color, or craft.",
      "Drink a warm cup of herbal tea mindfully, focusing on each sip.",
      "Call or text someone who makes you smile.",
      "Organize one small area of your space - it can help clear your mind."
    ],
    sadness: [
      "Allow yourself to feel - emotions are temporary visitors, not permanent residents.",
      "Write a letter to yourself with the compassion you'd show a dear friend.",
      "Watch something that usually makes you laugh, even if you don't feel like it.",
      "Take a warm bath or shower and imagine washing away heavy feelings.",
      "Look at photos that bring back happy memories."
    ],
    general: [
      "Start your day by setting one small, achievable intention.",
      "Practice the two-minute rule: if something takes less than 2 minutes, do it now.",
      "Create a 'done list' alongside your to-do list to celebrate completed tasks.",
      "Send a kind message to someone - helping others helps us too.",
      "Step outside for a few minutes and take three deep breaths of fresh air."
    ]
  };

  const allTips = [
    ...tipCategories.anxiety,
    ...tipCategories.stress,
    ...tipCategories.sadness,
    ...tipCategories.general
  ];

  const getNewTip = () => {
    const newIndex = Math.floor(Math.random() * allTips.length);
    setCurrentTipIndex(newIndex);
  };

  const markCompleted = (tipIndex: number) => {
    if (!completedTips.includes(tipIndex)) {
      setCompletedTips([...completedTips, tipIndex]);
    }
  };

  const quickActions = [
    { icon: "🌸", title: "Deep Breathing", description: "Take 5 deep breaths", duration: "2 min" },
    { icon: "🎵", title: "Calm Music", description: "Listen mindfully", duration: "5 min" },
    { icon: "📝", title: "Gratitude Note", description: "Write 3 good things", duration: "3 min" },
    { icon: "🚶", title: "Mindful Walk", description: "Step outside briefly", duration: "10 min" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Wellness Tips
          </h1>
          <p className="text-lg text-muted-foreground">
            Gentle guidance for your mental health journey
          </p>
        </div>

        {/* Featured Tip */}
        <Card className="glass-card gentle-shadow mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-gentle-green">
              <Lightbulb className="mr-2" size={20} />
              Today's Wellness Tip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-gentle-green/10 to-calm-blue/10 rounded-xl p-6 mb-4">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                "{allTips[currentTipIndex]}"
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={getNewTip}
                  className="bg-gradient-to-r from-gentle-green to-green-400 hover:from-green-400 hover:to-green-500 text-white smooth-transition"
                >
                  <RefreshCw className="mr-2" size={16} />
                  More Tips
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => markCompleted(currentTipIndex)}
                  disabled={completedTips.includes(currentTipIndex)}
                  className={`smooth-transition ${
                    completedTips.includes(currentTipIndex) 
                      ? 'bg-green-100 border-green-300 text-green-700' 
                      : 'border-gentle-green text-gentle-green hover:bg-gentle-green hover:text-white'
                  }`}
                >
                  <CheckCircle className="mr-2" size={16} />
                  {completedTips.includes(currentTipIndex) ? 'Completed!' : 'Mark as Done'}
                </Button>
              </div>
            </div>
            
            {completedTips.length > 0 && (
              <div className="text-center p-4 bg-gentle-green/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  🌟 You've completed {completedTips.length} wellness tip{completedTips.length !== 1 ? 's' : ''}! 
                  Great job taking care of yourself.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card gentle-shadow mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-calm-blue">
              <Heart className="mr-2" size={20} />
              Quick Self-Care Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-br from-calm-blue/5 to-soft-lavender/5 rounded-xl border border-calm-blue/10 smooth-transition hover:shadow-lg hover:scale-105 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <h4 className="font-semibold text-sm mb-1">{action.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{action.description}</p>
                    <span className="text-xs bg-calm-blue/10 text-calm-blue px-2 py-1 rounded-full">
                      {action.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips by Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle className="text-warm-peach">For Anxious Moments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tipCategories.anxiety.slice(0, 3).map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-warm-peach mt-1">•</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle className="text-soft-lavender">When Feeling Overwhelmed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tipCategories.stress.slice(0, 3).map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-soft-lavender mt-1">•</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Encouraging Message */}
        <div className="text-center mt-8">
          <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto gentle-shadow">
            <h3 className="text-xl font-semibold mb-3">Remember</h3>
            <p className="text-muted-foreground leading-relaxed">
              Small steps lead to big changes. Be patient and kind with yourself as you practice these wellness techniques. 
              Your mental health journey is unique, and every effort you make matters. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
