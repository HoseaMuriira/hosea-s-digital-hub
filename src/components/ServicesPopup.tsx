import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  FileCheck,
  IdCard,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Building2,
  MapPin,
  Phone,
  Eye,
  CheckCircle2,
  Baby,
  Globe,
  FileBadge,
  Handshake,
} from "lucide-react";

const WHATSAPP_NUMBER = "254748053644";

const services = [
  {
    icon: FileCheck,
    title: "KRA Returns Filing",
    description: "Annual & monthly tax returns filed accurately and on time.",
    message: "Hi, I need help with KRA Returns Filing.",
  },
  {
    icon: IdCard,
    title: "KRA PIN Registration / Retrieval",
    description: "New PIN registration or recovery of lost/existing PINs.",
    message: "Hi, I need help with KRA PIN Registration / Retrieval.",
  },
  {
    icon: Landmark,
    title: "eCitizen Services",
    items: [
      { icon: Baby, label: "Birth Certificate" },
      { icon: Globe, label: "Passport Application" },
      { icon: FileBadge, label: "Good Conduct" },
    ],
    message: "Hi, I need help with eCitizen Services.",
  },
  {
    icon: GraduationCap,
    title: "HELB & NSSF Assistance",
    description: "Student loan applications and social security registrations.",
    message: "Hi, I need help with HELB & NSSF Assistance.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Company, sole proprietorship & partnership registrations.",
    message: "Hi, I need help with Business Registration.",
  },
  {
    icon: MapPin,
    title: "Land & Rental Listings",
    description: "Property listings, land searches & rental management.",
    message: "Hi, I need help with Land & Rental Listings.",
  },
];

const highlights = [
  { icon: CheckCircle2, label: "Fast" },
  { icon: ShieldCheck, label: "Genuine" },
  { icon: Handshake, label: "Affordable" },
];

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const ServicesPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="rounded-full px-4 font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Digital Services
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header Banner */}
        <div className="bg-gradient-hero text-white p-6 text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
              HOSTECH DIGITAL SERVICES
            </DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-white/90 text-sm md:text-base">
            Need help with online government services? I've got you covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="p-6 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <a
                key={service.title}
                href={getWhatsAppUrl(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="mt-0.5 w-9 h-9 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{service.title}</h3>
                  {service.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {service.description}
                    </p>
                  )}
                  {service.items && (
                    <ul className="mt-1.5 space-y-1">
                      {service.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground"
                        >
                          <item.icon className="w-3.5 h-3.5 text-primary/70" />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium"
              >
                <h.icon className="w-4 h-4" />
                {h.label}
              </div>
            ))}
          </div>

          {/* Transparency & Location */}
          <div className="space-y-2 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              <span>Transparent process — you can follow everything</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mikinduri & Online Services Available</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary/50 rounded-xl p-5 text-center space-y-3">
            <p className="font-semibold text-foreground">
              WhatsApp Us
            </p>
            <a
              href={getWhatsAppUrl("Hi, I am interested in Hostech Digital Services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline"
            >
              <Phone className="w-5 h-5" />
              0748 053 644
            </a>
            <p className="text-xs text-muted-foreground">
              Thank you for trusting us. Referrals are welcome!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
