import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import SectionTransition from "@/components/ui/SectionTransition";
import { Calculator, Brain, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <SectionTransition direction="right" delay={0.2}>
            <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                <Brain className="w-4 h-4 mr-2" />
                Potenciado por IA
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-slate-900 dark:text-white">Dian</span>
                <span className="text-blue-600 dark:text-blue-400">Bridge</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema de automatización contable inteligente que revoluciona la gestión financiera 
                de tu empresa con tecnología de vanguardia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Soporte</div>
              </div>
            </div>
            </div>
          </SectionTransition>

          {/* Right Content - Dashboard Preview */}
          <SectionTransition direction="left" delay={0.4}>
            <div className="relative">
            {/* Background Illustrations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20">
              <Image
                src="/ai-automation.svg"
                alt="AI Automation"
                width={128}
                height={128}
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 opacity-20">
              <Image
                src="/accounting-illustration.svg"
                alt="Accounting"
                width={96}
                height={96}
                className="w-full h-full"
              />
            </div>
            
            <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-slate-800 relative z-10">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calculator className="w-6 h-6" />
                      <span className="font-semibold">DianBridge Dashboard</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Mock Dashboard Content */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <div className="text-sm text-slate-600 dark:text-slate-400">Ingresos</div>
                      <div className="text-2xl font-bold text-green-600">$45,230</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <div className="text-sm text-slate-600 dark:text-slate-400">Gastos</div>
                      <div className="text-2xl font-bold text-red-600">$12,450</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Facturación Automática</span>
                      </div>
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Conciliación Bancaria</span>
                      </div>
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Reportes DIAN</span>
                      </div>
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full opacity-60"></div>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
