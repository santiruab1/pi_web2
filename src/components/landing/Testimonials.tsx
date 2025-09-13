import { Card, CardContent } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SectionTransition from "@/components/ui/SectionTransition";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CFO, TechCorp Colombia",
    company: "TechCorp",
    image: "/api/placeholder/40/40",
    content: "DianBridge ha revolucionado completamente nuestra gestión contable. Lo que antes nos tomaba días, ahora se hace en minutos. La precisión es impresionante.",
    rating: 5,
    badge: "Empresa Tech"
  },
  {
    name: "Carlos Mendoza",
    role: "Contador Público",
    company: "Estudio Mendoza & Asociados",
    image: "/api/placeholder/40/40",
    content: "La integración con la DIAN es perfecta. Nunca más tendremos problemas con el cumplimiento de normativas. Es como tener un experto contable 24/7.",
    rating: 5,
    badge: "Estudio Contable"
  },
  {
    name: "Ana Patricia Ruiz",
    role: "Gerente Financiera",
    company: "Manufacturas del Norte",
    image: "/api/placeholder/40/40",
    content: "El ahorro de tiempo y recursos ha sido extraordinario. Nuestro equipo puede enfocarse en análisis estratégicos en lugar de tareas repetitivas.",
    rating: 5,
    badge: "Manufactura"
  },
  {
    name: "Roberto Silva",
    role: "Director General",
    company: "Servicios Integrales S.A.S",
    image: "/api/placeholder/40/40",
    content: "La inteligencia artificial de DianBridge es increíble. Aprende de nuestros procesos y mejora continuamente. Es la inversión más rentable que hemos hecho.",
    rating: 5,
    badge: "Servicios"
  },
  {
    name: "Laura Jiménez",
    role: "Administradora",
    company: "Comercial del Sur Ltda",
    image: "/api/placeholder/40/40",
    content: "Los reportes son súper detallados y fáciles de entender. La interfaz es intuitiva y el soporte técnico es excepcional. 100% recomendado.",
    rating: 5,
    badge: "Comercio"
  },
  {
    name: "Diego Herrera",
    role: "CEO",
    company: "Startup Innovadora",
    image: "/api/placeholder/40/40",
    content: "Como startup, necesitábamos una solución escalable y confiable. DianBridge nos ha permitido crecer sin preocuparnos por la contabilidad.",
    rating: 5,
    badge: "Startup"
  }
];

const stats = [
  { number: "500+", label: "Empresas Activas" },
  { number: "99.9%", label: "Satisfacción" },
  { number: "50M+", label: "Transacciones Procesadas" },
  { number: "24/7", label: "Soporte Disponible" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionTransition direction="up" delay={0.1}>
          <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Testimonios
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-blue-600 dark:text-blue-400">clientes</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Miles de empresas confían en DianBridge para automatizar y optimizar su gestión contable
          </p>
          </div>
        </SectionTransition>

        {/* Stats */}
        <SectionTransition direction="up" delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
              </div>
            ))}
          </div>
        </SectionTransition>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SectionTransition key={index} direction="up" delay={0.3 + (index * 0.1)}>
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200 dark:text-blue-800" />
                  <p className="text-slate-700 dark:text-slate-300 italic pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
            </SectionTransition>
          ))}
        </div>

        {/* CTA Section */}
        <SectionTransition direction="up" delay={0.5}>
          <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para transformar tu contabilidad?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a más de 500 empresas que ya automatizaron su gestión contable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Demo Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Precios
              </button>
            </div>
          </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
