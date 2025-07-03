
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, RefreshCw } from 'lucide-react';

const Emotions = () => {
  const [currentEmotion, setCurrentEmotion] = useState('Calm');
  const [moodData, setMoodData] = useState([
    { emotion: 'Joy', value: 65, color: 'bg-gentle-green' },
    { emotion: 'Calm', value: 80, color: 'bg-calm-blue' },
    { emotion: 'Anxiety', value: 30, color: 'bg-warm-peach' },
    { emotion: 'Sadness', value: 20, color: 'bg-soft-lavender' },
    { emotion: 'Gratitude', value: 75, color: 'bg-soothing-mint' },
  ]);

  const emotions = ['Calm', 'Anxious', 'Happy', 'Overwhelmed', 'Peaceful', 'Stressed', 'Grateful', 'Confused'];
  const wordCloudWords = ['peaceful', 'growth', 'reflection', 'healing', 'mindful', 'grateful', 'strong', 'hopeful', 'balanced', 'centered'];

  const generateNewData = () => {
    const newEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    setCurrentEmotion(newEmotion);
    
    const newMoodData = moodData.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 80) + 20
    }));
    setMoodData(newMoodData);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Emotion Analysis
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding your emotional patterns for better well-being
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Current Emotion Detection */}
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-soft-lavender">
                <Brain className="mr-2" size={20} />
                Detected Emotion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-soft-lavender to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😌</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{currentEmotion}</h3>
                <p className="text-sm text-muted-foreground">
                  Based on your recent journal entries
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={generateNewData}
                  className="mt-4 border-soft-lavender text-soft-lavender hover:bg-soft-lavender hover:text-white smooth-transition"
                >
                  <RefreshCw size={14} className="mr-2" />
                  Refresh Analysis
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emotion Intensity */}
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-calm-blue">
                <TrendingUp className="mr-2" size={20} />
                Intensity Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-r from-calm-blue to-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">75%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your emotional intensity is moderate and stable
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle className="text-gentle-green">Quick Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gentle-green/10 rounded-lg">
                  <p className="text-sm">✨ You've been more reflective lately</p>
                </div>
                <div className="p-3 bg-calm-blue/10 rounded-lg">
                  <p className="text-sm">🌱 Positive growth trend detected</p>
                </div>
                <div className="p-3 bg-soft-lavender/10 rounded-lg">
                  <p className="text-sm">💙 Self-care practices are helping</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mood Chart */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle>Mood Distribution (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moodData.map((mood, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-16 text-sm font-medium">{mood.emotion}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className={`h-full ${mood.color} smooth-transition`}
                        style={{ width: `${mood.value}%` }}
                      />
                    </div>
                    <div className="w-10 text-sm text-muted-foreground">{mood.value}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Word Cloud Placeholder */}
          <Card className="glass-card gentle-shadow">
            <CardHeader>
              <CardTitle>Emotional Word Cloud</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {wordCloudWords.map((word, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          index % 3 === 0 ? 'bg-calm-blue text-white' :
                          index % 3 === 1 ? 'bg-soft-lavender text-white' :
                          'bg-gentle-green text-white'
                        }`}
                        style={{ 
                          fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                          transform: `rotate(${(Math.random() - 0.5) * 20}deg)`
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Words frequently used in your journal entries
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Summary */}
        <Card className="glass-card gentle-shadow mt-6">
          <CardHeader>
            <CardTitle>Weekly Emotional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gentle-green/10 rounded-lg">
                <h4 className="font-semibold text-gentle-green mb-2">Most Frequent</h4>
                <p className="text-2xl font-bold">Calm</p>
                <p className="text-sm text-muted-foreground">appeared 12 times</p>
              </div>
              <div className="text-center p-4 bg-calm-blue/10 rounded-lg">
                <h4 className="font-semibold text-calm-blue mb-2">Trending Up</h4>
                <p className="text-2xl font-bold">Gratitude</p>
                <p className="text-sm text-muted-foreground">+25% this week</p>
              </div>
              <div className="text-center p-4 bg-warm-peach/10 rounded-lg">
                <h4 className="font-semibold text-orange-600 mb-2">Focus Area</h4>
                <p className="text-2xl font-bold">Stress</p>
                <p className="text-sm text-muted-foreground">needs attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emotions;
