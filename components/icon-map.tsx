import {
  Activity,
  Anchor,
  Cable,
  ClipboardCheck,
  Droplets,
  FileText,
  Fuel,
  Gauge,
  LifeBuoy,
  PackageCheck,
  Radio,
  ShieldCheck,
  Ship,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { IconKey } from "@/lib/data";

export const iconMap: Record<IconKey, LucideIcon> = {
  activity: Activity,
  anchor: Anchor,
  cable: Cable,
  clipboard: ClipboardCheck,
  droplets: Droplets,
  file: FileText,
  fuel: Fuel,
  gauge: Gauge,
  lifeBuoy: LifeBuoy,
  packageCheck: PackageCheck,
  radio: Radio,
  shield: ShieldCheck,
  ship: Ship,
  truck: Truck,
  waves: Waves,
  wrench: Wrench,
};
