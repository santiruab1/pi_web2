import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Calculator, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  producto: [
    { name: "Características", href: "#features" },
    { name: "Precios", href: "#pricing" },
    { name: "Integraciones", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Seguridad", href: "#security" }
  ],
  empresa: [
    { name: "Acerca de", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Carreras", href: "#careers" },
    { name: "Prensa", href: "#press" },
    { name: "Socios", href: "#partners" }
  ],
  soporte: [
    { name: "Centro de Ayuda", href: "#help" },
    { name: "Documentación", href: "#docs" },
    { name: "Comunidad", href: "#community" },
    { name: "Contacto", href: "#contact" },
    { name: "Estado del Sistema", href: "#status" }
  ],
  legal: [
    { name: "Términos de Servicio", href: "#terms" },
    { name: "Política de Privacidad", href: "#privacy" },
    { name: "Cookies", href: "#cookies" },
    { name: "Cumplimiento DIAN", href: "#dian" },
    { name: "Certificaciones", href: "#certifications" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DianBridge</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Sistema de automatización contable potenciado con inteligencia artificial. 
              Revoluciona la gestión financiera de tu empresa con tecnología de vanguardia.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold">Mantente actualizado</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-8" />

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-slate-300">contacto@dianbridge.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-slate-400">Teléfono</p>
              <p className="text-slate-300">+57 (1) 234-5678</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-slate-400">Dirección</p>
              <p className="text-slate-300">Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-slate-400 text-sm">
              © 2024 DianBridge. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
