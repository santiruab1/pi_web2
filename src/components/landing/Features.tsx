import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import SectionTransition from "@/components/ui/SectionTransition";
import Image from "next/image";
import { 
  Calculator, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  FileText, 
  Clock, 
  Users,
  TrendingUp,
  Database,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Algoritmos avanzados que aprenden de tus patrones contables para optimizar procesos automáticamente.",
    badge: "IA Avanzada",
    color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
  },
  {
    icon: Calculator,
    title: "Cálculos Automáticos",
    description: "Procesamiento instantáneo de cálculos complejos, impuestos y retenciones según normativa DIAN.",
    badge: "Precisión 99.9%",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Shield,
    title: "Cumplimiento Legal",
    description: "Garantiza el cumplimiento total con las regulaciones DIAN y normativas contables colombianas.",
    badge: "100% Legal",
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
  },
  {
    icon: BarChart3,
    title: "Reportes Inteligentes",
    description: "Genera reportes detallados y análisis financieros con visualizaciones interactivas.",
    badge: "Tiempo Real",
    color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
  },
  {
    icon: FileText,
    title: "Documentación Automática",
    description: "Crea y gestiona automáticamente todos los documentos contables requeridos por la DIAN.",
    badge: "Sin Errores",
    color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
  },
  {
    icon: Clock,
    title: "Procesamiento 24/7",
    description: "Sistema disponible las 24 horas para procesar transacciones y generar reportes instantáneamente.",
    badge: "Disponible Siempre",
    color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumenta la Productividad",
    description: "Reduce el tiempo de procesamiento contable en un 80%"
  },
  {
    icon: Database,
    title: "Integración Completa",
    description: "Conecta con bancos, proveedores y sistemas existentes"
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Soporte técnico especializado en contabilidad colombiana"
  },
  {
    icon: CheckCircle,
    title: "Auditoría Automática",
    description: "Detección proactiva de inconsistencias y errores"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionTransition direction="up" delay={0.1}>
          <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Características Principales
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Potencia tu <span className="text-blue-600 dark:text-blue-400">Contabilidad</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            DianBridge combina la última tecnología en inteligencia artificial con décadas de experiencia 
            en contabilidad colombiana para ofrecerte la solución más completa del mercado.
          </p>
          </div>
        </SectionTransition>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <SectionTransition key={index} direction="up" delay={0.1 + (index * 0.1)}>
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
            </SectionTransition>
          ))}
        </div>

        {/* Benefits Section */}
        <SectionTransition direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Illustration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <Image
                src="/ai-automation.svg"
                alt="AI Automation"
                width={256}
                height={256}
                className="w-full h-full"
              />
            </div>
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                ¿Por qué elegir <span className="text-blue-600 dark:text-blue-400">DianBridge</span>?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Más de 500 empresas confían en nosotros para automatizar su contabilidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
