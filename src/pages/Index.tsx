
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const handleGoogleSignIn = () => {
    alert('Google Sign-In simulated! Welcome to MindMirror 🌟');
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              MindMirror
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Reflect. Heal. Grow.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 gentle-shadow max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              MindMirror helps you journal your thoughts, track emotional well-being, and receive comforting guidance. 
              Your mental health journey deserves a safe, beautiful space to unfold.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/journal">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-calm-blue to-soft-lavender hover:from-blue-400 hover:to-purple-400 text-white px-8 py-6 text-lg smooth-transition transform hover:scale-105 shadow-lg"
                >
                  Start Journaling ✨
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleGoogleSignIn}
                className="border-2 border-calm-blue text-calm-blue hover:bg-calm-blue hover:text-white px-8 py-6 text-lg smooth-transition transform hover:scale-105"
              >
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="animate-gentle-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center gentle-shadow smooth-transition hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-calm-blue to-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Daily Journaling</h3>
            <p className="text-muted-foreground">Express your thoughts freely with guided prompts and a beautiful writing experience.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center gentle-shadow smooth-transition hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-soft-lavender to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Emotion Tracking</h3>
            <p className="text-muted-foreground">Understand your emotional patterns with insightful analysis and visual representations.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center gentle-shadow smooth-transition hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-gentle-green to-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Wellness Tips</h3>
            <p className="text-muted-foreground">Receive personalized guidance and coping strategies tailored to your emotional state.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto gentle-shadow">
          <h2 className="text-3xl font-bold mb-4">Ready to begin your journey?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Take the first step towards better mental health today.
          </p>
          <Link to="/journal">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gentle-green to-green-400 hover:from-green-400 hover:to-green-500 text-white px-8 py-6 text-lg smooth-transition transform hover:scale-105 shadow-lg"
            >
              Start Your First Entry 🌱
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
