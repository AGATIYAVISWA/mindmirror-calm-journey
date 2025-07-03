
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const handleGoogleSignIn = () => {
    alert('Google Sign-In simulated! Welcome to MindMirror 🌟');
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-vibrant-purple via-coral-pink to-electric-blue rounded-2xl flex items-center justify-center shadow-2xl animate-glow">
                <Sparkles className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-vibrant-purple via-coral-pink to-electric-blue bg-clip-text text-transparent mb-6 animate-rainbow bg-300%">
              MindMirror
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
              Reflect. Heal. Grow.
            </p>
            <div className="flex justify-center space-x-2 text-4xl animate-pulse-soft">
              <Heart className="text-coral-pink" />
              <Zap className="text-electric-blue" />
              <Sparkles className="text-vibrant-purple" />
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 md:p-16 stunning-shadow max-w-4xl mx-auto mb-16 hover-glow">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
              MindMirror helps you journal your thoughts, track emotional well-being, and receive comforting guidance. 
              Your mental health journey deserves a <span className="bg-gradient-to-r from-vibrant-purple to-coral-pink bg-clip-text text-transparent font-semibold">beautiful, safe space</span> to unfold.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/journal">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-vibrant-purple via-coral-pink to-electric-blue hover:from-purple-600 hover:via-pink-500 hover:to-blue-500 text-white px-10 py-8 text-xl font-semibold smooth-transition transform hover:scale-105 shadow-2xl hover-glow rounded-2xl"
                >
                  <Sparkles className="mr-3" size={24} />
                  Start Journaling
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleGoogleSignIn}
                className="border-3 border-vibrant-purple text-vibrant-purple hover:bg-gradient-to-r hover:from-vibrant-purple hover:to-coral-pink hover:text-white px-10 py-8 text-xl font-semibold smooth-transition transform hover:scale-105 hover-glow rounded-2xl"
              >
                <Heart className="mr-3" size={24} />
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="animate-gentle-bounce">
            <ArrowDown className="mx-auto text-vibrant-purple" size={32} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 text-center stunning-shadow smooth-transition hover:scale-105 hover-glow">
            <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-teal-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-teal-cyan bg-clip-text text-transparent">Daily Journaling</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Express your thoughts freely with guided prompts and a beautiful writing experience that adapts to your needs.</p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center stunning-shadow smooth-transition hover:scale-105 hover-glow">
            <div className="w-20 h-20 bg-gradient-to-r from-vibrant-purple to-lavender-mist rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-vibrant-purple to-lavender-mist bg-clip-text text-transparent">Emotion Tracking</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Understand your emotional patterns with insightful analysis and beautiful visual representations of your journey.</p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center stunning-shadow smooth-transition hover:scale-105 hover-glow">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-green to-teal-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-green to-teal-cyan bg-clip-text text-transparent">Wellness Tips</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Receive personalized guidance and coping strategies tailored to your emotional state and personal growth.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto stunning-shadow hover-glow">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-vibrant-purple via-coral-pink to-electric-blue bg-clip-text text-transparent">Ready to begin your journey?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take the first step towards better mental health today. Your future self will thank you.
          </p>
          <Link to="/journal">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-green via-teal-cyan to-electric-blue hover:from-green-500 hover:via-cyan-500 hover:to-blue-500 text-white px-12 py-8 text-xl font-semibold smooth-transition transform hover:scale-105 shadow-2xl hover-glow rounded-2xl"
            >
              <Heart className="mr-3" size={24} />
              Start Your First Entry
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
