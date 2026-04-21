import { motion } from 'motion/react';

const partners = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Meta', color: '#0668E1' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Vercel', color: '#000000' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Notion', color: '#000000' },
];

const Logo = ({ name, color }: { name: string; color: string }) => {
  const svgProps = { width: 32, height: 32, viewBox: '0 0 32 32' };
  
  switch (name) {
    case 'Google':
      return (
        <svg {...svgProps} fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    case 'Meta':
      return (
        <svg {...svgProps} fill={color}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'Microsoft':
      return (
        <svg {...svgProps} fill="none">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#00A4EF"/>
        </svg>
      );
    case 'Amazon':
      return (
        <svg {...svgProps} fill="none">
          <path d="M21.35 10.87c-.68-1.93-2.42-3.19-4.65-3.19-2.12 0-3.89 1.12-4.65 2.92l-1.42-1.01c1.17-2.23 3.51-3.78 6.22-3.78 3.48 0 6.15 2.51 6.15 6.06 0 3.64-2.51 6.15-6.15 6.15-2.24 0-4.16-1.14-5.26-2.93l-1.42.97c1.54 2.22 4.15 3.53 6.87 3.53 4.01 0 7.1-2.92 7.1-6.74-.01-3.62-2.74-5.98-5.99-5.98z" fill="#FF9900"/>
          <path d="M14.7 18.85c.19.22.57.33.94.23.27-.07.48-.26.63-.53.14-.26.17-.55.09-.82-.07-.27-.24-.48-.49-.61-.27-.14-.57-.14-.85-.02-.3.13-.52.39-.61.7-.08.31-.02.63.17.87.19.2.48.32.78.3.08-.01.15-.03.22-.05.08-.03.17-.02.24.02z" fill="#FF9900"/>
        </svg>
      );
    case 'Stripe':
      return (
        <svg {...svgProps} fill="none">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" fill="#635BFF"/>
        </svg>
      );
    case 'Vercel':
      return (
        <svg {...svgProps} fill="#000">
          <path d="M12 1L24 22H0L12 1z" fill="#000"/>
        </svg>
      );
    case 'Figma':
      return (
        <svg {...svgProps} fill="none">
          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#F24E1E"/>
          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
        </svg>
      );
    case 'Notion':
      return (
        <svg {...svgProps} fill="none">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.373.466l1.822 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.186zm-17.1-5.36L18.35.746c1.26-.093 1.587 0 2.381.56l3.456 2.427c.56.42.746.56.746 1.026v15.145c0 .933-.28 1.493-1.4 1.587L4.934 22.94c-.84.047-1.26-.093-1.68-.607L.94 20.01c-.467-.607-.654-1.073-.654-1.587V3.233c0-.746.28-1.307 1.166-1.4z" fill="#000"/>
        </svg>
      );
    default:
      return <span style={{ color, fontWeight: 'bold' }}>{name[0]}</span>;
  }
};

export default function LogoMarquee() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#6B7280] font-medium mb-2">Nos Partenaires</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A]">
            Ils nous font confiance
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-16 animate-marquee"
              style={{ width: 'max-content' }}
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex items-center gap-3 whitespace-nowrap cursor-pointer group"
                >
                  <div className="w-10 h-10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <Logo name={partner.name} color={partner.color} />
                  </div>
                  <span className="text-lg font-semibold text-[#0A0A0A] opacity-40 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}