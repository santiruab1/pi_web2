import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionTransition from "@/components/ui/SectionTransition";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Perfecto para pequeñas empresas",
    price: "$29",
    period: "/mes",
    badge: "Más Popular",
    popular: false,
    features: [
      "Hasta 100 transacciones/mes",
      "Reportes básicos DIAN",
      "Soporte por email",
      "Integración bancaria básica",
      "Facturación electrónica",
      "Dashboard básico"
    ],
    cta: "Comenzar Prueba Gratis",
    color: "border-slate-200 dark:border-slate-700"
  },
  {
    name: "Profesional",
    description: "Ideal para empresas en crecimiento",
    price: "$79",
    period: "/mes",
    badge: "Más Popular",
    popular: true,
    features: [
      "Hasta 1,000 transacciones/mes",
      "Reportes avanzados DIAN",
      "Soporte prioritario 24/7",
      "Integración bancaria completa",
      "Facturación electrónica avanzada",
      "Dashboard personalizable",
      "IA para optimización",
      "API completa",
      "Backup automático"
    ],
    cta: "Comenzar Prueba Gratis",
    color: "border-blue-500 dark:border-blue-400"
  },
  {
    name: "Empresarial",
    description: "Para grandes corporaciones",
    price: "$199",
    period: "/mes",
    badge: "Personalizado",
    popular: false,
    features: [
      "Transacciones ilimitadas",
      "Reportes personalizados DIAN",
      "Soporte dedicado 24/7",
      "Múltiples integraciones bancarias",
      "Facturación electrónica masiva",
      "Dashboard empresarial",
      "IA avanzada con ML",
      "API ilimitada",
      "Backup en la nube",
      "Consultoría especializada",
      "Entrenamiento del equipo",
      "SLA garantizado"
    ],
    cta: "Contactar Ventas",
    color: "border-slate-200 dark:border-slate-700"
  }
];

const addOns = [
  {
    name: "Módulo de Nómina",
    description: "Gestión completa de nómina y prestaciones",
    price: "$49/mes"
  },
  {
    name: "Análisis Avanzado",
    description: "Reportes de inteligencia de negocios",
    price: "$39/mes"
  },
  {
    name: "Integración ERP",
    description: "Conectores para sistemas ERP existentes",
    price: "$99/mes"
  },
  {
    name: "Soporte Premium",
    description: "Soporte técnico dedicado y consultoría",
    price: "$199/mes"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionTransition direction="up" delay={0.1}>
          <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Precios
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planes que se adaptan a tu <span className="text-blue-600 dark:text-blue-400">empresa</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Elige el plan perfecto para tu empresa. Todos incluyen prueba gratuita de 14 días.
          </p>
          </div>
        </SectionTransition>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <SectionTransition key={index} direction="up" delay={0.2 + (index * 0.1)}>
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'} ${plan.color} border-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-lg">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-lg">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
            </SectionTransition>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Complementos <span className="text-blue-600 dark:text-blue-400">Adicionales</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Potencia tu plan con estos módulos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">{addon.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {addon.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {addon.price}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Agregar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8">
            Preguntas <span className="text-blue-600 dark:text-blue-400">Frecuentes</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Sí, puedes actualizar o degradar tu plan en cualquier momento desde tu dashboard.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-2">¿Qué incluye la prueba gratuita?</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Acceso completo a todas las funciones del plan elegido por 14 días, sin compromiso.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-2">¿Hay descuentos por pago anual?</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Sí, obtienes 2 meses gratis al pagar anualmente. Contacta ventas para más información.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg mb-2">¿Ofrecen soporte en español?</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Absolutamente. Todo nuestro soporte está disponible en español con especialistas locales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
