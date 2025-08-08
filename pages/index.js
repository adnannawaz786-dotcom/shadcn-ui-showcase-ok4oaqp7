import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, AlertCircle, CheckCircle, Zap, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Shadcn/UI Showcase
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover the power of modern UI components with beautiful design and smooth animations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Buttons Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 text-center">
              Buttons
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Star className="mr-2 h-4 w-4" />
                Primary
              </Button>
              <Button variant="secondary">
                <Heart className="mr-2 h-4 w-4" />
                Secondary
              </Button>
              <Button variant="outline">
                <Sparkles className="mr-2 h-4 w-4" />
                Outline
              </Button>
              <Button variant="ghost">
                Ghost
              </Button>
              <Button variant="destructive">
                Destructive
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Zap className="mr-2 h-4 w-4" />
                Large Button
              </Button>
            </div>
          </motion.section>

          {/* Cards Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 text-center">
              Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Featured Card
                    </CardTitle>
                    <CardDescription>
                      This is a beautiful card component with gradient background
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cards are perfect for displaying content in a structured way. 
                      They support headers, content, and footer sections.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      Popular Choice
                    </CardTitle>
                    <CardDescription>
                      Most loved by developers worldwide
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Shadcn/UI components are built with accessibility in mind 
                      and follow modern design principles.
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Preview
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                      Select
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-500" />
                      Performance
                    </CardTitle>
                    <CardDescription>
                      Optimized for speed and efficiency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      Built with React and Tailwind CSS for maximum performance 
                      and minimal bundle size.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">
                      View Metrics
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Alerts Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 text-center">
              Alerts
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 dark:text-green-400">Success!</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Your changes have been saved successfully. All components are working perfectly.
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800 dark:text-blue-400">Information</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                  This is an informational alert. You can use it to provide helpful context to users.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-800">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800 dark:text-yellow-400">Warning</AlertTitle>
                <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                  Please review your settings before proceeding. Some configurations may need attention.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again or contact support if the problem persists.
                </AlertDescription>
              </Alert>
            </div>
          </motion.section>

          {/* Badges Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 text-center">
              Badges
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                Default
              </Badge>
              <Badge variant="secondary">
                Secondary
              </Badge>
              <Badge variant="outline">
                Outline
              </Badge>
              <Badge variant="destructive">
                Destructive
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CheckCircle className="mr-1 h-3 w-3" />
                Verified
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <Star className="mr-1 h-3 w-3" />
                Premium
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <Zap className="mr-1 h-3 w-3" />
                Hot
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                <Sparkles className="mr-1 h-3 w-3" />
                New
              </Badge>
            </div>
          </motion.section>

          {/* Interactive Demo Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 text-center">
              Interactive Demo
            </h2>
            <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center">Component Playground</CardTitle>
                <CardDescription className="text-center">
                  Try interacting with these components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center gap-2">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    React
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    Tailwind
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                    Framer Motion
                  </Badge>
                </div>
                
                <Alert className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/20 dark:border-indigo-800">
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                  <AlertTitle className="text-indigo-800 dark:text-indigo-400">
                    Amazing Experience
                  </AlertTitle>
                  <AlertDescription className="text-indigo-700 dark:text-indigo-300">
                    These components work seamlessly together to create beautiful user interfaces.
                  </AlertDescription>
                </Alert>

                <div className="flex flex-wrap justify-center gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline">
                      <Star className="mr-2 h-4 w-4" />
                      Star
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Magic
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 py-8"
        >
          <p className="text-slate-600 dark:text-slate-400">
            Built with ❤️ using Next.js, Tailwind CSS, Framer Motion, and Shadcn/UI
          </p>
        </motion.div>